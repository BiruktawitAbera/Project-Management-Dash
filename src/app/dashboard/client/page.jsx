'use client';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import WelcomeCard from '@/components/WelcomeCard';
import { useEffect } from 'react';
import { useRole } from '@/context/RoleContext';

export default function ClientDashboard() {
  const { setRole } = useRole();

  useEffect(() => {
    setRole('client');
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <WelcomeCard />

        {/* Client-specific content */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Project Status</h2>
          <p className="text-gray-600 mt-2">No active projects at the moment.</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
