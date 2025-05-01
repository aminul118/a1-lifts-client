"use client";
import { TypewriterProps } from "@/lib/types/types";
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = ({
  words,
  loop = 1,
  typeSpeed = 30,
  deleteSpeed = 100,
  delaySpeed = 2000,
  className = "text-3xl lg:text-5xl font-bold leading-8 lg:leading-16 lg:h-96 h-24",
}: TypewriterProps) => {
  return (
    <h1 className={className}>
      <Typewriter
        words={words}
        cursor
        loop={loop}
        cursorStyle=""
        typeSpeed={typeSpeed}
        deleteSpeed={deleteSpeed}
        delaySpeed={delaySpeed}
      />
    </h1>
  );
};

export default TypeWriter;
