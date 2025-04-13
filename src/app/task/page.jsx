'use client';

import DashboardLayout from '@/components/layouts/DashboardLayout';

export default function TaskPage() {
  return (
    <DashboardLayout>
      <div className="bg-white rounded-xl p-6 shadow max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">My Tasks</h1>
        <ul className="space-y-4">
          {["Design login page", "Fix bug in dashboard", "Prepare weekly report"].map((task, index) => (
            <li key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <span className="text-gray-700">{task}</span>
              <button className="text-sm text-blue-600 hover:underline">View</button>
            </li>
          ))}
        </ul>
      </div>
    </DashboardLayout>
  );
}
