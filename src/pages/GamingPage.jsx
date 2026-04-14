import React from 'react';
import { useFramework } from '../context/FrameworkContext';

const mockStats = [
  { label: 'Matches Played', value: 342 },
  { label: 'Win Rate', value: '58%' },
  { label: 'KDA', value: '3.2' },
  { label: 'Avg Score', value: 284 },
];

const mockMatches = [
  { id: 1, result: 'Win', map: 'Ascent', kills: 24, deaths: 8, assists: 5, game: 'Valorant' },
  { id: 2, result: 'Loss', map: 'Mirage', kills: 12, deaths: 18, assists: 3, game: 'CS2' },
  { id: 3, result: 'Win', map: "King's Canyon", kills: 8, deaths: 1, assists: 4, game: 'Apex' },
];

export default function GamingPage() {
  const { isFeatureEnabled } = useFramework();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Gaming Hub</h1>

      {isFeatureEnabled('gaming', 1) && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {mockStats.map(s => (
            <div key={s.label} className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-center">
              <p className="text-purple-400 text-2xl font-bold">{s.value}</p>
              <p className="text-gray-400 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      )}

      {isFeatureEnabled('gaming', 6) && (
        <div className="mb-6">
          <h2 className="text-white font-semibold mb-3">Ranking System</h2>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex items-center gap-4">
            <div className="text-4xl">\uD83D\uDC51</div>
            <div>
              <p className="text-white font-bold">Gold III</p>
              <p className="text-gray-400 text-sm">Top 22% globally</p>
            </div>
          </div>
        </div>
      )}

      {isFeatureEnabled('gaming', 7) && (
        <div>
          <h2 className="text-white font-semibold mb-3">Match History</h2>
          <div className="space-y-3">
            {mockMatches.map(m => (
              <div key={m.id} className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${
                    m.result === 'Win' ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'
                  }`}>{m.result}</span>
                  <div>
                    <p className="text-white text-sm font-medium">{m.game} &mdash; {m.map}</p>
                    <p className="text-gray-400 text-xs">{m.kills}K / {m.deaths}D / {m.assists}A</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
