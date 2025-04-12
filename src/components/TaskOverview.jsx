'use client';

import { useSelector } from "react-redux";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import TaskItem from "./TaskItem";

export default function TaskOverview() {
  const tasks = useSelector((state) => state.task.tasks);

  const filteredTasks = (status) => tasks.filter((task) => task.status === status);

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Task Overview</h2>

      <Tabs defaultValue="my-tasks" className="w-full">
        <TabsList className="mb-4 flex flex-wrap gap-2">
          <TabsTrigger value="my-tasks">My Tasks</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="overdue">Overdue</TabsTrigger>
        </TabsList>

        <TabsContent value="my-tasks">
          <Card>
            <CardContent className="p-4 space-y-3">
              {filteredTasks("my-tasks").map((task, index) => (
                <TaskItem key={index} {...task} />
              ))}
              {filteredTasks("my-tasks").length === 0 && (
                <p className="text-sm text-gray-500">No tasks in this category.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="in-progress">
          <Card>
            <CardContent className="p-4 space-y-3">
              {filteredTasks("in-progress").map((task, index) => (
                <TaskItem key={index} {...task} />
              ))}
              {filteredTasks("in-progress").length === 0 && (
                <p className="text-sm text-gray-500">No tasks in this category.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardContent className="p-4 space-y-3">
              {filteredTasks("completed").map((task, index) => (
                <TaskItem key={index} {...task} />
              ))}
              {filteredTasks("completed").length === 0 && (
                <p className="text-sm text-gray-500">No tasks in this category.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overdue">
          <Card>
            <CardContent className="p-4 space-y-3">
              {filteredTasks("overdue").map((task, index) => (
                <TaskItem key={index} {...task} />
              ))}
              {filteredTasks("overdue").length === 0 && (
                <p className="text-sm text-gray-500">No tasks in this category.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
