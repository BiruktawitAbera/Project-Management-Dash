import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function TaskItem({ title, due, status, assignee }) {
  return (
    <div className="bg-white border rounded-lg p-4 flex justify-between items-center mb-3 shadow-sm">
      <div>
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500">Due: {due}</p>
      </div>

      <div className="flex items-center gap-4">
        <span className={`text-xs font-medium px-2 py-1 rounded-full 
          ${status === "in-progress" ? "bg-yellow-100 text-yellow-700" : 
            status === "completed" ? "bg-green-100 text-green-700" :
            status === "overdue" ? "bg-red-100 text-red-700" :
            "bg-gray-100 text-gray-700"}`}>
          {status.replace("-", " ")}
        </span>

        <Avatar className="h-7 w-7">
          <AvatarImage src={assignee.image} alt={assignee.name} />
          <AvatarFallback>{assignee.initials}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
