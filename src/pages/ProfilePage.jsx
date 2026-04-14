import React from 'react';
import { useFramework } from '../context/FrameworkContext';

const features = [
  'Customizable profile themes', 'Achievement badges', 'Game statistics integration',
  'Social media links', 'Team affiliations', 'Tournament history',
  'Match history', 'Highlight clips', 'Favorite games section', 'Skill ratings'
];

export default function ProfilePage() {
  const { user, isFeatureEnabled } = useFramework();
  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center text-3xl font-bold text-white">
          {user.username[0]}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">{user.username}</h1>
          <p className="text-purple-400">{user.rank}</p>
          <p className="text-gray-400 text-sm">Level {user.level}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((f, i) => isFeatureEnabled('profile', i) && (
          <div key={f} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <h3 className="text-white font-medium">{f}</h3>
            <p className="text-gray-400 text-sm mt-1">Feature active</p>
          </div>
        ))}
      </div>
    </div>
  );
}
