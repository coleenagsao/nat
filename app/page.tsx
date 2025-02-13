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
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Lens } from "@/components/magicui/lens";
import { BlurFade } from "@/components/magicui/blur-fade";


export default function Home() {
  return (
   <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      <Meteors number={30} />
      <BlurFade delay={0.5} inView>
        <Card className="relative max-w-md shadow-none m-8">
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
            <CardTitle>
              <div className="flex item-center text-2xl space-x-1">
                <p>Will you be my</p>
                <SparklesText className="text-2xl" text="Valentine" sparklesCount={2} />
                <p>?</p>
              </div>
            </CardTitle>    
            <CardDescription className="py-2">
            After school and work, I would love a date with you tonight. Will you go on a virtual date with me? - Cole
            </CardDescription>
        </CardContent>
          <CardFooter className="space-x-4">
          <Button>Yes</Button>
          <Button variant="secondary">No :c</Button>
        </CardFooter>
        </Card>
      </BlurFade>

    </div>
  );
}
