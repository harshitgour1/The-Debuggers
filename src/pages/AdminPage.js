import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center text-red-600 mb-6">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Management Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Add New User</button>
            <ul className="mt-4">
              <li className="bg-gray-50 p-3 mb-3 rounded-md shadow">
                <p className="font-bold">Student 1</p>
                <p className="text-sm text-gray-600">Role: Student</p>
              </li>
              <li className="bg-gray-50 p-3 mb-3 rounded-md shadow">
                <p className="font-bold">Alumni 1</p>
                <p className="text-sm text-gray-600">Role: Alumni</p>
              </li>
            </ul>
          </div>

          {/* Activity Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Activity Overview</h2>
            <ul>
              <li className="bg-gray-50 p-3 mb-3 rounded-md shadow">
                <p className="font-bold">Project 1: Web Development</p>
                <p className="text-sm text-gray-600">Status: In Progress</p>
              </li>
              <li className="bg-gray-50 p-3 mb-3 rounded-md shadow">
                <p className="font-bold">Project 2: Mobile App</p>
                <p className="text-sm text-gray-600">Status: Completed</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
