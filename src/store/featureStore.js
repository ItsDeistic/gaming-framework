import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Default state for all 100 features
const defaultFeatures = {
  // --- PROFILE (1-10) ---
  customizableProfileThemes: true,
  achievementBadges: true,
  gameStatisticsIntegration: true,
  socialMediaLinks: true,
  teamAffiliations: true,
  tournamentHistory: true,
  matchHistory: true,
  highlightClips: true,
  favoriteGamesSection: true,
  skillRatings: true,

  // --- SOCIAL (11-20) ---
  friendSystem: true,
  teamManagement: true,
  directMessaging: true,
  activityFeed: true,
  playerRecommendations: true,
  groupChats: true,
  mentorshipProgram: true,
  communityChallenges: true,
  eventPlanning: true,
  socialSharing: true,

  // --- GAMING (21-30) ---
  liveMatchTracking: true,
  gamePerformanceAnalytics: true,
  practiceSchedules: true,
  teamScrimmages: true,
  tournamentBrackets: true,
  leaderboards: true,
  rankingSystem: true,
  matchReplays: true,
  strategyGuides: true,
  coachingSessions: true,

  // --- PLAYER CARDS (31-40) ---
  draggableInterface: true,
  minimizableWindows: true,
  multiCardView: true,
  cardComparison: true,
  quickStatsPreview: true,
  customLayouts: true,
  themeEditor: true,
  cardSharing: true,
  profileVerification: true,
  featuredHighlights: true,

  // --- TECHNICAL (41-50) ---
  realTimeUpdates: true,
  crossPlatformSync: true,
  apiIntegration: true,
  dataVisualization: true,
  performanceMetrics: true,
  customNotifications: true,
  searchFilters: true,
  exportCapabilities: true,
  backupSystem: true,
  analyticsDashboard: true,

  // --- COMMUNITY (51-60) ---
  playerReviews: true,
  skillEndorsements: true,
  communityPolls: true,
  eventCalendar: true,
  newsFeed: true,
  discussionForums: true,
  contentSharing: true,
  teamRecruitment: true,
  tournamentOrganization: true,
  coachingMarketplace: true,

  // --- CUSTOMIZATION (61-70) ---
  profileBackgrounds: true,
  cardAnimations: true,
  customBadges: true,
  statDisplays: true,
  achievementShowcase: true,
  bannerDesigns: true,
  colorSchemes: true,
  fontStyles: true,
  layoutOptions: true,
  widgetPlacement: true,

  // --- ENGAGEMENT (71-80) ---
  dailyChallenges: true,
  rewardSystem: true,
  experiencePoints: true,
  levelProgression: true,
  skillTrees: true,
  quests: true,
  achievements: true,
  milestones: true,
  seasonalEvents: true,
  communityGoals: true,

  // --- ANALYTICS (81-90) ---
  performanceTracking: true,
  progressCharts: true,
  comparisonTools: true,
  historicalData: true,
  trendAnalysis: true,
  skillDevelopment: true,
  matchInsights: true,
  teamStatistics: true,
  tournamentPerformance: true,
  practiceMetrics: true,

  // --- ADDITIONAL (91-100) ---
  voiceChat: true,
  streamIntegration: true,
  clipEditing: true,
  hardwareSpecs: true,
  setupSharing: true,
  trainingPrograms: true,
  teamStrategies: true,
  matchScheduling: true,
  vodReviews: true,
  esportsNews: true,
};

