"use client";

import { Button, Select, SelectItem, Slider } from "@nextui-org/react";

export const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];
const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 w-full h-full my-10">
      <div className=" flex flex-row items-center justify-between w-full h-full">
        <Select className="max-w-xs" label="Category" size={"sm"}>
          {animals.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
        <Select className="max-w-xs" label="Difficulty" size={"sm"}>
          {animals.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
      </div>
      <Slider
        className="max-w-xl my-10 "
        defaultValue={10}
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
      />
      <Button color="primary" size="lg" className="p-4 ">
        Start Quiz
      </Button>
    </div>
  );
};

export default Card;
