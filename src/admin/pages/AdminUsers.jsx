import React, { useState } from 'react';

const mockUsers = [
  { id: 1, username: 'ProGamer99', email: 'pro@game.gg', rank: 'Diamond', status: 'active', joined: '2025-01-12' },
  { id: 2, username: 'SnipeKing', email: 'snipe@game.gg', rank: 'Platinum', status: 'active', joined: '2025-03-08' },
  { id: 3, username: 'FlexQueen', email: 'flex@game.gg', rank: 'Champion', status: 'active', joined: '2024-11-20' },
  { id: 4, username: 'AimBot99', email: 'aim@game.gg', rank: 'Gold', status: 'banned', joined: '2025-06-01' },
];

export default function AdminUsers() {
  const [search, setSearch] = useState('');
  const filtered = mockUsers.filter(u =>
    u.username.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">User Management</h1>
      <input type="text" placeholder="Search users..." value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full mb-4 bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500" />
      <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-750 border-b border-gray-700">
            <tr>{['Username','Email','Rank','Status','Joined'].map(h => (
              <th key={h} className="text-left text-gray-400 px-4 py-3 font-medium">{h}</th>
            ))}</tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filtered.map(u => (
              <tr key={u.id} className="hover:bg-gray-750 transition-colors">
                <td className="px-4 py-3 text-white font-medium">{u.username}</td>
                <td className="px-4 py-3 text-gray-400">{u.email}</td>
                <td className="px-4 py-3 text-purple-400">{u.rank}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    u.status === 'active' ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'
                  }`}>{u.status}</span>
                </td>
                <td className="px-4 py-3 text-gray-400">{u.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
