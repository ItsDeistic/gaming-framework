import React from 'react';
import { useFramework } from '../context/FrameworkContext';

const features = [
  { name: 'Voice Chat', icon: '\uD83C\uDFA4', desc: 'In-game voice communication', key: 0 },
  { name: 'Stream Integration', icon: '\uD83D\uDCF9', desc: 'Connect Twitch & YouTube', key: 1 },
  { name: 'Clip Editing', icon: '\u2702\uFE0F', desc: 'Edit and share highlights', key: 2 },
  { name: 'Hardware Specs', icon: '\uD83D\uDDA5\uFE0F', desc: 'Show off your setup', key: 3 },
  { name: 'Setup Sharing', icon: '\uD83D\uDCE4', desc: 'Share your peripherals', key: 4 },
  { name: 'Training Programs', icon: '\uD83D\uDCDA', desc: 'Structured improvement plans', key: 5 },
  { name: 'Team Strategies', icon: '\uD83D\uDDFA\uFE0F', desc: 'Tactical playbook', key: 6 },
  { name: 'Match Scheduling', icon: '\uD83D\uDCC5', desc: 'Book scrimmages & customs', key: 7 },
  { name: 'VOD Reviews', icon: '\u23EE\uFE0F', desc: 'Replay analysis tools', key: 8 },
  { name: 'Esports News', icon: '\uD83D\uDCF0', desc: 'Live tournament updates', key: 9 },
];

export default function AdditionalPage() {
  const { isFeatureEnabled } = useFramework();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Additional Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map(f => isFeatureEnabled('additional', f.key) && (
          <div key={f.name} className="bg-gray-800 border border-gray-700 rounded-xl p-5 flex items-center gap-4 hover:border-purple-500 transition-all">
            <span className="text-3xl">{f.icon}</span>
            <div>
              <h3 className="text-white font-semibold">{f.name}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
