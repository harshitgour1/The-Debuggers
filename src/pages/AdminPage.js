import React from 'react';
import './AdminPage.css';

const AdminPage = () => {
    return (
        <div className="admin-dashboard">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="brand">
                    <h2>Admin Panel</h2>
                </div>
                <nav>
                    <a href="#overview" className="active">Dashboard</a>
                    <a href="#users">Manage Users</a>
                    <a href="#projects">Projects</a>
                    <a href="#analytics">Analytics</a>
                    <a href="#settings">Settings</a>
                    <a href="#logout">Logout</a>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="main-content">
                {/* Header */}
                <header className="main-header">
                    <h1>Welcome, Admin!</h1>
                    <button className="logout-btn">Logout</button>
                </header>

                {/* Dashboard Overview */}
                <section id="overview" className="overview">
                    <h2>Dashboard Overview</h2>
                    <div className="stats">
                        <div className="stat-card">
                            <h3>Total Users</h3>
                            <p>1,230</p>
                        </div>
                        <div className="stat-card">
                            <h3>Active Projects</h3>
                            <p>245</p>
                        </div>
                        <div className="stat-card">
                            <h3>Pending Approvals</h3>
                            <p>14</p>
                        </div>
                        <div className="stat-card">
                            <h3>Feedback Received</h3>
                            <p>98</p>
                        </div>
                    </div>
                </section>

                {/* Manage Users */}
                <section id="users" className="users-section">
                    <h2>Manage Users</h2>
                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>101</td>
                                <td>John Doe</td>
                                <td>john@example.com</td>
                                <td>Student</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>102</td>
                                <td>Jane Smith</td>
                                <td>jane@example.com</td>
                                <td>Alumni</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Analytics */}
                <section id="analytics" className="analytics">
                    <h2>Analytics</h2>
                    <div className="charts">
                        <div className="chart">User Growth Chart</div>
                        <div className="chart">Project Statistics</div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AdminPage;
