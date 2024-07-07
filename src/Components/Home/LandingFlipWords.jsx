import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Mathematics", "Science", "Linguistics"];

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <div className="lg:text-6xl text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <div className="lg:text-4xl text-2xl">International Conference on</div>
        Interdisciplinary Perspectives in
        <FlipWords words={words} /> <br />
        <div className="lg:text-4xl text-2xl mt-2">
          Organized by SASL , VIT Bhopal
        </div>
      </div>
        <div className="lg:text-2xl mt-6 text-lg text-center text-neutral-500 dark:text-neutral-400">
            25th - 27th November 2024
        </div>
    </div>
  );
}
