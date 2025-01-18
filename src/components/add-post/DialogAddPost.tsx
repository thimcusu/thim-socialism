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
import prisma from "@/lib/client";
import { useAuth } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { DialogProps } from "@radix-ui/react-dialog";

export function AddPostDialog(props: DialogProps) {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  console.log(isLoaded, userId);

  if (userId === null) return null;

  return (
    <Dialog {...props}>
      <DialogTrigger asChild>
        <Button className="w-full" variant={"outline"}>
          <span className="mr-auto">What's on your mind?</span>
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
                placeholder="What's on your mind?"
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
