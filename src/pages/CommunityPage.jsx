import React, { useState } from 'react';
import { useFramework } from '../context/FrameworkContext';

const mockPosts = [
  { id: 1, author: 'SnipeKing', content: 'Anyone up for ranked tonight? LFG Diamond+', likes: 12, replies: 4 },
  { id: 2, author: 'FlexQueen', content: 'Just hit Champion in RL! Grinding was worth it 🏆', likes: 34, replies: 11 },
  { id: 3, author: 'CoachMike', content: 'Free coaching sessions this weekend, DM me!', likes: 28, replies: 7 },
];

export default function CommunityPage() {
  const { isFeatureEnabled } = useFramework();
  const [tab, setTab] = useState('feed');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Community</h1>
      <div className="flex gap-2 mb-6 flex-wrap">
        {['feed','forums','events','recruitment'].map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
              tab === t ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}>{t}</button>
        ))}
      </div>

      {tab === 'feed' && isFeatureEnabled('community', 4) && (
        <div className="space-y-4">
          {mockPosts.map(p => (
            <div key={p.id} className="bg-gray-800 border border-gray-700 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-bold">{p.author[0]}</div>
                <span className="text-white font-medium">{p.author}</span>
              </div>
              <p className="text-gray-300 mb-3">{p.content}</p>
              <div className="flex gap-4 text-sm text-gray-400">
                <span>\u2764\uFE0F {p.likes}</span>
                <span>\uD83D\uDCAC {p.replies} replies</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'forums' && isFeatureEnabled('community', 5) && (
        <div className="space-y-3">
          {['Strategy Guides','Clip Sharing','Team Recruitment','Game-Specific'].map(f => (
            <div key={f} className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex justify-between items-center">
              <p className="text-white font-medium">{f}</p>
              <button className="text-xs text-purple-400 hover:text-purple-300">View &rarr;</button>
            </div>
          ))}
        </div>
      )}

      {tab === 'events' && isFeatureEnabled('community', 3) && (
        <div className="space-y-3">
          {['Weekend Tournament - Apr 19','Community Scrimmage - Apr 21','Dev Q&A - Apr 25'].map(e => (
            <div key={e} className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex justify-between items-center">
              <p className="text-white text-sm">{e}</p>
              <button className="text-xs bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-lg">RSVP</button>
            </div>
          ))}
        </div>
      )}

      {tab === 'recruitment' && isFeatureEnabled('community', 7) && (
        <div className="space-y-3">
          {[
            { team: 'Team Nexus', game: 'Valorant', rank: 'Diamond+', spots: 2 },
            { team: 'Rocket Squad', game: 'Rocket League', rank: 'Champ+', spots: 1 }
          ].map(t => (
            <div key={t.team} className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="text-white font-medium">{t.team}</p>
                <p className="text-gray-400 text-xs">{t.game} &bull; {t.rank} &bull; {t.spots} spots open</p>
              </div>
              <button className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg">Apply</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
