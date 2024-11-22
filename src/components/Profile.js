import React, { memo } from 'react';
import './Profile.css'; // Import the CSS file for styling

function Profile() {
    // Dummy data for the profile
    const user = {
        name: 'Prakhar Verma',
        bio: 'A passionate software developer with experience in building modern web applications. Enjoys solving complex problems and learning new technologies.',
        email: 'prakharverma@example.com',
        phone: '+91 9368805624',
        location: 'India',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg', // Random profile picture
        skills: ['JavaScript', 'React', 'Node.js', 'CSS', 'MongoDB'],
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={user.avatar} alt="Profile Avatar" className="profile-avatar" />
                <h2 className="profile-name">{user.name}</h2>
                <p className="profile-bio">{user.bio}</p>
            </div>

            <div className="profile-details">
                <h3>Contact Information</h3>
                <ul className="contact-list">
                    <li>Email: <span>{user.email}</span></li>
                    <li>Phone: <span>{user.phone}</span></li>
                    <li>Location: <span>{user.location}</span></li>
                </ul>
            </div>

            <div className="profile-skills">
                <h3>Skills</h3>
                <ul className="skills-list">
                    {user.skills.map((skill, index) => (
                        <li key={index} className="skill-item">{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default memo(Profile);
