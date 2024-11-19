import React from "react";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Student Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Assigned Projects Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Assigned Projects</h2>
            <ul>
              <li className="bg-gray-50 p-3 mb-3 rounded-md shadow">
                <h3 className="font-bold">Project 1: Web Development</h3>
                <p className="text-sm text-gray-600">Due date: 12/12/2024</p>
              </li>
              <li className="bg-gray-50 p-3 mb-3 rounded-md shadow">
                <h3 className="font-bold">Project 2: Mobile App</h3>
                <p className="text-sm text-gray-600">Due date: 15/12/2024</p>
              </li>
            </ul>
          </div>

          {/* Progress Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
            <div className="flex items-center justify-between">
              <span className="text-lg">Project 1 Progress:</span>
              <span className="text-blue-600 font-bold">75%</span>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          {/* Metrics Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your Metrics</h2>
            <div className="text-sm text-gray-600">
              <p>Completed Projects: 3</p>
              <p>Assignments Remaining: 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
