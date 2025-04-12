'use client';
import { useSelector } from 'react-redux';
import { cn } from '@/lib/utils';

export default function DashboardCard({ title, status, color }) {
  const tasks = useSelector((state) => state.task.tasks);
  const count = tasks.filter((task) => task.status === status).length;

  return (
    <div className={cn(
      "rounded-xl p-4 shadow-sm border bg-white flex flex-col justify-between",
      color === "blue" && "border-blue-200",
      color === "yellow" && "border-yellow-200",
      color === "green" && "border-green-200"
    )}>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className={cn(
        "text-3xl font-bold",
        color === "blue" && "text-blue-600",
        color === "yellow" && "text-yellow-600",
        color === "green" && "text-green-600"
      )}>
        {count}
      </p>
    </div>
  );
}
