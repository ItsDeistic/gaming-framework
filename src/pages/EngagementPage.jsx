import React from 'react';
import { useFramework } from '../context/FrameworkContext';

const challenges = [
  { name: 'Win 3 Matches', xp: 150, progress: 2, total: 3 },
  { name: 'Play with a Friend', xp: 100, progress: 1, total: 1, done: true },
  { name: 'Achieve Top Fragger', xp: 200, progress: 0, total: 1 },
];

const achievements = [
  { name: 'First Blood', desc: 'Win your first match', done: true },
  { name: 'On a Roll', desc: 'Win 5 matches in a row', done: true },
  { name: 'Diamond Grind', desc: 'Reach Diamond rank', done: false },
  { name: 'Team Player', desc: 'Play 10 matches with friends', done: false },
];

export default function EngagementPage() {
  const { user, isFeatureEnabled } = useFramework();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Engagement</h1>

      {isFeatureEnabled('engagement', 2) && (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 mb-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-white font-semibold">Level {user.level}</h2>
            <span className="text-purple-400 text-sm">{user.xp} / {user.xpNeeded} XP</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all" style={{ width: `${(user.xp / user.xpNeeded) * 100}%` }} />
          </div>
        </div>
      )}

      {isFeatureEnabled('engagement', 0) && (
        <div className="mb-6">
          <h2 className="text-white font-semibold mb-3">Daily Challenges</h2>
          <div className="space-y-3">
            {challenges.map(c => (
              <div key={c.name} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white text-sm font-medium">{c.name}</span>
                  <span className="text-yellow-400 text-xs">+{c.xp} XP</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className={`h-2 rounded-full ${ c.done ? 'bg-green-500' : 'bg-purple-500'}`}
                    style={{ width: `${(c.progress / c.total) * 100}%` }} />
                </div>
                <p className="text-gray-500 text-xs mt-1">{c.done ? 'Complete!' : `${c.progress}/${c.total}`}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {isFeatureEnabled('engagement', 6) && (
        <div>
          <h2 className="text-white font-semibold mb-3">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {achievements.map(a => (
              <div key={a.name} className={`border rounded-lg p-4 flex items-center gap-3 ${
                a.done ? 'bg-gray-800 border-yellow-500/50' : 'bg-gray-800/50 border-gray-700 opacity-60'
              }`}>
                <span className="text-2xl">{a.done ? '\uD83C\uDFC6' : '\uD83D\uDD12'}</span>
                <div>
                  <p className="text-white font-medium text-sm">{a.name}</p>
                  <p className="text-gray-400 text-xs">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
