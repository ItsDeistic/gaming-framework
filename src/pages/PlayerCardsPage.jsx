import React, { useState } from 'react';
import { useFramework } from '../context/FrameworkContext';

const mockPlayers = [
  { id: 1, name: 'SnipeKing', rank: 'Diamond', game: 'Valorant', kda: 4.1, winRate: '64%', level: 87 },
  { id: 2, name: 'FlexQueen', rank: 'Champion', game: 'Rocket League', kda: 2.8, winRate: '71%', level: 120 },
  { id: 3, name: 'AimBot99', rank: 'Platinum', game: 'CS2', kda: 3.3, winRate: '55%', level: 60 },
];

function PlayerCard({ player, onClose }) {
  return (
    <div className="bg-gray-800 border border-purple-500 rounded-xl p-5 relative">
      {onClose && (
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-white text-lg">&times;</button>
      )}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
          {player.name[0]}
        </div>
        <div>
          <h3 className="text-white font-bold">{player.name}</h3>
          <p className="text-purple-400 text-sm">{player.rank}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="bg-gray-700 rounded p-2"><p className="text-gray-400 text-xs">Game</p><p className="text-white">{player.game}</p></div>
        <div className="bg-gray-700 rounded p-2"><p className="text-gray-400 text-xs">KDA</p><p className="text-white">{player.kda}</p></div>
        <div className="bg-gray-700 rounded p-2"><p className="text-gray-400 text-xs">Win Rate</p><p className="text-white">{player.winRate}</p></div>
        <div className="bg-gray-700 rounded p-2"><p className="text-gray-400 text-xs">Level</p><p className="text-white">{player.level}</p></div>
      </div>
    </div>
  );
}

export default function PlayerCardsPage() {
  const { isFeatureEnabled } = useFramework();
  const [openCards, setOpenCards] = useState([mockPlayers[0]]);

  const addCard = (p) => {
    if (!openCards.find(c => c.id === p.id)) setOpenCards(prev => [...prev, p]);
  };
  const removeCard = (id) => setOpenCards(prev => prev.filter(c => c.id !== id));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Player Cards</h1>

      <div className="flex gap-2 mb-6 flex-wrap">
        {mockPlayers.map(p => (
          <button key={p.id} onClick={() => addCard(p)}
            className="bg-gray-700 hover:bg-gray-600 text-white text-sm px-3 py-2 rounded-lg transition-colors">
            + {p.name}
          </button>
        ))}
      </div>

      {isFeatureEnabled('playerCard', 2) ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {openCards.map(p => <PlayerCard key={p.id} player={p} onClose={() => removeCard(p.id)} />)}
        </div>
      ) : (
        openCards[0] && <div className="max-w-sm"><PlayerCard player={openCards[0]} /></div>
      )}
    </div>
  );
}
