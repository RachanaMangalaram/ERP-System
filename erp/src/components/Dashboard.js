import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    const containerStyle = {
        maxWidth: '800px',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px'
    };

    const summaryStyle = {
        textAlign: 'center',
        marginBottom: '30px'
    };

    const metricStyle = {
        marginBottom: '20px'
    };

    const navigationStyle = {
        textAlign: 'center'
    };

    const buttonStyle = {
        display: 'inline-block',
        margin: '10px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px'
    };

    const hoverStyle = {
        backgroundColor: '#0056b3'
    };

    return (
        <div style={containerStyle}>
            <div style={summaryStyle}>
                <h2>Dashboard Summary</h2>
            </div>
            <div style={metricStyle}>
                <h3>Total Products</h3>
                <p>1000</p>
            </div>
            <div style={metricStyle}>
                <h3>Total Orders</h3>
                <p>500</p>
            </div>
            <div style={navigationStyle}>
                {/* Use Link component instead of anchor tags */}
                <Link to="/products" style={buttonStyle}>Manage Products</Link>
                <Link to="/orders" style={{ ...buttonStyle, ...hoverStyle }}>Manage Orders</Link>
            </div>
        </div>
    );
}

export default Dashboard;
