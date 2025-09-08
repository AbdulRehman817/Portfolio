"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Github, Coffee, Heart } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

export function SupportDialog({ contentType }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 7000); // 7-second delay

    return () => clearTimeout(timer);
  }, []);

  const message =
    contentType === "blog post"
      ? "Enjoying the article?"
      : "Find this project useful?";

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader className="text-center">
          <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
            <Heart className="w-8 h-8" />
          </div>
          <AlertDialogTitle>{message}</AlertDialogTitle>
          <AlertDialogDescription>
            Your support helps me dedicate more time to creating quality content
            and open-source projects.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-center">
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button asChild className="w-full sm:w-auto">
              <a
                href="https://github.com/AbdulRehman817"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" /> Star on GitHub
              </a>
            </Button>
            <Button variant="secondary" asChild className="w-full sm:w-auto">
              <a
                href="https://buymeacoffee.com/abdul_rehman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Coffee className="mr-2 h-5 w-5" /> Buy Me a Coffee
              </a>
            </Button>
          </div>
        </AlertDialogFooter>
        <AlertDialogCancel className="w-full mt-2">
          Maybe later
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
}
