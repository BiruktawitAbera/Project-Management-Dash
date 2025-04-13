'use client';

import { Bell, Menu, Search, User } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useRole } from '@/context/RoleContext';

export default function Topbar() {
  const { role } = useRole();
  const roleName = role.charAt(0).toUpperCase() + role.slice(1);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 w-full">
      {/* Left section: Hamburger + Title */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        {/* Hamburger menu - shown on mobile and tablet */}
        <button className="lg:hidden p-2 rounded-md hover:bg-gray-100">
          <Menu className="h-5 w-5" />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold whitespace-nowrap flex-1 sm:flex-none">
          {roleName} Dashboard
        </h2>
      </div>

      {/* Right section: Search + Icons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm"
          />
        </div>
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full" />
          </button>
          <Avatar>
            <AvatarFallback>
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}