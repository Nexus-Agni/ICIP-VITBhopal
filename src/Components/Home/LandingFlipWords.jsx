import React from "react";
import { FlipWords } from "../ui/flip-words";
import { Highlight } from "../ui/hero-highlight";
export function FlipWordsDemo() {
  const words = ["Mathematics", "Science", "Linguistics"];

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <div className="text-center font-normal text-neutral-600 dark:text-neutral-400">
        <div className="text-2xl lg:text-4xl mb-2 ">
          International Conference on
        </div>
        <div className="text-4xl lg:text-6xl text-white">
          Interdisciplinary Perspectives in
          <FlipWords words={words} />
        </div>
        <div className="text-2xl lg:text-4xl mt-2">
          Organized by SASL , VIT Bhopal
        </div>
      </div>
      <Highlight className="lg:text-2xl mt-6 text-lg text-center text-yellow-300 ">
        25th - 27th November 2024
      </Highlight>
    </div>
  );
}
