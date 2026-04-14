import React, { useState } from 'react';
import { useAdminAuth } from '../hooks/useAdminAuth';
import { useNavigate } from 'react-router-dom';

export default function AdminSettings() {
  const { logout } = useAdminAuth();
  const navigate = useNavigate();
  const [siteName, setSiteName] = useState('Gaming Framework');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>
      <div className="max-w-lg space-y-6">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
          <h2 className="text-white font-semibold mb-4">General</h2>
          <label className="block text-gray-400 text-sm mb-1">Site Name</label>
          <input value={siteName} onChange={e => setSiteName(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-2 mb-4 focus:outline-none focus:border-purple-500" />
          <button onClick={handleSave}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              saved ? 'bg-green-600 text-white' : 'bg-purple-600 hover:bg-purple-700 text-white'
            }`}>{saved ? '\u2713 Saved!' : 'Save Changes'}</button>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
          <h2 className="text-white font-semibold mb-4">Session</h2>
          <button onClick={() => { logout(); navigate('/admin/login'); }}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
