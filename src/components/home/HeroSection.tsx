"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="padding-container max-container flex flex-col md:flex-row gap-4 items-center py-8 md:pt-20">
      <div className="order-2 md:order-1 md:w-[50%] flex md:block flex-col items-center md:items-start justify-center text-center md:text-left">
        <h4 className="text-2xl md:text-4xl dark:text-white text-black">
          An astute
        </h4>
        <h1 className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r dark:from-green-500 dark:via-purple-200 dark:to-orange-800 from-orange-800 via-green-900 to-purple-900 font-semibold animate-gradient">
          Frontend Engineer
        </h1>
        <div className="min-h-20 py-2">
          <TypeAnimation
            sequence={[
              "Hi 👋, my name is Iwumezie Pamela. I am a result-driven Front-end Engineer with a track record of improving user experience and performance. Passionate about learning new technologies and continously improving code quality.",
              1000,
            ]}
            wrapper="p"
            speed={80}
            style={{ display: "inline-block" }}
            className=""
          />
        </div>
        <Link href="mailto:iwumeziep@gmail.com" target="_blank">
          <Button
            type="button"
            variant="gradient"
            className="my-4 hover:animate-pulse hover:scale-105 transition-all duration-500"
          >
            Get in Touch
          </Button>
        </Link>
      </div>
      <div className="order-1 md:order-2 w-full md:w-[50%] bg-contain bg-no-repeat bg-center h-[200px] md:h-[250px] rounded-full bg-banner" />
    </div>
  );
};

export default HeroSection;
