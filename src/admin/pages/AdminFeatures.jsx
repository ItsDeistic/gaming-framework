import React, { useState } from 'react';
import { useFramework } from '../../context/FrameworkContext';

const allFeatures = {
  profile: ['Customizable profile themes','Achievement badges','Game statistics integration','Social media links','Team affiliations','Tournament history','Match history','Highlight clips','Favorite games section','Skill ratings'],
  social: ['Friend system','Team management','Direct messaging','Activity feed','Player recommendations','Group chats','Mentorship program','Community challenges','Event planning','Social sharing'],
  gaming: ['Live match tracking','Game performance analytics','Practice schedules','Team scrimmages','Tournament brackets','Leaderboards','Ranking system','Match replays','Strategy guides','Coaching sessions'],
  playerCard: ['Draggable interface','Minimizable windows','Multi-card view','Card comparison','Quick stats preview','Custom layouts','Theme editor','Card sharing','Profile verification','Featured highlights'],
  technical: ['Real-time updates','Cross-platform sync','API integration','Data visualization','Performance metrics','Custom notifications','Search filters','Export capabilities','Backup system','Analytics dashboard'],
  community: ['Player reviews','Skill endorsements','Community polls','Event calendar','News feed','Discussion forums','Content sharing','Team recruitment','Tournament organization','Coaching marketplace'],
  customization: ['Profile backgrounds','Card animations','Custom badges','Stat displays','Achievement showcase','Banner designs','Color schemes','Font styles','Layout options','Widget placement'],
  engagement: ['Daily challenges','Reward system','Experience points','Level progression','Skill trees','Quests','Achievements','Milestones','Seasonal events','Community goals'],
  analytics: ['Performance tracking','Progress charts','Comparison tools','Historical data','Trend analysis','Skill development','Match insights','Team statistics','Tournament performance','Practice metrics'],
  additional: ['Voice chat','Stream integration','Clip editing','Hardware specs','Setup sharing','Training programs','Team strategies','Match scheduling','VOD reviews','Esports news']
};

export default function AdminFeatures() {
  const { enabledFeatures, toggleFeature, isFeatureEnabled } = useFramework();
  const [activeCategory, setActiveCategory] = useState('profile');

  const enabledCount = Object.values(enabledFeatures).reduce((acc, arr) => acc + arr.length, 0);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Feature Manager</h1>
        <span className="text-sm text-gray-400">{enabledCount}/100 enabled</span>
      </div>

      <div className="flex gap-2 flex-wrap mb-6">
        {Object.keys(allFeatures).map(cat => (
          <button key={cat} onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-sm capitalize transition-colors ${
              activeCategory === cat ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}>{cat}</button>
        ))}
      </div>

      <div className="space-y-2">
        {allFeatures[activeCategory].map((feature, i) => (
          <div key={feature} className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 flex items-center justify-between">
            <span className="text-gray-300 text-sm">{feature}</span>
            <button onClick={() => toggleFeature(activeCategory, i)}
              className={`relative w-11 h-6 rounded-full transition-colors ${
                isFeatureEnabled(activeCategory, i) ? 'bg-purple-600' : 'bg-gray-600'
              }`}>
              <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                isFeatureEnabled(activeCategory, i) ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
