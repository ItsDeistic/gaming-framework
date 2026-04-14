import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AdminLayout from './admin/AdminLayout';

// Main Pages
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SocialPage from './pages/SocialPage';
import GamingPage from './pages/GamingPage';
import PlayerCardsPage from './pages/PlayerCardsPage';
import CommunityPage from './pages/CommunityPage';
import AnalyticsPage from './pages/AnalyticsPage';
import EngagementPage from './pages/EngagementPage';
import CustomizationPage from './pages/CustomizationPage';
import AdditionalPage from './pages/AdditionalPage';

// Admin Pages
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminFeatures from './admin/pages/AdminFeatures';
import AdminUsers from './admin/pages/AdminUsers';
import AdminAnalytics from './admin/pages/AdminAnalytics';
import AdminSettings from './admin/pages/AdminSettings';
import AdminLogin from './admin/pages/AdminLogin';
import { useAdminAuth } from './admin/hooks/useAdminAuth';

function AdminRoute({ children }) {
  const { isAuthenticated } = useAdminAuth();
  return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
}

export default function App() {
  return (
    <Routes>
      {/* Public App Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="profile/:userId?" element={<ProfilePage />} />
        <Route path="social" element={<SocialPage />} />
        <Route path="gaming" element={<GamingPage />} />
        <Route path="cards" element={<PlayerCardsPage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="engagement" element={<EngagementPage />} />
        <Route path="customize" element={<CustomizationPage />} />
        <Route path="additional" element={<AdditionalPage />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="features" element={<AdminFeatures />} />
        <Route path="features/:category" element={<AdminFeatures />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
    </Routes>
  );
}
