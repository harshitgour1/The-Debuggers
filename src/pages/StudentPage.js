import React from 'react';
import './StudentPage.css';

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
        <div className="container">
            <header>
                <h1>Student Portal</h1>
                <nav>
                    <a href="#dashboard">Dashboard</a>
                    <a href="#mentors">Mentors</a>
                    <a href="#projects">Projects</a>
                    <a href="#logout">Logout</a>
                </nav>
            </header>
            
            <div className="main-section">
                <aside className="sidebar">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#assignments">Assignments</a></li>
                        <li><a href="#mentors">My Mentors</a></li>
                        <li><a href="#progress">Progress Tracker</a></li>
                        <li><a href="#resources">Resources</a></li>
                    </ul>
                </aside>
                
                <main className="content">
                    <h2>Welcome Back, Student!</h2>
                    <p>Here’s your personalized dashboard to manage assignments, connect with mentors, and track your academic journey.</p>
                    
                    <section className="mentor-section">
                        <h3>Your Mentors</h3>
                        <ul>
                            <li>Alumni A - <em>Assignment Mentor</em></li>
                            <li>Alumni B - <em>Project Guide</em></li>
                        </ul>
                    </section>

                    <div className="quick-buttons">
                        <button onClick={() => alert("Downloading Assignment Resources!")}>Download Assignments</button>
                        <button onClick={() => alert("Viewing Progress Tracker!")}>View Progress</button>
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
        </div>
    );
};

export default StudentPage;
