import React, { useState } from 'react';
import axios from 'axios';
import './EventRegistrationForm.css'; // Import CSS

const EventRegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        event_name: '',
    });

    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', formData);
            setMessage(response.data.message);
            setIsModalOpen(true); // Open modal after successful registration
            setFormData({ name: '', email: '', phone: '', event_name: '' }); // Reset form
        } catch (error) {
            setMessage(error.response?.data?.message || 'An error occurred.');
        }
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close modal
    };

    return (
        <div className="event-registration-container">
            <h2>Event Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Event Name:</label>
                    <input
                        type="text"
                        name="event_name"
                        value={formData.event_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>

            {/* Success Modal */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Registration Successful!</h3>
                        <p>{message}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventRegistrationForm;
