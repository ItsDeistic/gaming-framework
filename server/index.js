const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use('/api/', limiter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Features data
const features = {
  profile: [
    'Customizable profile themes', 'Achievement badges', 'Game statistics integration',
    'Social media links', 'Team affiliations', 'Tournament history',
    'Match history', 'Highlight clips', 'Favorite games section', 'Skill ratings'
  ],
  social: [
    'Friend system', 'Team management', 'Direct messaging', 'Activity feed',
    'Player recommendations', 'Group chats', 'Mentorship program',
    'Community challenges', 'Event planning', 'Social sharing'
  ],
  gaming: [
    'Live match tracking', 'Game performance analytics', 'Practice schedules',
    'Team scrimmages', 'Tournament brackets', 'Leaderboards',
    'Ranking system', 'Match replays', 'Strategy guides', 'Coaching sessions'
  ],
  playerCard: [
    'Draggable interface', 'Minimizable windows', 'Multi-card view', 'Card comparison',
    'Quick stats preview', 'Custom layouts', 'Theme editor',
    'Card sharing', 'Profile verification', 'Featured highlights'
  ],
  technical: [
    'Real-time updates', 'Cross-platform sync', 'API integration', 'Data visualization',
    'Performance metrics', 'Custom notifications', 'Search filters',
    'Export capabilities', 'Backup system', 'Analytics dashboard'
  ],
  community: [
    'Player reviews', 'Skill endorsements', 'Community polls', 'Event calendar',
    'News feed', 'Discussion forums', 'Content sharing',
    'Team recruitment', 'Tournament organization', 'Coaching marketplace'
  ],
  customization: [
    'Profile backgrounds', 'Card animations', 'Custom badges', 'Stat displays',
    'Achievement showcase', 'Banner designs', 'Color schemes',
    'Font styles', 'Layout options', 'Widget placement'
  ],
  engagement: [
    'Daily challenges', 'Reward system', 'Experience points', 'Level progression',
    'Skill trees', 'Quests', 'Achievements', 'Milestones', 'Seasonal events', 'Community goals'
  ],
  analytics: [
    'Performance tracking', 'Progress charts', 'Comparison tools', 'Historical data',
    'Trend analysis', 'Skill development', 'Match insights',
    'Team statistics', 'Tournament performance', 'Practice metrics'
  ],
  additional: [
    'Voice chat', 'Stream integration', 'Clip editing', 'Hardware specs',
    'Setup sharing', 'Training programs', 'Team strategies',
    'Match scheduling', 'VOD reviews', 'Esports news'
  ]
};

app.get('/api/features', (req, res) => res.json(features));
app.get('/api/features/:category', (req, res) => {
  const cat = features[req.params.category];
  if (!cat) return res.status(404).json({ error: 'Category not found' });
  res.json({ category: req.params.category, features: cat });
});

// Mock users endpoint
app.get('/api/users', (req, res) => {
  res.json([
    { id: '1', username: 'ProGamer99', rank: 'Diamond', game: 'Valorant', online: true },
    { id: '2', username: 'SnipeKing', rank: 'Platinum', game: 'Apex', online: false },
    { id: '3', username: 'RocketAce', rank: 'Champion', game: 'Rocket League', online: true }
  ]);
});

// Mock leaderboard endpoint
app.get('/api/leaderboard', (req, res) => {
  res.json([
    { rank: 1, username: 'TopFragger', score: 9800, game: 'Valorant' },
    { rank: 2, username: 'AimGod', score: 9400, game: 'CS2' },
    { rank: 3, username: 'FlexKing', score: 9100, game: 'Apex' }
  ]);
});

app.listen(PORT, () => {
  console.log(`\u2705 Gaming Framework server running on http://localhost:${PORT}`);
});