// Default admin settings per feature
const defaultAdminSettings = {
  customizableProfileThemes: { allowUserCustom: true, maxThemes: 10, premiumOnly: false },
  achievementBadges: { maxBadges: 50, showRarity: true, allowCustom: false },
  gameStatisticsIntegration: { allowedApis: ['steam', 'battlenet', 'riot', 'psn', 'xbox'], autoSync: true },
  socialMediaLinks: { maxLinks: 8, platforms: ['twitter','twitch','youtube','discord','instagram','tiktok','github','linkedin'] },
  teamAffiliations: { maxTeams: 3, requireVerification: false },
  tournamentHistory: { displayCount: 50, showPrivate: false },
  matchHistory: { displayCount: 100, allowFilter: true },
  highlightClips: { maxClips: 20, maxDurationSeconds: 120, allowedFormats: ['mp4','webm'] },
  favoriteGamesSection: { maxGames: 10, showPlaytime: true },
  skillRatings: { ratingScale: 100, allowSelfRating: false, requireVerification: true },

  friendSystem: { maxFriends: 500, requireMutual: false, allowBlock: true },
  teamManagement: { maxTeamSize: 10, maxTeamsOwned: 2, requireApproval: true },
  directMessaging: { maxMessageLength: 2000, allowMedia: true, allowVoice: false },
  activityFeed: { postsPerPage: 20, allowComments: true, allowReactions: true },
  playerRecommendations: { algorithmic: true, showMutuals: true, maxSuggestions: 10 },
  groupChats: { maxGroups: 20, maxGroupSize: 50, allowVoice: false },
  mentorshipProgram: { requireApplication: true, maxMentees: 5, sessionDurationMin: 30 },
  communityChallenges: { weeklyReset: true, maxParticipants: 0, showLeaderboard: true },
  eventPlanning: { maxEvents: 10, requireApproval: false, maxAttendees: 0 },
  socialSharing: { allowedPlatforms: ['twitter','discord','reddit'], requireConfirm: true },

  liveMatchTracking: { pollIntervalMs: 5000, allowSpectate: true, showStats: true },
  gamePerformanceAnalytics: { dataRetentionDays: 365, showComparisons: true },
  practiceSchedules: { maxSchedules: 10, reminderEnabled: true },
  teamScrimmages: { requireConfirm: true, maxDuration: 120, allowSpectators: true },
  tournamentBrackets: { formats: ['single', 'double', 'round-robin', 'swiss'], maxParticipants: 256 },
  leaderboards: { types: ['global', 'regional', 'friends', 'team'], resetPeriod: 'season' },
  rankingSystem: { tiers: ['Bronze','Silver','Gold','Platinum','Diamond','Master','Grandmaster'], decayEnabled: true },
  matchReplays: { storagePerUserMB: 500, retentionDays: 90, allowShare: true },
  strategyGuides: { moderated: true, allowVideo: true, maxGuideLength: 10000 },
  coachingSessions: { requireVerifiedCoach: true, sessionRateLimit: 5, allowRecording: false },

  draggableInterface: { snapToGrid: false, gridSize: 10, rememberPosition: true },
  minimizableWindows: { rememberState: true, maxMinimized: 10 },
  multiCardView: { maxCards: 6, layout: 'grid' },
  cardComparison: { maxCompare: 4, sideBySide: true },
  quickStatsPreview: { hoverDelay: 300, showMiniChart: true },
  customLayouts: { maxLayouts: 5, allowExport: true },
  themeEditor: { allowCustomCSS: false, maxColors: 5, presets: 10 },
  cardSharing: { allowPublic: true, expireDays: 30 },
  profileVerification: { methods: ['email','phone','id'], badgeVisible: true },
  featuredHighlights: { maxHighlights: 5, autoplay: false },

  realTimeUpdates: { socketEnabled: true, pollFallbackMs: 10000 },
  crossPlatformSync: { platforms: ['web','ios','android'], syncIntervalMs: 30000 },
  apiIntegration: { rateLimitPerHour: 1000, requireApiKey: true, sandboxMode: false },
  dataVisualization: { chartTypes: ['line','bar','radar','heatmap','scatter'], animated: true },
  performanceMetrics: { trackPageLoad: true, trackApiLatency: true, reportingEnabled: true },
  customNotifications: { channels: ['push','email','in-app'], maxPerDay: 50 },
  searchFilters: { allowAdvanced: true, savedFilters: 10, fuzzySearch: true },
  exportCapabilities: { formats: ['json','csv','pdf'], maxExportRows: 10000 },
  backupSystem: { autoBackupDays: 7, maxBackups: 10, includeMedia: false },
  analyticsDashboard: { widgets: ['users','sessions','features','retention'], refreshIntervalMs: 60000 },

  playerReviews: { moderated: true, minLength: 20, allowAnon: false, maxPerUser: 1 },
  skillEndorsements: { maxEndorsements: 50, categories: ['teamwork','communication','skill','leadership'] },
  communityPolls: { maxOptions: 10, durationDays: 7, allowMultiVote: false },
  eventCalendar: { allowUserEvents: true, requireApproval: false, maxMonthsAhead: 6 },
  newsFeed: { sources: ['esports','gaming','community'], refreshIntervalMs: 300000 },
  discussionForums: { categories: true, moderated: true, allowImages: true },
  contentSharing: { maxFilesMB: 50, allowedTypes: ['image','video','document'] },
  teamRecruitment: { maxOpenPositions: 5, applicationRequired: true },
  tournamentOrganization: { maxTournaments: 3, requireDeposit: false, prizeEnabled: true },
  coachingMarketplace: { feePercent: 10, requireVerification: true, allowFreeSession: true },

  profileBackgrounds: { maxCustom: 5, allowAnimation: true, premiumOnly: false },
  cardAnimations: { animationTypes: ['glitch','pulse','particles','waves'], maxParticles: 100 },
  customBadges: { maxCustom: 20, requireApproval: false },
  statDisplays: { layouts: ['minimal','detailed','card'], showRank: true },
  achievementShowcase: { maxShown: 6, sortBy: 'rarity' },
  bannerDesigns: { maxBanners: 3, allowGif: false, dimensions: '1200x300' },
  colorSchemes: { maxCustom: 5, allowGradient: true, presets: ['dark','neon','minimal','gaming','retro'] },
  fontStyles: { available: ['Orbitron','Inter','Rajdhani','Exo2','Audiowide'], maxCustom: 2 },
  layoutOptions: { available: ['default','compact','wide','centered'], allowCustom: false },
  widgetPlacement: { gridCols: 12, draggable: true, maxWidgets: 20 },

  dailyChallenges: { count: 3, xpReward: 100, resetHour: 0 },
  rewardSystem: { pointsPerAction: { match: 50, win: 100, review: 25, post: 10 }, expiryDays: 0 },
  experiencePoints: { levelCurve: 'exponential', bonusMultiplier: 1, maxLevel: 100 },
  levelProgression: { rewardsPerLevel: true, showProgress: true, announceLevel: true },
  skillTrees: { trees: ['offense','defense','strategy','teamwork','mechanics'], resetAllowed: true },
  quests: { dailyCount: 2, weeklyCount: 3, monthlyCount: 1, chainedQuests: true },
  achievements: { total: 200, secretAchievements: true, progressTracking: true },
  milestones: { categories: ['games','wins','friends','tournaments'], badges: true },
  seasonalEvents: { duration: 90, exclusiveRewards: true, requireParticipation: false },
  communityGoals: { resetPeriod: 'weekly', collectiveXP: true, topContributors: 10 },

  performanceTracking: { metrics: ['kda','winrate','accuracy','playtime'], realTime: true },
  progressCharts: { intervals: ['daily','weekly','monthly','season'], chartType: 'line' },
  comparisonTools: { maxPlayers: 5, anonymize: false },
  historicalData: { retentionMonths: 24, exportEnabled: true },
  trendAnalysis: { windowDays: 30, alertThreshold: 0.2, aiInsights: false },
  skillDevelopment: { trackableSkills: 20, milestoneAlerts: true },
  matchInsights: { postMatchRequired: false, aiPowered: false, detailLevel: 'detailed' },
  teamStatistics: { showAggregate: true, compareTeams: true },
  tournamentPerformance: { trackAllTournaments: true, exportCertificate: false },
  practiceMetrics: { sessionMin: 15, trackDrills: true, weeklyGoalHours: 10 },

  voiceChat: { codec: 'opus', maxBitrate: 64000, noiseSuppress: true, echoCancel: true },
  streamIntegration: { platforms: ['twitch','youtube','kick'], overlayEnabled: true },
  clipEditing: { maxDurationSeconds: 60, trimEnabled: true, filterEnabled: true, exportFormats: ['mp4','gif'] },
  hardwareSpecs: { categories: ['cpu','gpu','ram','monitor','peripherals'], allowCustom: true },
  setupSharing: { allowPublic: true, affiliateLinks: false, maxImages: 5 },
  trainingPrograms: { maxPrograms: 5, trackedExercises: 50, coachAssigned: true },
  teamStrategies: { maxStrategies: 20, allowVideo: true, visibilityOptions: ['team','public','private'] },
  matchScheduling: { reminderMinutes: [15, 30, 60], calendarSync: true, maxScheduled: 20 },
  vodReviews: { allowTimestampComments: true, maxDurationHours: 4, coachAccess: true },
  esportsNews: { sources: ['liquipedia','dot-esports','vpesports'], refreshIntervalMin: 15 },
};

