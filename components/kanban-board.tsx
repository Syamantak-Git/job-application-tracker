"use client";

import { Board, Column, JobApplication } from "@/lib/models/model.types";
import { Award, Calendar, CheckCircle2, Mic, MoreHorizontal, MoreVertical, Trash2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import CreateJobApplicationDialog from "./create-job-dialog";
import JobApplicationCard from "./job-application-card";
import useBoard from "@/lib/hooks/useBoard";

interface KanbanBoardProps {
  board: Board;
  userId: string;
}
interface ColConfig {
  color: string;
  icon: React.ReactNode;
}
const COLUMN_CONFIG: Array<ColConfig> = [
  {
    color: "bg-cyan-500",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    color: "bg-purple-500",
    icon: <CheckCircle2 className="h-4 w-4" />,
  },
  {
    color: "bg-green-500",
    icon: <Mic className="h-4 w-4" />,
  },
  {
    color: "bg-yellow-500",
    icon: <Award className="h-4 w-4" />,
  },
  {
    color: "bg-red-500",
    icon: <XCircle className="h-4 w-4" />,
  },
];

function DroppableColumn({
  column,
  config,
  boardId,
  sortedColumns,
}: {
  column: Column;
  config: ColConfig;
  boardId: string;
  sortedColumns: Column[]
}) {
  const sortedJobs = column.jobApplications?.sort((a,b)=>a.order-b.order) || []
  return (
    <Card>
      <CardHeader className={`${config.color}`}>
        <div>
          <div>
            {config.icon}
            <CardTitle>{column.name}</CardTitle>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost">
                    <MoreVertical/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Trash2/> Delete Column
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent>
        {
          sortedJobs.map((job, key) => (
            <SortableJobCard key={key} jobs={{...job, columnId:job.columnId || column._id}} columns={sortedColumns}/>
          ))
        }
        <CreateJobApplicationDialog columnId={column._id} boardId={boardId}/>
      </CardContent>
    </Card>
  );
}

function SortableJobCard({jobs, columns}:{jobs:JobApplication; columns: Column[]}) {
  return <div>
    <JobApplicationCard jobs={jobs} columns={columns}/>
  </div>
}
export default function KanbanBoard({ board, userId }: KanbanBoardProps) {

  const {columns, moveJob} = useBoard(board)

  const sortedColumns = columns?.sort((a, b)=>a.order-b.order) || []
  return (
    <>
      <div>
        <div>
          {columns.map((col, key) => {
            const config = COLUMN_CONFIG[key] || {
              color: "bg-cyan-500",
              icon: <Calendar className="h-4 w-4" />,
            };
            return (
              <DroppableColumn
                key={key}
                column={col}
                config={config}
                boardId={board._id}
                sortedColumns={sortedColumns}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
