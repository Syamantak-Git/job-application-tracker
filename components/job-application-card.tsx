import { Column, JobApplication } from "@/lib/models/model.types";
import { Card, CardContent } from "./ui/card";
import { Edit2, ExternalLink, MoreVertical, Trash2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

interface JobApplicationCardProps {
  jobs: JobApplication;
  columns: Column[];
}
export default function JobApplicationCard({
  jobs,
  columns,
}: JobApplicationCardProps) {
  return (
    <>
      <Card>
        <CardContent>
          <div>
            <div>
              <h3>{jobs.position}</h3>
              <p>{jobs.company}</p>
              {jobs.description && <p>{jobs.description}</p>}
              {jobs.tags && jobs.tags.length > 0 && (
                <div>
                  {jobs.tags.map((tag, key) => (
                    <span key={key}>{tag}</span>
                  ))}
                </div>
              )}
              {
                jobs.jobUrl && (<a target="_blank" href={jobs.jobUrl} onClick={(e)=>e.stopPropagation()}><ExternalLink/></a>)
              }
            </div>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button size="icon">
                            <MoreVertical/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem><Edit2/>Edit</DropdownMenuItem>
                        {columns.length > 1 && <>
                        {columns.filter((c)=>c._id !== jobs.columnId).map((column, key)=>(<DropdownMenuItem key={key}>Move to {column.name}</DropdownMenuItem>))}
                        </>}
                        <DropdownMenuItem><Trash2/>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
