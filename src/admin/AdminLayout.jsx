import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/admin', label: 'Dashboard', icon: '\uD83D\uDCCA', exact: true },
  { path: '/admin/features', label: 'Features', icon: '\u2699\uFE0F' },
  { path: '/admin/users', label: 'Users', icon: '\uD83D\uDC65' },
  { path: '/admin/analytics', label: 'Analytics', icon: '\uD83D\uDCC8' },
  { path: '/admin/settings', label: 'Settings', icon: '\uD83D\uDD27' },
];

export default function AdminLayout() {
  const { pathname } = useLocation();
  return (
    <div className="flex h-screen bg-gray-900">
      <aside className="w-56 bg-gray-950 border-r border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-white font-bold text-lg">\uD83D\uDEE1\uFE0F Admin</h1>
          <p className="text-gray-500 text-xs">Gaming Framework</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map(item => {
            const active = item.exact ? pathname === item.path : pathname.startsWith(item.path);
            return (
              <Link key={item.path} to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  active ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}>
                <span>{item.icon}</span>{item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-gray-800">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
            <span>\u2190</span> Back to App
          </Link>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
