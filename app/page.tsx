/* eslint-disable @next/next/no-img-element */
 
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Meteors } from "@/components/magicui/meteors";
import { Lens } from "@/components/magicui/lens";
import { CoolMode } from "@/components/magicui/cool-mode";;


export default function Home() {
  return (
   <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      <Meteors number={30} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      </span>
      <Card className="relative max-w-md shadow-none">
      <CardHeader>
        <Lens
          zoomFactor={2}
          lensSize={150}
          isStatic={false}
          ariaLabel="Zoom Area"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1689518469262-6f9499412ef0?q=80&w=3845&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image placeholder"
            width={500}
            height={500}
          />
        </Lens>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl">Will you be my Valentine?</CardTitle>
          <CardDescription className="py-2">
          After school and work, I would love a date with you tomorrow night. Will you go on a virtual date with me? - Cole
          </CardDescription>
      </CardContent>
        <CardFooter className="space-x-4">
        <CoolMode>
          <Button>Yes</Button>
        </CoolMode>
        <Button variant="secondary">No :c</Button>
      </CardFooter>
    </Card>
    </div>
  );
}
