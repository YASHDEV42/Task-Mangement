"use client";
import React from "react";
import { updateStatus } from "@/action/task";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SetTaskStatus = ({ slug, task }) => {
  const [selectedStatus, setSelectedStatus] = useState(task.status);

  const handleValueChange = async (value: string) => {
    setSelectedStatus(value); // Update the local state
    try {
      await updateStatus(slug, task._id, value);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form
      action={async (formData) => {
        // This might not be needed anymore with handleValueChange handling the update
      }}
    >
      <input type="hidden" name="taskId" value={task._id} />
      <Select onValueChange={handleValueChange} value={selectedStatus}>
        <SelectTrigger className="w-[180px] bg-slate-950 outline-0 border-0 focus:ring-offset-0 focus:border-0">
          <SelectValue placeholder="Set Status" />
        </SelectTrigger>
        <SelectContent className="bg-slate-950 border-2 border-slate-950 outline-0">
          <SelectItem
            value="Pending"
            className="bg-slate-950 text-white focus:bg-slate-900 focus:text-white"
          >
            Pending
          </SelectItem>
          <SelectItem
            value="In Progress"
            className="bg-slate-950 text-white focus:bg-slate-900 focus:text-white"
          >
            In Progress
          </SelectItem>
          <SelectItem
            value="Completed"
            className="bg-slate-950 text-white focus:bg-slate-900 focus:text-white"
          >
            Completed
          </SelectItem>
        </SelectContent>
      </Select>
    </form>
  );
};

export default SetTaskStatus;
