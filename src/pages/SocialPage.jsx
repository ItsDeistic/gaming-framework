import React, { useState } from 'react';
import { useFramework } from '../context/FrameworkContext';

const features = [
  'Friend system', 'Team management', 'Direct messaging', 'Activity feed',
  'Player recommendations', 'Group chats', 'Mentorship program',
  'Community challenges', 'Event planning', 'Social sharing'
];

const mockFriends = [
  { id: 1, name: 'SnipeKing', status: 'online', game: 'Valorant' },
  { id: 2, name: 'AimBot99', status: 'offline', game: 'CS2' },
  { id: 3, name: 'FlexQueen', status: 'online', game: 'Apex Legends' },
];

export default function SocialPage() {
  const { isFeatureEnabled } = useFramework();
  const [tab, setTab] = useState('friends');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Social Hub</h1>
      <div className="flex gap-2 mb-6">
        {['friends','activity','challenges'].map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
              tab === t ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}>{t}</button>
        ))}
      </div>

      {tab === 'friends' && isFeatureEnabled('social', 0) && (
        <div className="space-y-3">
          {mockFriends.map(f => (
            <div key={f.id} className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">{f.name[0]}</div>
                  <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-800 ${
                    f.status === 'online' ? 'bg-green-400' : 'bg-gray-500'
                  }`} />
                </div>
                <div>
                  <p className="text-white font-medium">{f.name}</p>
                  <p className="text-gray-400 text-xs">{f.game}</p>
                </div>
              </div>
              {isFeatureEnabled('social', 2) && (
                <button className="text-xs bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-lg transition-colors">Message</button>
              )}
            </div>
          ))}
        </div>
      )}

      {tab === 'activity' && isFeatureEnabled('social', 3) && (
        <div className="space-y-3">
          {['SnipeKing reached Diamond rank', 'FlexQueen joined team Nexus', 'AimBot99 completed daily challenge'].map((a, i) => (
            <div key={i} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <p className="text-gray-300 text-sm">{a}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'challenges' && isFeatureEnabled('social', 7) && (
        <div className="space-y-3">
          {['Win 3 matches today', 'Get 20 kills in one session', 'Play with 2 friends'].map((c, i) => (
            <div key={i} className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex items-center justify-between">
              <p className="text-gray-300 text-sm">{c}</p>
              <button className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg">Accept</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
