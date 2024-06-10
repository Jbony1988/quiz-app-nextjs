// Home.js
'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Quiz from './components/Quiz';
import QuizResult from './components/QuizResult';

const pythonQuestions = [
  {
    question: "What is the output of print(2**3)?",
    options: ["6", "8", "9", "27"],
    answer: "8",
  },
  {
    question: "What data type is the object below?\nL = [1, 23, 'hello', 1]",
    options: ["List", "Dictionary", "Tuple", "Array"],
    answer: "List",
  },
  {
    question: "Which of the following is not a keyword in Python?",
    options: ["lambda", "eval", "assert", "pass"],
    answer: "eval",
  },
  // Add more questions here...
];

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleAnswer = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (selectedOption === pythonQuestions[currentQuestionIndex].answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
    if (currentQuestionIndex < pythonQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {!showResult ? (
          <Quiz
            question={pythonQuestions[currentQuestionIndex].question}
            options={pythonQuestions[currentQuestionIndex].options}
            handleAnswer={handleAnswer}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        ) : (
          <QuizResult
            correctAnswers={correctAnswers}
            totalQuestions={pythonQuestions.length}
            onRestart={() => {
              setCurrentQuestionIndex(0);
              setCorrectAnswers(0);
              setShowResult(false);
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
