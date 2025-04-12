'use client';

import { useState } from 'react';
import {
  Home,
  Calendar,
  ListTodo,
  MessageSquare,
  User,
  Settings,
  HelpCircle,
  Menu,
  X,
  ClipboardList,
} from 'lucide-react';
import Link from 'next/link';
import { useRole } from '@/context/RoleContext';
import { cn } from '@/lib/utils';

const ICON_SIZE = 20;

// Sidebar items by role
const NAV_ITEMS = {
  manager: [
    { name: 'Dashboard', icon: <Home size={ICON_SIZE} />, href: '/' },
    { name: 'Summary', icon: <ClipboardList size={ICON_SIZE} />, href: '/summary' },
    { name: 'Task', icon: <ListTodo size={ICON_SIZE} />, href: '/task' },
    { name: 'Calendar', icon: <Calendar size={ICON_SIZE} />, href: '/calendar' },
    { name: 'Messages', icon: <MessageSquare size={ICON_SIZE} />, href: '/messages' },
    { name: 'Profile', icon: <User size={ICON_SIZE} />, href: '/profile' },
    { name: 'Setting', icon: <Settings size={ICON_SIZE} />, href: '/settings' },
    { name: 'FAQ', icon: <HelpCircle size={ICON_SIZE} />, href: '/faq' },
  ],
  team: [
    { name: 'Dashboard', icon: <Home size={ICON_SIZE} />, href: '/' },
    { name: 'Task', icon: <ListTodo size={ICON_SIZE} />, href: '/task' },
    { name: 'Calendar', icon: <Calendar size={ICON_SIZE} />, href: '/calendar' },
    { name: 'Messages', icon: <MessageSquare size={ICON_SIZE} />, href: '/messages' },
    { name: 'Profile', icon: <User size={ICON_SIZE} />, href: '/profile' },
    { name: 'Setting', icon: <Settings size={ICON_SIZE} />, href: '/settings' },
    { name: 'FAQ', icon: <HelpCircle size={ICON_SIZE} />, href: '/faq' },
  ],
  client: [
    { name: 'Dashboard', icon: <Home size={ICON_SIZE} />, href: '/' },
    { name: 'Calendar', icon: <Calendar size={ICON_SIZE} />, href: '/calendar' },
    { name: 'Messages', icon: <MessageSquare size={ICON_SIZE} />, href: '/messages' },
    { name: 'Profile', icon: <User size={ICON_SIZE} />, href: '/profile' },
    { name: 'Setting', icon: <Settings size={ICON_SIZE} />, href: '/settings' },
    { name: 'FAQ', icon: <HelpCircle size={ICON_SIZE} />, href: '/faq' },
  ],
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { role } = useRole();
  const navItems = NAV_ITEMS[role] || [];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-30 h-full">
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-40 p-2 text-gray-700 bg-white shadow-md rounded-full"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Container */}
      <div
        className={cn(
          'fixed lg:static top-0 left-0 h-full w-64 bg-white border-r p-4 shadow-md transition-all duration-300 ease-in-out z-30 flex flex-col',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <h1 className="text-2xl font-bold text-blue-600 mb-8">Taskcore</h1>

        <nav className="flex flex-col gap-4 flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-100 text-gray-700 font-medium transition-colors"
              onClick={() => setIsOpen(false)} // close on mobile
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-50 z-20"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}
