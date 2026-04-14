import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../hooks/useAdminAuth';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAdminAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 w-full max-w-sm">
        <h1 className="text-white text-2xl font-bold mb-2">Admin Login</h1>
        <p className="text-gray-400 text-sm mb-6">Gaming Framework Dashboard</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="password" placeholder="Password" value={password}
            onChange={e => { setPassword(e.target.value); setError(''); }}
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500" />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition-colors">
            Login
          </button>
        </form>
        <p className="text-gray-500 text-xs mt-4 text-center">Default password: admin123</p>
      </div>
    </div>
  );
}
