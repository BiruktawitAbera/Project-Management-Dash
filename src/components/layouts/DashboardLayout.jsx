'use client';

import { useRole } from "@/context/RoleContext";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/ui/Sidebar";

export default function DashboardLayout({ children }) {
  const { role } = useRole();

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar (hidden on small screens, displayed on large screens) */}
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>

      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-6">
          {children}
        </main>
      </div>

      {/* Sidebar rendered for mobile (fixed inside component itself) */}
      <Sidebar />
    </div>
  );
}
