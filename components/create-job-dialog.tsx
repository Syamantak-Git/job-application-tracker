import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface createJobApplicationDialogProps {
  columnId: string;
  boardId: string;
}
export default function CreateJobApplicationDialog({
  columnId,
  boardId,
}: createJobApplicationDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">
          <Plus /> Add Job
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Job Application</DialogTitle>
          <DialogDescription>Track a new job application</DialogDescription>
        </DialogHeader>
        <form>
          <div>
            <div>
              <div>
                <Label htmlFor="company">Company *</Label>
                <Input id="company" required />
              </div>
              <div>
                <Label htmlFor="position">Position *</Label>
                <Input id="position" required />
              </div>
            </div>
            <div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" />
              </div>
              <div>
                <Label htmlFor="salary">Salary</Label>
                <Input id="salary" />
              </div>
            </div>
            <div>
              <Label htmlFor="jobUrl">Job URL</Label>
              <Input id="jobUrl" />
            </div>
            <div>
              <Label htmlFor="tags">Tags</Label>
              <Input id="tags" />
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