export const useFeatureStore = create(
  persist(
    (set, get) => ({
      features: { ...defaultFeatures },
      adminSettings: { ...defaultAdminSettings },
      userPreferences: {},

      // Toggle a single feature on/off
      toggleFeature: (key) =>
        set((state) => ({
          features: { ...state.features, [key]: !state.features[key] },
        })),

      // Set feature explicitly
      setFeature: (key, value) =>
        set((state) => ({
          features: { ...state.features, [key]: value },
        })),

      // Bulk toggle all in a category
      toggleCategory: (keys, value) =>
        set((state) => {
          const updated = { ...state.features };
          keys.forEach((k) => (updated[k] = value));
          return { features: updated };
        }),

      // Update admin setting for a feature
      updateAdminSetting: (featureKey, settingKey, value) =>
        set((state) => ({
          adminSettings: {
            ...state.adminSettings,
            [featureKey]: {
              ...state.adminSettings[featureKey],
              [settingKey]: value,
            },
          },
        })),

      // Set entire admin settings object for a feature
      setAdminSettings: (featureKey, settings) =>
        set((state) => ({
          adminSettings: { ...state.adminSettings, [featureKey]: settings },
        })),

      // Set user preference
      setUserPreference: (key, value) =>
        set((state) => ({
          userPreferences: { ...state.userPreferences, [key]: value },
        })),

      // Reset to defaults
      resetToDefaults: () =>
        set({ features: { ...defaultFeatures }, adminSettings: { ...defaultAdminSettings } }),

      // Is feature enabled?
      isEnabled: (key) => get().features[key] === true,

      // Get admin settings for feature
      getAdminSettings: (key) => get().adminSettings[key] || {},
    }),
    {
      name: 'gaming-framework-store',
      version: 1,
    }
  )
);

export { defaultFeatures, defaultAdminSettings };
