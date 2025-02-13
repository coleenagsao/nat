/* eslint-disable @next/next/no-img-element */
 
"use client";

import React, { useState } from 'react';
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
import { Spotlight } from '@/components/ui/spotlight';
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Lens } from "@/components/magicui/lens";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function Home() {
  const [image, setImage] = useState("https://plus.unsplash.com/premium_photo-1689518469262-6f9499412ef0?q=80&w=3845&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

  return (
   <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-purple-950">
      <Meteors number={100} />
       <Spotlight
        className='bg-pink-200 blur-2xl'
        size={64}
        springOptions={{
          bounce: 0.3,
          duration: 0.1,
        }}
      />
      <BlurFade delay={0.5} inView>
        <Card className="relative max-w-md shadow-none m-8 bg-fuchsia-50">
          <CardHeader>
            <Lens
            zoomFactor={2}
            lensSize={150}
            isStatic={false}
            ariaLabel="Zoom Area"
          >
            <img
              src={image}
              alt="image placeholder"
              width={500}
              height={500}
            />
          </Lens>
        </CardHeader>
        <CardContent>
            <CardTitle>
              <div className="flex item-center text-2xl space-x-1 text-pink-500"> 
                Will you be my Valentine?

              </div>
            </CardTitle>    
            <CardDescription className="py-2 text-pink-400">
            After school and work, I would love a date with you tonight. Will you go on a virtual date with me? - Cole
            </CardDescription>
        </CardContent>
          <CardFooter className="space-x-4">
          <Button className="bg-pink-500 hover:bg-pink-400" onClick={() => setImage("https://i.pinimg.com/originals/8e/74/80/8e74802ee2a3df7d3db9cde1d760800c.gif")}>Yes</Button>
          <Button className="border border-pink-500 text-pink-500 hover:border-pink-300" variant="secondary" onClick={() => setImage("https://i.pinimg.com/originals/9c/c9/a0/9cc9a05e21b99ee8bc4cd5d62901dc99.gif")}>No :c</Button>
        </CardFooter>
        </Card>
      </BlurFade>
    </div>
  );
}
