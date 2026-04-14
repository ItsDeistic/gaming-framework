import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {
  User, Users, Gamepad2, CreditCard, Globe, BarChart2,
  Trophy, Palette, Plus, Home, Menu, X, Settings, Shield
} from 'lucide-react';
import { useFramework } from '../../context/FrameworkContext';
import clsx from 'clsx';

const NAV_ITEMS = [
  { path: '/', label: 'Home', icon: Home, exact: true },
  { path: '/profile', label: 'Profile', icon: User },
  { path: '/social', label: 'Social', icon: Users },
  { path: '/gaming', label: 'Gaming', icon: Gamepad2 },
  { path: '/cards', label: 'Player Cards', icon: CreditCard },
  { path: '/community', label: 'Community', icon: Globe },
  { path: '/analytics', label: 'Analytics', icon: BarChart2 },
  { path: '/engagement', label: 'Engagement', icon: Trophy },
  { path: '/customize', label: 'Customize', icon: Palette },
  { path: '/additional', label: 'Additional', icon: Plus },
];

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { features } = useFramework();

  return (
    <div className="flex h-screen bg-[#0d0f1a] text-white overflow-hidden">
      {/* Sidebar */}
      <aside
        className={clsx(
          'flex flex-col bg-[#13162a] border-r border-[#1e2340] transition-all duration-300 z-20',
          sidebarOpen ? 'w-64' : 'w-16'
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 p-4 border-b border-[#1e2340]">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center flex-shrink-0 glow">
            <Gamepad2 className="w-4 h-4" />
          </div>
          {sidebarOpen && (
            <span className="font-gaming font-bold text-sm text-white truncate">GAMING FW</span>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="ml-auto text-gray-400 hover:text-white transition-colors"
          >
            {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map(({ path, label, icon: Icon, exact }) => (
            <NavLink
              key={path}
              to={path}
              end={exact}
              className={({ isActive }) =>
                clsx(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group',
                  isActive
                    ? 'bg-brand-600 text-white glow'
                    : 'text-gray-400 hover:text-white hover:bg-[#1e2340]'
                )
              }
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {sidebarOpen && <span className="text-sm font-medium">{label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Bottom Links */}
        <div className="p-2 border-t border-[#1e2340] space-y-1">
          <NavLink
            to="/admin"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#1e2340] transition-all"
          >
            <Shield className="w-4 h-4 flex-shrink-0" />
            {sidebarOpen && <span className="text-sm font-medium">Admin Panel</span>}
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
