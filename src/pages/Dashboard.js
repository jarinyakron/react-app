import React from 'react';

function Dashboard() {
    return (
        <div className="min-h-screen bg-pink-50 p-6">
            <nav className="bg-pink-200 p-4 rounded-lg shadow-md mb-6">
                <h1 className="text-3xl font-bold text-pink-800">Dashboard</h1>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold text-pink-700 mb-2">Overview</h2>
                    <p className="text-pink-600">Quick summary of your activities.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold text-pink-700 mb-2">Statistics</h2>
                    <p className="text-pink-600">Your latest stats at a glance.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold text-pink-700 mb-2">Tasks</h2>
                    <p className="text-pink-600">Things you need to do today.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold text-pink-700 mb-2">Messages</h2>
                    <p className="text-pink-600">New messages from your contacts.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold text-pink-700 mb-2">Settings</h2>
                    <p className="text-pink-600">Adjust your preferences.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold text-pink-700 mb-2">Profile</h2>
                    <p className="text-pink-600">Update your personal information.</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
