// Maps each of the 100 features to its category, label, description, and icon name
export const FEATURE_CATEGORIES = {
  profile: {
    label: 'Profile Features',
    icon: 'User',
    color: 'blue',
    features: [
      { key: 'customizableProfileThemes', label: 'Customizable Profile Themes', desc: 'Users can select and apply custom visual themes to their profile pages.' },
      { key: 'achievementBadges', label: 'Achievement Badges', desc: 'Display earned badges on profiles based on in-game and platform achievements.' },
      { key: 'gameStatisticsIntegration', label: 'Game Statistics Integration', desc: 'Pull real-time stats from game APIs and display them on user profiles.' },
      { key: 'socialMediaLinks', label: 'Social Media Links', desc: 'Users can link and display their social media accounts on their profile.' },
      { key: 'teamAffiliations', label: 'Team Affiliations', desc: 'Show which teams a player is affiliated with on their profile.' },
      { key: 'tournamentHistory', label: 'Tournament History', desc: 'Display a player\'s complete tournament participation and results.' },
      { key: 'matchHistory', label: 'Match History', desc: 'Full match-by-match history log with filters and stat breakdowns.' },
      { key: 'highlightClips', label: 'Highlight Clips', desc: 'Users can upload and showcase their best gameplay clips.' },
      { key: 'favoriteGamesSection', label: 'Favorite Games Section', desc: 'A dedicated section on profiles showing the player\'s favorite games.' },
      { key: 'skillRatings', label: 'Skill Ratings', desc: 'Community-verified skill rating system per game, displayed on profile.' },
    ],
  },
  social: {
    label: 'Social Features',
    icon: 'Users',
    color: 'green',
    features: [
      { key: 'friendSystem', label: 'Friend System', desc: 'Send, accept, and manage friend requests. View friend activity.' },
      { key: 'teamManagement', label: 'Team Management', desc: 'Create, manage, and join competitive teams with roles and hierarchy.' },
      { key: 'directMessaging', label: 'Direct Messaging', desc: 'Private one-on-one real-time messaging between users.' },
      { key: 'activityFeed', label: 'Activity Feed', desc: 'Social feed showing friend and community activity in real time.' },
      { key: 'playerRecommendations', label: 'Player Recommendations', desc: 'Algorithmic suggestions of players to connect with based on playstyle.' },
      { key: 'groupChats', label: 'Group Chats', desc: 'Multi-user chat rooms for teams, events, and communities.' },
      { key: 'mentorshipProgram', label: 'Mentorship Program', desc: 'Structured mentor/mentee pairing system with session tracking.' },
      { key: 'communityChallenges', label: 'Community Challenges', desc: 'Platform-wide challenges that players participate in together.' },
      { key: 'eventPlanning', label: 'Event Planning', desc: 'Tools for users to create, promote, and manage gaming events.' },
      { key: 'socialSharing', label: 'Social Sharing', desc: 'Share stats, achievements, clips, and profiles to external platforms.' },
    ],
  },
  gaming: {
    label: 'Gaming Features',
    icon: 'Gamepad2',
    color: 'purple',
    features: [
      { key: 'liveMatchTracking', label: 'Live Match Tracking', desc: 'Real-time match data tracking with live stat updates during play.' },
      { key: 'gamePerformanceAnalytics', label: 'Game Performance Analytics', desc: 'Deep per-game analytics including heatmaps, KDA trends, and more.' },
      { key: 'practiceSchedules', label: 'Practice Schedules', desc: 'Create and manage structured practice sessions with reminders.' },
      { key: 'teamScrimmages', label: 'Team Scrimmages', desc: 'Organize private scrimmage matches between teams with scheduling.' },
      { key: 'tournamentBrackets', label: 'Tournament Brackets', desc: 'Full bracket generation and management for all tournament formats.' },
      { key: 'leaderboards', label: 'Leaderboards', desc: 'Global, regional, friend, and team-based competitive leaderboards.' },
      { key: 'rankingSystem', label: 'Ranking System', desc: 'Tiered rank progression system with decay, promotions, and display.' },
      { key: 'matchReplays', label: 'Match Replays', desc: 'Save, store, and review full match replays with annotation tools.' },
      { key: 'strategyGuides', label: 'Strategy Guides', desc: 'Community-written or coach-written game strategy guides.' },
      { key: 'coachingSessions', label: 'Coaching Sessions', desc: 'Verified coaches offer structured coaching sessions to players.' },
    ],
  },
  cards: {
    label: 'Player Card Features',
    icon: 'CreditCard',
    color: 'yellow',
    features: [
      { key: 'draggableInterface', label: 'Draggable Interface', desc: 'Player cards and windows can be freely dragged around the screen.' },
      { key: 'minimizableWindows', label: 'Minimizable Windows', desc: 'Any panel or card can be minimized to a compact icon or title bar.' },
      { key: 'multiCardView', label: 'Multi-Card View', desc: 'View multiple player cards simultaneously in a grid layout.' },
      { key: 'cardComparison', label: 'Card Comparison', desc: 'Side-by-side stat comparison between multiple player cards.' },
      { key: 'quickStatsPreview', label: 'Quick Stats Preview', desc: 'Hover over a player to see an instant mini stats card.' },
      { key: 'customLayouts', label: 'Custom Layouts', desc: 'Users can define and save custom arrangements of their card UI.' },
      { key: 'themeEditor', label: 'Theme Editor', desc: 'Full color and style editor for personalizing card appearance.' },
      { key: 'cardSharing', label: 'Card Sharing', desc: 'Generate shareable links or images of player cards.' },
      { key: 'profileVerification', label: 'Profile Verification', desc: 'Verified badge system for confirmed player identities.' },
      { key: 'featuredHighlights', label: 'Featured Highlights', desc: 'Pin top highlight clips to be featured prominently on the card.' },
    ],
  },
  technical: {
    label: 'Technical Features',
    icon: 'Zap',
    color: 'cyan',
    features: [
      { key: 'realTimeUpdates', label: 'Real-Time Updates', desc: 'WebSocket-powered live updates across the platform without refresh.' },
      { key: 'crossPlatformSync', label: 'Cross-Platform Sync', desc: 'Sync user data and preferences across web, iOS, and Android.' },
      { key: 'apiIntegration', label: 'API Integration', desc: 'Expose and consume RESTful APIs for external game data sources.' },
      { key: 'dataVisualization', label: 'Data Visualization', desc: 'Rich chart library for visualizing stats, trends, and analytics.' },
      { key: 'performanceMetrics', label: 'Performance Metrics', desc: 'Track and report platform performance: load times, API latency, etc.' },
      { key: 'customNotifications', label: 'Custom Notifications', desc: 'Configurable notification system across push, email, and in-app.' },
      { key: 'searchFilters', label: 'Search Filters', desc: 'Advanced filtering and fuzzy-search across all platform content.' },
      { key: 'exportCapabilities', label: 'Export Capabilities', desc: 'Export any data in JSON, CSV, or PDF format.' },
      { key: 'backupSystem', label: 'Backup System', desc: 'Automated user data backups with restore functionality.' },
      { key: 'analyticsDashboard', label: 'Analytics Dashboard', desc: 'Platform-wide analytics for admins: DAU, retention, feature usage.' },
    ],
  },
  community: {
    label: 'Community Features',
    icon: 'Globe',
    color: 'orange',
    features: [
      { key: 'playerReviews', label: 'Player Reviews', desc: 'Leave and receive reputation reviews from other players.' },
      { key: 'skillEndorsements', label: 'Skill Endorsements', desc: 'Endorse other players in specific skill categories.' },
      { key: 'communityPolls', label: 'Community Polls', desc: 'Create and vote in community polls on any topic.' },
      { key: 'eventCalendar', label: 'Event Calendar', desc: 'Shared calendar of upcoming community and esports events.' },
      { key: 'newsFeed', label: 'News Feed', desc: 'Aggregated esports and gaming news from multiple sources.' },
      { key: 'discussionForums', label: 'Discussion Forums', desc: 'Threaded discussion boards organized by game, team, and topic.' },
      { key: 'contentSharing', label: 'Content Sharing', desc: 'Share images, videos, and documents in the community feed.' },
      { key: 'teamRecruitment', label: 'Team Recruitment', desc: 'Post and apply to open team positions through a recruitment board.' },
      { key: 'tournamentOrganization', label: 'Tournament Organization', desc: 'Tools to create and run community tournaments with prize pools.' },
      { key: 'coachingMarketplace', label: 'Coaching Marketplace', desc: 'Marketplace for verified coaches to list and offer services.' },
    ],
  },
  customization: {
    label: 'Customization Features',
    icon: 'Palette',
    color: 'pink',
    features: [
      { key: 'profileBackgrounds', label: 'Profile Backgrounds', desc: 'Custom animated or static background images for profiles.' },
      { key: 'cardAnimations', label: 'Card Animations', desc: 'Apply particle, glitch, pulse, and wave animations to cards.' },
      { key: 'customBadges', label: 'Custom Badges', desc: 'Design and upload custom achievement or flair badges.' },
      { key: 'statDisplays', label: 'Stat Displays', desc: 'Choose how stats are displayed: minimal, card, or detailed view.' },
      { key: 'achievementShowcase', label: 'Achievement Showcase', desc: 'Curate which achievements are displayed on your public profile.' },
      { key: 'bannerDesigns', label: 'Banner Designs', desc: 'Custom banner images displayed at the top of user profiles.' },
      { key: 'colorSchemes', label: 'Color Schemes', desc: 'Full accent color customization with gradient and preset support.' },
      { key: 'fontStyles', label: 'Font Styles', desc: 'Switch between gaming-oriented font families across the UI.' },
      { key: 'layoutOptions', label: 'Layout Options', desc: 'Choose from multiple page layout styles: default, compact, wide.' },
      { key: 'widgetPlacement', label: 'Widget Placement', desc: 'Drag-and-drop widgets on dashboard and profile pages.' },
    ],
  },
  engagement: {
    label: 'Engagement Features',
    icon: 'Trophy',
    color: 'amber',
    features: [
      { key: 'dailyChallenges', label: 'Daily Challenges', desc: 'New challenges every day rewarding XP and points for completion.' },
      { key: 'rewardSystem', label: 'Reward System', desc: 'Point-based reward system for all platform activities.' },
      { key: 'experiencePoints', label: 'Experience Points', desc: 'XP earned from every action, fueling level progression.' },
      { key: 'levelProgression', label: 'Level Progression', desc: 'Tiered level system with visible progress bars and rank rewards.' },
      { key: 'skillTrees', label: 'Skill Trees', desc: 'RPG-style skill trees players invest points into across categories.' },
      { key: 'quests', label: 'Quests', desc: 'Daily, weekly, and monthly quest chains with chained objectives.' },
      { key: 'achievements', label: 'Achievements', desc: 'Comprehensive 200+ achievement system with secret unlocks.' },
      { key: 'milestones', label: 'Milestones', desc: 'Long-form milestone tracking across games, wins, and social goals.' },
      { key: 'seasonalEvents', label: 'Seasonal Events', desc: 'Time-limited seasonal events with exclusive cosmetic rewards.' },
      { key: 'communityGoals', label: 'Community Goals', desc: 'Collective community objectives with shared rewards on completion.' },
    ],
  },
  analytics: {
    label: 'Analytics Features',
    icon: 'BarChart2',
    color: 'teal',
    features: [
      { key: 'performanceTracking', label: 'Performance Tracking', desc: 'Track KDA, winrate, accuracy, and playtime in real time.' },
      { key: 'progressCharts', label: 'Progress Charts', desc: 'Visual line/bar charts of skill and stat progression over time.' },
      { key: 'comparisonTools', label: 'Comparison Tools', desc: 'Compare performance metrics across up to 5 players.' },
      { key: 'historicalData', label: 'Historical Data', desc: 'Access up to 24 months of historical match and stat data.' },
      { key: 'trendAnalysis', label: 'Trend Analysis', desc: 'Identify improving or declining performance trends over rolling windows.' },
      { key: 'skillDevelopment', label: 'Skill Development', desc: 'Track growth across 20 individual skills with milestone alerts.' },
      { key: 'matchInsights', label: 'Match Insights', desc: 'Post-match breakdowns with detailed insight on every decision.' },
      { key: 'teamStatistics', label: 'Team Statistics', desc: 'Aggregate team performance stats and compare against other teams.' },
      { key: 'tournamentPerformance', label: 'Tournament Performance', desc: 'Tournament-by-tournament performance breakdown and history.' },
      { key: 'practiceMetrics', label: 'Practice Metrics', desc: 'Log and analyze practice sessions with goal tracking.' },
    ],
  },
  additional: {
    label: 'Additional Features',
    icon: 'Plus',
    color: 'red',
    features: [
      { key: 'voiceChat', label: 'Voice Chat', desc: 'In-platform voice chat with noise suppression and echo cancellation.' },
      { key: 'streamIntegration', label: 'Stream Integration', desc: 'Link Twitch/YouTube/Kick streams with overlay support.' },
      { key: 'clipEditing', label: 'Clip Editing', desc: 'Built-in editor to trim, filter, and export gameplay clips.' },
      { key: 'hardwareSpecs', label: 'Hardware Specs', desc: 'Display your PC/console hardware setup on your profile.' },
      { key: 'setupSharing', label: 'Setup Sharing', desc: 'Share your full gaming setup with photos and specs.' },
      { key: 'trainingPrograms', label: 'Training Programs', desc: 'Structured multi-week training programs with assigned exercises.' },
      { key: 'teamStrategies', label: 'Team Strategies', desc: 'Private strategy library with drawings, videos, and notes.' },
      { key: 'matchScheduling', label: 'Match Scheduling', desc: 'Schedule future matches with reminders and calendar sync.' },
      { key: 'vodReviews', label: 'VOD Reviews', desc: 'Timestamped coach or self review of recorded match VODs.' },
      { key: 'esportsNews', label: 'Esports News', desc: 'Aggregated live esports news from top industry sources.' },
    ],
  },
};

export const ALL_FEATURE_KEYS = Object.values(FEATURE_CATEGORIES)
  .flatMap((cat) => cat.features.map((f) => f.key));

export const FEATURE_KEY_TO_CATEGORY = {};
Object.entries(FEATURE_CATEGORIES).forEach(([catKey, cat]) => {
  cat.features.forEach((f) => {
    FEATURE_KEY_TO_CATEGORY[f.key] = catKey;
  });
});

export const CATEGORY_KEYS = Object.keys(FEATURE_CATEGORIES);

export const getCategoryFeatureKeys = (categoryKey) =>
  FEATURE_CATEGORIES[categoryKey]?.features.map((f) => f.key) || [];
