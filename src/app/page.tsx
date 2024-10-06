'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import HoverDiv from '@/components/animations/hover-div';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';

const Page = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left"
        style={{ scaleX }}
      />
      <main className="flex justify-center min-h-[500vh]">
        <div className="flex flex-col w-2/4 p-10 justify-around border-primary h-screen">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <Button variant="secondary">Submit</Button>
          <HoverDiv>
            <Card>
              <CardHeader>
                <CardTitle>New Session</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Session Description</CardDescription>
              </CardContent>
              <CardFooter>do smth</CardFooter>
            </Card>
          </HoverDiv>
        </div>
      </main>
    </>
  );
};

export default Page;
