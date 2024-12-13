"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Progress,
  useDisclosure,
} from "@nextui-org/react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useRouter } from "next/navigation";

import { centerBox } from "@/constants/styles";
import { showCategory } from "@/constants";

interface Question {
  category: string;
  id: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  tags: string[];
  type: string;
  difficulty: string;
  regions: [];
  isNiche: boolean;
}

interface Props {
  questions: Question[];
  limit: number;
  category: string;
}

const QuizCard = ({ category, limit, questions }: Props) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<{
    item: string;
    index: number;
  } | null>(null);
  const [num, setNum] = useState(0);

  useEffect(() => {
    setAnswers(
      [...questions[num].incorrectAnswers, questions[num].correctAnswer].sort(
        () => Math.random() - 0.5,
      ),
    );
  }, [questions, num]);

  const handleAnswerClick = (item: string) => {
    setSelected({ item, index: answers.indexOf(item) });
    if (item === questions[num].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (num === limit - 1) {
      onOpen();
    } else {
      setNum((prev) => prev + 1);
      setSelected(null);
    }
  };

  const handleExitQuiz = () => {
    router.push("/");
  };

  return (
    <section className={clsx("w-screen h-full", centerBox)}>
      <div
        className={clsx(
          "p-5 border-2 border-solid border-primary-500 rounded-md md:w-2/5 w-5/6 gap-5",
          centerBox,
        )}
      >
        <Progress
          aria-label="Progress"
          size="md"
          value={((num + 1) / limit) * 100}
        />
        <div className="flex flex-row items-start justify-between w-full">
          <div className="flex flex-col items-start justify-center gap-2">
            <h3>Category: {showCategory(category)}</h3>
            <h3>Score: {score}</h3>
          </div>
          <CountdownCircleTimer
            key={num}
            isPlaying={!selected}
            colors="#006FEE"
            duration={15}
            size={100}
            onComplete={() => ({ shouldRepeat: false })}
          >
            {({ remainingTime }) => <span>{remainingTime}</span>}
          </CountdownCircleTimer>
        </div>
        <div className="flex flex-col items-start gap-5 w-full">
          <h3 className="text-2xl text-primary-500">Question {num + 1}:</h3>
          <div className="bg-gray-200 dark:bg-gray-800 px-5 py-3 rounded-md w-full">
            <p className="text-base dark:text-white light:text-gray-900">
              {questions[num].question}
            </p>
          </div>
          <h3 className="text-xl text-green-500">Answers:</h3>
          {answers.map((item) => (
            <Button
              key={item}
              isDisabled={!!selected}
              className={clsx(
                "px-5 py-3 rounded-md w-full",
                item === selected?.item &&
                  (item === questions[num].correctAnswer
                    ? "bg-green-500"
                    : "bg-red-500"),
              )}
              variant="flat"
              onClick={() => handleAnswerClick(item)}
            >
              <p className="text-base dark:text-white light:text-gray-900 w-full overflow-auto">
                {item}
              </p>
            </Button>
          ))}
        </div>
        <div className="flex flex-row items-center justify-between w-full lg:w-2/3 gap-5 my-5">
          <Button color="primary" onClick={handleNextQuestion}>
            {num === limit - 1 ? "Finish Quiz" : "Next Question"}
          </Button>
          <Button className="bg-red-600 text-white" onClick={handleExitQuiz}>
            Exit Quiz
          </Button>
        </div>
      </div>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col items-center justify-center text-xl gap-1">
                Quiz Result
              </ModalHeader>
              <ModalBody className="flex flex-col items-center justify-center gap-5 min-h-52">
                <p>Your score is</p>
                <p className="text-6xl text-primary-500 font-bold">{score}</p>
              </ModalBody>
              <ModalFooter className="flex flex-row items-center justify-center gap-5">
                <Button color="danger" variant="bordered" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={() => router.push("/")}>
                  Start Another
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default QuizCard;
