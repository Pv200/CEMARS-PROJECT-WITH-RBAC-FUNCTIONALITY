const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

// Create an Express app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'kartik@2005', // Replace with your MySQL password
    database: 'event_registration', // Database for event registration
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to MySQL database.');

        // Create the registrations table if it doesn't exist
        const createRegistrationsTableQuery = `
        CREATE TABLE IF NOT EXISTS registrations (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            phone VARCHAR(15) NOT NULL,
            event_name VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;
        
        db.query(createRegistrationsTableQuery, (err, result) => {
            if (err) {
                console.error('Error creating registrations table:', err);
            } else {
                console.log('Table "registrations" is ready.');
            }
        });

        // Create the posts table if it doesn't exist
        const createPostsTableQuery = `
        CREATE TABLE IF NOT EXISTS posts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            content TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;

        db.query(createPostsTableQuery, (err, result) => {
            if (err) {
                console.error('Error creating posts table:', err);
            } else {
                console.log('Table "posts" is ready.');
            }
        });
    }
});

// API Routes for Event Registration
// POST endpoint: Register a user for an event
app.post('/register', (req, res) => {
    const { name, email, phone, event_name } = req.body;

    if (!name || !email || !phone || !event_name) {
        return res.status(400).send({ message: 'All fields are required.' });
    }

    const query = 'INSERT INTO registrations (name, email, phone, event_name) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, phone, event_name], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send({ message: 'Error registering the event.' });
        }
        res.status(200).send({ message: 'Registration successful!' });
    });
});

// GET endpoint: Fetch all registrations
app.get('/registrations', (req, res) => {
    // Get the count of registrations
    const countQuery = 'SELECT COUNT(*) AS count FROM registrations';
    db.query(countQuery, (err, countResult) => {
        if (err) {
            console.error('Error fetching count:', err);
            return res.status(500).send({ message: 'Error fetching count' });
        }

        // Fetch all registrations
        const query = 'SELECT * FROM registrations';
        db.query(query, (err, registrations) => {
            if (err) {
                console.error('Error fetching registrations:', err);
                return res.status(500).send({ message: 'Error fetching registrations' });
            }
            res.status(200).send({ count: countResult[0].count, registrations });
        });
    });
});

// API Routes for Blog Post Management
// GET endpoint: Fetch all blog posts
app.get('/posts', (req, res) => {
    const query = 'SELECT * FROM posts ORDER BY created_at DESC';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching posts:', err);
            return res.status(500).send({ message: 'Error fetching posts' });
        }
        res.status(200).send({ posts: results });
    });
});

// POST endpoint: Create a new blog post
app.post('/posts', (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).send({ message: 'Title and Content are required.' });
    }

    const query = 'INSERT INTO posts (title, content) VALUES (?, ?)';
    db.query(query, [title, content], (err, result) => {
        if (err) {
            console.error('Error inserting post:', err);
            return res.status(500).send({ message: 'Error creating post' });
        }
        res.status(200).send({ message: 'Post created successfully' });
    });
});

// DELETE endpoint: Delete a blog post
app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM posts WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error deleting post:', err);
            return res.status(500).send({ message: 'Error deleting post' });
        }
        res.status(200).send({ message: 'Post deleted successfully' });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
