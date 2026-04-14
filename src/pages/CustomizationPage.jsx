import React, { useState } from 'react';
import { useFramework } from '../context/FrameworkContext';

const colorSchemes = [
  { name: 'Purple Neon', primary: 'bg-purple-500' },
  { name: 'Cyan Frost', primary: 'bg-cyan-500' },
  { name: 'Orange Blaze', primary: 'bg-orange-500' },
  { name: 'Green Matrix', primary: 'bg-green-500' },
];

const layouts = ['Default', 'Compact', 'Wide', 'Minimal'];

export default function CustomizationPage() {
  const { isFeatureEnabled } = useFramework();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedLayout, setSelectedLayout] = useState(0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Customization</h1>

      {isFeatureEnabled('customization', 6) && (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 mb-6">
          <h2 className="text-white font-semibold mb-4">Color Scheme</h2>
          <div className="flex gap-3 flex-wrap">
            {colorSchemes.map((c, i) => (
              <button key={c.name} onClick={() => setSelectedColor(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                  selectedColor === i ? 'border-white' : 'border-gray-600 hover:border-gray-400'
                }`}>
                <span className={`w-4 h-4 rounded-full ${c.primary}`} />
                <span className="text-white text-sm">{c.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {isFeatureEnabled('customization', 8) && (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 mb-6">
          <h2 className="text-white font-semibold mb-4">Layout Options</h2>
          <div className="flex gap-3 flex-wrap">
            {layouts.map((l, i) => (
              <button key={l} onClick={() => setSelectedLayout(i)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  selectedLayout === i ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}>{l}</button>
            ))}
          </div>
        </div>
      )}

      {isFeatureEnabled('customization', 2) && (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
          <h2 className="text-white font-semibold mb-4">Custom Badges</h2>
          <div className="flex gap-3 flex-wrap">
            {['\uD83C\uDFC6','\uD83D\uDD25','\u26A1','\uD83C\uDFAF','\uD83D\uDC51','\u2B50'].map(b => (
              <button key={b} className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-xl text-2xl transition-colors">{b}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
