import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';  // Import custom CSS for styling

function Dashboard() {
    const [registrations, setRegistrations] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true); // For loading state
    const [error, setError] = useState(null); // For error handling

    // Fetch registration data on component mount
    useEffect(() => {
        axios.get('http://localhost:5000/registrations')
            .then(response => {
                setRegistrations(response.data.registrations);
                setCount(response.data.count);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching registrations:', error);
                setError('Error fetching registrations');
                setLoading(false);
            });
    }, []);

    return (
        <div className="dashboard-container">
            <div className="header">
                <h2>Event Registration Dashboard</h2>
            </div>

            {/* Show loading state */}
            {loading ? (
                <div className="loading">Loading...</div>
            ) : error ? (
                <div className="error">{error}</div>
            ) : (
                <div>
                    <h3>Total Registrations: {count}</h3>

                    <div className="table-container">
                        <table className="registration-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Event Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registrations.map((registration) => (
                                    <tr key={registration.id}>
                                        <td>{registration.id}</td>
                                        <td>{registration.name}</td>
                                        <td>{registration.email}</td>
                                        <td>{registration.phone}</td>
                                        <td>{registration.event_name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default memo(Dashboard);
