import React from "react";

const AlumniDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center text-green-600 mb-6">Alumni Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Assigned Projects Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Assigned Projects</h2>
            <ul>
              <li className="bg-gray-50 p-3 mb-3 rounded-md shadow">
                <h3 className="font-bold">Project 1: Mentoring Students</h3>
                <p className="text-sm text-gray-600">Students Assigned: 2</p>
              </li>
              <li className="bg-gray-50 p-3 mb-3 rounded-md shadow">
                <h3 className="font-bold">Project 2: AI for Education</h3>
                <p className="text-sm text-gray-600">Students Assigned: 3</p>
              </li>
            </ul>
          </div>

          {/* Students Assigned Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Students You Mentor</h2>
            <ul>
              <li className="bg-gray-50 p-3 mb-3 rounded-md shadow">
                <p className="font-bold">Student 1</p>
                <p className="text-sm text-gray-600">Assigned to Project: Web Development</p>
              </li>
              <li className="bg-gray-50 p-3 mb-3 rounded-md shadow">
                <p className="font-bold">Student 2</p>
                <p className="text-sm text-gray-600">Assigned to Project: AI for Education</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniDashboard;
