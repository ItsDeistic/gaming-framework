import React from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Total Features', value: 100, icon: '\u2699\uFE0F' },
  { label: 'Active Users', value: 2847, icon: '\uD83D\uDC65' },
  { label: 'Categories', value: 10, icon: '\uD83D\uDCC1' },
  { label: 'Uptime', value: '99.9%', icon: '\uD83D\uDFE2' },
];

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map(s => (
          <div key={s.label} className="bg-gray-800 border border-gray-700 rounded-xl p-5 text-center">
            <div className="text-3xl mb-2">{s.icon}</div>
            <p className="text-purple-400 text-2xl font-bold">{s.value}</p>
            <p className="text-gray-400 text-xs mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
          <h2 className="text-white font-semibold mb-3">Quick Actions</h2>
          <div className="space-y-2">
            <Link to="/admin/features" className="block w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors">
              \u2699\uFE0F Manage Features
            </Link>
            <Link to="/admin/users" className="block w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors">
              \uD83D\uDC65 Manage Users
            </Link>
            <Link to="/admin/analytics" className="block w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors">
              \uD83D\uDCC8 View Analytics
            </Link>
          </div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
          <h2 className="text-white font-semibold mb-3">System Status</h2>
          <div className="space-y-2">
            {['API Server','Feature Engine','Auth Service','Analytics Pipeline'].map(s => (
              <div key={s} className="flex justify-between items-center">
                <span className="text-gray-300 text-sm">{s}</span>
                <span className="text-xs bg-green-900 text-green-400 px-2 py-0.5 rounded-full">Online</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
