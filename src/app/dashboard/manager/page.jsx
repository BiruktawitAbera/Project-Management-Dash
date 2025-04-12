'use client';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import TaskOverview from '@/components/TaskOverview';
import DashboardCard from '@/components/DashboardCard';
import WelcomeCard from '@/components/WelcomeCard';
import CalendarView from '@/components/CalendarView';
import { useEffect } from 'react';
import { useRole } from '@/context/RoleContext';

export default function ManagerDashboard() {
  const { setRole } = useRole();

  useEffect(() => {
    setRole('manager');
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome card spans full width */}
        <WelcomeCard />

        {/* Main content splits in two */}
        <div className="flex flex-col xl:flex-row gap-6">
          {/* Left side - tasks */}
          <div className="flex-1 space-y-6">
            <TaskOverview />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <DashboardCard title="My Tasks" status="upcoming" color="blue" />
              <DashboardCard title="In Progress" status="in-progress" color="yellow" />
              <DashboardCard title="Completed" status="completed" color="green" />
            </div>
          </div>

          {/* Right side - calendar */}
          <div className="w-full xl:w-1/3">
            <CalendarView />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
