import clsx from "clsx";
import { Select, SelectItem } from "@nextui-org/react";

import { centerBox } from "@/constants/styles";
import Card from "@/components/Card";

export default function Home() {
  return (
    <section className={clsx(" w-screen h-full ", centerBox)}>
      <div
        className={clsx(
          "p-5 border-2 border-solid border-cyan-600 rounded-md w-2/5  ",
          centerBox,
        )}
      >
        <h3 className="font-bold text-4xl">Welcome to Quizwiz</h3>
        <p className="mt-5">Please select to start the Quiz.</p>
        <Card />
      </div>
    </section>
  );
}
