"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { AddPostDialog } from "./DialogAddPost";

export default function AddPost() {
  return (
    <>
      <div className="w-full my-8">
        <Card className="w-full py-4">
          <CardContent>
            <div className="w-full flex gap-4 justify-center items-center">
              <div className="h-12">
                <Link href={"/"}>
                  <div
                    style={{
                      backgroundImage: `url(https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=800)`,
                    }}
                    className="size-12 rounded-full"
                  ></div>
                </Link>
              </div>
              <div className="flex-[1_0]">
                <AddPostDialog />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex mx-auto justify-center gap-12 pb-4">
            <Button variant="ghost" className="px-12 font-semibold text-gray-600">
              Photo/Video
            </Button>
            <Button variant="ghost" className="px-12 font-semibold text-gray-600">
              Feeling/Active
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
