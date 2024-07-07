import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Mathematics", "Science", "Linguistics"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="lg:text-6xl text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <div className="lg:text-4xl text-2xl">International Conference on</div>
        Interdisciplinary Perspectives in
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
