import React from 'react';
import { Link } from 'react-router-dom';
import { useFramework } from '../context/FrameworkContext';

export default function HomePage() {
  const { user } = useFramework();

  const sections = [
    { label: 'Profile', path: '/profile', icon: '\uD83D\uDC64', desc: 'Manage your gamer identity' },
    { label: 'Social', path: '/social', icon: '\uD83D\uDC65', desc: 'Connect with players' },
    { label: 'Gaming', path: '/gaming', icon: '\uD83C\uDFAE', desc: 'Tracks stats & matches' },
    { label: 'Player Cards', path: '/cards', icon: '\uD83C\uDCCF', desc: 'View & compare players' },
    { label: 'Community', path: '/community', icon: '\uD83C\uDF0D', desc: 'Forums, events & teams' },
    { label: 'Analytics', path: '/analytics', icon: '\uD83D\uDCCA', desc: 'Deep performance data' },
    { label: 'Engagement', path: '/engagement', icon: '\uD83C\uDFC6', desc: 'XP, quests & rewards' },
    { label: 'Customize', path: '/customize', icon: '\uD83C\uDFA8', desc: 'Themes & layouts' },
    { label: 'Additional', path: '/additional', icon: '\u2699\uFE0F', desc: 'Voice, streaming & more' },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">Welcome back, <span className="text-purple-400">{user.username}</span></h1>
        <p className="text-gray-400">Level {user.level} &mdash; {user.rank}</p>
        <div className="mt-3 w-full bg-gray-700 rounded-full h-2">
          <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${(user.xp / user.xpNeeded) * 100}%` }} />
        </div>
        <p className="text-xs text-gray-500 mt-1">{user.xp} / {user.xpNeeded} XP</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map(s => (
          <Link key={s.path} to={s.path}
            className="bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-purple-500 transition-all hover:bg-gray-750 group">
            <div className="text-3xl mb-2">{s.icon}</div>
            <h2 className="text-white font-semibold text-lg group-hover:text-purple-400 transition-colors">{s.label}</h2>
            <p className="text-gray-400 text-sm mt-1">{s.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
