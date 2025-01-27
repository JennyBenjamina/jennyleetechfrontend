import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface MyDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  author: string;
}

export function MyDialog({
  isOpen,
  onClose,
  title,
  description,
  author,
}: MyDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] rounded-lg bg-white shadow-lg border p-6">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-semibold text-gray-800">
            {title}
          </DialogTitle>
          <DialogDescription className="mt-4 text-lg text-gray-600">
            {description}
          </DialogDescription>
          {author && (
            <DialogDescription className="mt-2 text-sm text-gray-500 italic">
              — {author}
            </DialogDescription>
          )}
        </DialogHeader>
        <DialogFooter className="mt-6 flex justify-center">
          <Button
            onClick={onClose}
            className="px-6 py-2 text-sm font-medium rounded-md "
          >
            I Understand
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
