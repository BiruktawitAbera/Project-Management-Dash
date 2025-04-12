'use client';

import { Bell, Menu, Search, User } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useRole } from '@/context/RoleContext';

export default function Topbar() {
  const { role } = useRole();
  const roleName = role.charAt(0).toUpperCase() + role.slice(1);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4">
      {/* Left section: Hamburger + Title */}
      <div className="flex items-center gap-2">
        {/* Hamburger menu - shown only on small screens */}
        <button className="sm:hidden p-2 rounded-md hover:bg-gray-100">
          <Menu className="h-5 w-5" />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold">{roleName} Dashboard</h2>
      </div>

      {/* Right section: Search + Icons */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search"
          className="w-full sm:w-64 px-4 py-2 border rounded-lg text-sm"
        />
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
  );
}
