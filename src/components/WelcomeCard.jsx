'use client';

import { useRole } from "@/context/RoleContext";

export default function WelcomeCard() {
  const { role } = useRole();

  const roleTitles = {
    manager: 'Manager',
    team: 'Team Member',
    client: 'Client',
  };

  const welcomeTitle = `Welcome, ${roleTitles[role] || 'User'}`;

  return (
    <div className="bg-[#1f2937] text-white rounded-xl p-6 shadow-md flex flex-col md:flex-row justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold">Good Morning, Lucas Garcia</h2>
        <p className="text-gray-300 mt-1">{welcomeTitle}</p>
      </div>
      <div className="mt-4 md:mt-0">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
          View Task
        </button>
      </div>
    </div>
  );
}
