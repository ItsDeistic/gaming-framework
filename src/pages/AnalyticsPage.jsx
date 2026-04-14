import React from 'react';
import { useFramework } from '../context/FrameworkContext';

const mockData = [
  { label: 'Sessions This Week', value: 12 },
  { label: 'Avg Session Length', value: '47m' },
  { label: 'Improvement Score', value: '+8.3%' },
  { label: 'Practice Hours', value: 9.4 },
];

export default function AnalyticsPage() {
  const { isFeatureEnabled } = useFramework();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Analytics</h1>

      {isFeatureEnabled('analytics', 0) && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {mockData.map(d => (
            <div key={d.label} className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-center">
              <p className="text-purple-400 text-2xl font-bold">{d.value}</p>
              <p className="text-gray-400 text-xs mt-1">{d.label}</p>
            </div>
          ))}
        </div>
      )}

      {isFeatureEnabled('analytics', 4) && (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 mb-4">
          <h2 className="text-white font-semibold mb-4">Performance Trend</h2>
          <div className="flex items-end gap-2 h-24">
            {[40,55,45,70,65,80,75,90,85,95].map((v, i) => (
              <div key={i} className="flex-1 bg-purple-600 rounded-t opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${v}%` }} />
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>10 sessions ago</span><span>Today</span>
          </div>
        </div>
      )}

      {isFeatureEnabled('analytics', 6) && (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
          <h2 className="text-white font-semibold mb-3">Match Insights</h2>
          <div className="space-y-2">
            {['Strong early-game performance','Positioning needs work in late rounds','Aim consistency improved 12% this week'].map(i => (
              <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="text-green-400">\u2022</span>{i}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
