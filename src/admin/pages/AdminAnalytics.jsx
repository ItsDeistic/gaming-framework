import React from 'react';

const metrics = [
  { label: 'Daily Active Users', value: '1,284', change: '+12%' },
  { label: 'Feature Toggles Today', value: '347', change: '+5%' },
  { label: 'Avg Session Length', value: '23m', change: '+2m' },
  { label: 'New Signups', value: '89', change: '+18%' },
];

export default function AdminAnalytics() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Analytics Overview</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {metrics.map(m => (
          <div key={m.label} className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <p className="text-gray-400 text-xs mb-1">{m.label}</p>
            <p className="text-white text-2xl font-bold">{m.value}</p>
            <p className="text-green-400 text-xs mt-1">{m.change} this week</p>
          </div>
        ))}
      </div>
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
        <h2 className="text-white font-semibold mb-4">Feature Usage (Top 5)</h2>
        {[
          { name: 'Match History', usage: 92 },
          { name: 'Leaderboards', usage: 88 },
          { name: 'Daily Challenges', usage: 81 },
          { name: 'Analytics Dashboard', usage: 74 },
          { name: 'Player Cards', usage: 68 },
        ].map(f => (
          <div key={f.name} className="mb-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-300">{f.name}</span>
              <span className="text-purple-400">{f.usage}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${f.usage}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
