import React, { useState } from "react";
import './AlumniPage.css';
import ChatBox from './ChatBox';  // Import the ChatBox component

const AlumniPage = () => {
    // Sample data for mentor assignments
    const assignments = [
        { assignment: "Math Assignment 1", student: "Student A", dueDate: "2024-11-25" },
        { assignment: "Physics Lab Report", student: "Student B", dueDate: "2024-12-05" },
        { assignment: "Chemistry Assignment 2", student: "Student C", dueDate: "2024-11-28" },
    ];

    return (
        <div className="alumni-container">
            <header className="alumni-header">
                <h1 className="header-title">Mentor Dashboard</h1>
                <nav className="header-nav">
                    <a href="#assignments" className="nav-link">Assignments</a>
                    <a href="#students" className="nav-link">Students</a>
                    <a href="#logout" className="nav-link logout">Logout</a>
                </nav>
            </header>

            <div className="main-section">
                <aside className="sidebar">
                    <h3 className="sidebar-title">Quick Links</h3>
                    <ul className="sidebar-list">
                        <li><a href="#assignments" className="sidebar-link">View Assignments</a></li>
                        <li><a href="#students" className="sidebar-link">Mentor Students</a></li>
                    </ul>
                </aside>

                <main className="content">
                    <section className="assignments-section">
                        <h3>Assignments Assigned</h3>
                        <table className="assignments-table">
                            <thead>
                                <tr>
                                    <th>Assignment</th>
                                    <th>Student</th>
                                    <th>Due Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {assignments.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.assignment}</td>
                                        <td>{item.student}</td>
                                        <td>{item.dueDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>

            {/* Chat Box Component */}
            <ChatBox />
        </div>
    );
};

export default AlumniPage;