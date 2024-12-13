import clsx from "clsx";

import { centerBox } from "@/constants/styles";
import Card from "@/components/Card";

export default function Home() {
  return (
    <section className={clsx(" w-screen h-full", centerBox)}>
      <div
        className={clsx(
          "p-5 border-2 border-solid border-primary-500 rounded-md md:w-2/5 w-5/6",
          centerBox,
        )}
      >
        <h3 className="font-bold text-2xl lg:text-4xl">Welcome to Quizwiz</h3>
        <p className="mt-5 text-sm lg:text-base">
          Please select to start the Quiz.
        </p>
        <Card />
      </div>
    </section>
  );
}
