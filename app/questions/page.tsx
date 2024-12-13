import QuizCard from "@/components/QuizCard";
import { categoryOptions, difficultyOptions } from "@/constants";
import { redirect } from "next/navigation";
import React from "react";
interface Props {
  searchParams: {
    category: string;
    difficulty: string;
    limit: number;
  };
}
async function getData(category: string, difficulty: string, limit: number) {
  const res = await fetch(
    `https://the-trivia-api.com/api/questions?categories=${category}&limit=${limit}&type=multiple&difficulty=${difficulty}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const QuestionsPage = async ({ searchParams }: Props) => {
  const { category, difficulty, limit } = searchParams;
  const validateCategory = (category: string) => {
    const validCategories = categoryOptions.map((option) => option.value);
    return validCategories.includes(category);
  };

  const validateDifficulty = (difficulty: string) => {
    const validDifficulties = difficultyOptions.map((option) => option.value);
    return validDifficulties.includes(difficulty);
  };

  const validateLimit = (limit: string) => {
    const parsedLimit = parseInt(limit, 10);
    return !isNaN(parsedLimit) && parsedLimit >= 5 && parsedLimit <= 50;
  };

  if (
    !validateCategory(category) ||
    !validateDifficulty(difficulty) ||
    !validateLimit(limit.toString())
  ) {
    return redirect("/");
  }
  const res = await getData(category, difficulty, limit);

  return <QuizCard category={category} limit={limit} questions={res} />;
};

export default QuestionsPage;
