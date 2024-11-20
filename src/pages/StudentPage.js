import React from 'react';
import './StudentPage.css';
import ChatBox from './ChatBox';  // Import the ChatBox component

const StudentPage = () => {
    // Sample data for leaderboard
    const students = [
        { name: 'Student A', completed: 90, total: 100 },
        { name: 'Student B', completed: 60, total: 100 },
        { name: 'Student C', completed: 100, total: 100 },
        { name: 'Student D', completed: 75, total: 100 },
        { name: 'Student E', completed: 50, total: 100 },
    ];

    return (
        <div className="student-container">
            <header className="student-header">
                <h1 className="header-title">Welcome to the Student Portal</h1>
                <nav className="header-nav">
                    <a href="#dashboard" className="nav-link">Dashboard</a>
                    <a href="#mentors" className="nav-link">Mentors</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#logout" className="nav-link logout">Logout</a>
                </nav>
            </header>
            
            <div className="main-section">
                <aside className="sidebar">
                    <h3 className="sidebar-title">Quick Links</h3>
                    <ul className="sidebar-list">
                        <li><a href="#assignments" className="sidebar-link">Assignments</a></li>
                        <li><a href="#mentors" className="sidebar-link">My Mentors</a></li>
                        <li><a href="#progress" className="sidebar-link">Progress Tracker</a></li>
                        <li><a href="#resources" className="sidebar-link">Resources</a></li>
                    </ul>
                </aside>
                
                <main className="content">
                    <section className="welcome-section">
                        <h2>Welcome Back, Student!</h2>
                        <p>Here’s your personalized dashboard to manage assignments, connect with mentors, and track your academic journey.</p>
                    </section>

                    <section className="mentor-section">
                        <h3>Your Mentors</h3>
                        <ul>
                            <li>Alumni A - <em>Assignment Mentor</em></li>
                            <li>Alumni B - <em>Project Guide</em></li>
                        </ul>
                    </section>

                    <div className="quick-buttons">
                        <button className="btn" onClick={() => alert("Downloading Assignment Resources!")}>Download Assignments</button>
                        <button className="btn" onClick={() => alert("Viewing Progress Tracker!")}>View Progress</button>
                    </div>

                    {/* Leaderboard Section */}
                    <section id="leaderboard" className="leaderboard-section">
                        <h3>Leaderboard</h3>
                        <table className="leaderboard-table">
                            <thead>
                                <tr>
                                    <th>Student Name</th>
                                    <th>Completed</th>
                                    <th>Progress</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.name}</td>
                                        <td>{student.completed}/{student.total}</td>
                                        <td>
                                            <div className="progress-bar">
                                                <div
                                                    className="progress"
                                                    style={{ width: `${(student.completed / student.total) * 100}%` }}

                                                ></div>
                                            </div>
                                        </td>
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

export default StudentPage;