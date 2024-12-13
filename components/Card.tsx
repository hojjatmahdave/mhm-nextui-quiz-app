"use client";

import { Button, Select, SelectItem, Slider } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { categoryOptions, difficultyOptions } from "@/constants";

const Card = () => {
  const router = useRouter();
  const [category, setCategory] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [limit, setLimit] = useState<number | number[]>(5);

  const handleQuizStart = () => {
    router.push(
      `/questions?category=${category}&difficulty=${difficulty}&limit=${limit}`,
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 w-full h-full my-10">
      <div className=" flex flex-col lg:flex-row items-center justify-between w-full h-full">
        <Select
          className="max-w-xs "
          label="Category"
          size={"sm"}
          variant="bordered"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          {categoryOptions.map((category) => (
            <SelectItem key={category.value} className="p-2">
              {category.option}
            </SelectItem>
          ))}
        </Select>
        <Select
          className="max-w-xs"
          label="Difficulty"
          size={"sm"}
          variant="bordered"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          {difficultyOptions.map((difficulty) => (
            <SelectItem key={difficulty.value} className="p-2">
              {difficulty.option}
            </SelectItem>
          ))}
        </Select>
      </div>
      <Slider
        className="max-w-xl"
        defaultValue={5}
        formatOptions={{ style: "decimal" }}
        label="Number of Questions"
        marks={[
          {
            value: 5,
            label: "5",
          },
          {
            value: 15,
            label: "15",
          },
          {
            value: 25,
            label: "25",
          },
          {
            value: 35,
            label: "35",
          },
          {
            value: 45,
            label: "45",
          },
        ]}
        maxValue={45}
        minValue={5}
        showTooltip={true}
        step={5}
        value={limit}
        onChange={(e) => setLimit(e)}
      />
      <Button
        isDisabled={!category || !difficulty}
        className="p-4 rounded-md "
        color="primary"
        size="lg"
        onClick={handleQuizStart}
      >
        Start Quiz
      </Button>
    </div>
  );
};

export default Card;
