'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Quiz from './Quiz';
import QuizResult from './QuizResult';
import { pythonQuestions } from '../data/data'

export default function PythonQuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
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

  // Calculate progress percentage
  const progress = ((currentQuestionIndex + 1) / pythonQuestions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Progress bar container */}
      {!showResult && (
        <div className="w-full bg-gray-300 h-4 rounded-full mb-6">
          {/* Animated progress bar */}
          <motion.div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl" // Set maximum width to prevent overflowing
      >
        {!showResult ? (
          <div className="w-full h-full" style={{ width: '80%' }}> {/* Container with 80% width */}
            <Quiz
              question={pythonQuestions[currentQuestionIndex].question}
              options={pythonQuestions[currentQuestionIndex].options}
              handleAnswer={handleAnswer}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
        ) : (
          <div className="w-full h-full" style={{ width: '80%' }}> {/* Container with 80% width */}
            <QuizResult
              correctAnswers={correctAnswers}
              totalQuestions={pythonQuestions.length}
              onRestart={() => {
                setCurrentQuestionIndex(0);
                setCorrectAnswers(0);
                setShowResult(false);
              }}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}
