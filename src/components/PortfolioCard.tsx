"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface PortfolioCardProps {
  title: string;
  description: string;
  soundcloudUrl: string;
  type: "Musica" | "Vinheta Musical";
}

export function PortfolioCard({ title, description, soundcloudUrl, type }: PortfolioCardProps) {
  return (
    <Card className="bg-zinc-900/50 border-zinc-800 text-white flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <CardTitle className="text-cyan-400">{title}</CardTitle>
          <span className="text-sm text-zinc-400 bg-zinc-800 px-2 py-1 rounded-full">{type}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-zinc-300">{description}</p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black">Ouvir agora</Button>
          </DialogTrigger>
          <DialogContent className="bg-zinc-950 border-zinc-800">
            <DialogHeader>
              <DialogTitle className="text-cyan-400">{title}</DialogTitle>
            </DialogHeader>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={soundcloudUrl}
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
