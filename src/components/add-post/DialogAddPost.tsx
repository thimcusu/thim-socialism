import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { addPost } from "@/lib/action";
import _prisma from "@/lib/client";
import { useAuth } from "@clerk/nextjs";
import { DialogProps } from "@radix-ui/react-dialog";

export function AddPostDialog(props: DialogProps) {
  const { isLoaded, userId } = useAuth();
  console.log(isLoaded, userId);

  if (userId === null) return null;

  return (
    <Dialog {...props}>
      <DialogTrigger asChild>
        <Button className="w-full" variant={"outline"}>
          <span className="mr-auto">What is on your mind?</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a Post</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <form action={(formData) => addPost(formData)}>
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="post-input"
                type="text"
                defaultValue=""
                placeholder="What is on your mind?"
                className="col-span-4"
              />
            </div>
          </form>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
