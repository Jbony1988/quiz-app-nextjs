'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Quiz from './Quiz';
import QuizResult from './QuizResult';
import { javascriptQuestions } from '../data/javascriptQuestions';

export default function JavaScriptQuizPage() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const currentSection = javascriptQuestions[currentSectionIndex];
  const currentQuestion = currentSection.questions[currentQuestionIndex];

  const handleAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (selectedOption === currentQuestion.answer) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
    } else if (currentSectionIndex < javascriptQuestions.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentQuestionIndex(0);
      setSelectedOption('');
    } else {
      // Navigate to the results page
      window.location.href = '/assessment-results'; // Navigate using window.location
    }
  };

  // Calculate progress percentage
  const totalQuestions = javascriptQuestions.reduce((acc, section) => acc + section.questions.length, 0);
  const answeredQuestions =
    javascriptQuestions
      .slice(0, currentSectionIndex)
      .reduce((acc, section) => acc + section.questions.length, 0) +
    currentQuestionIndex +
    1;
  const progress = (answeredQuestions / totalQuestions) * 100;

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
              question={currentQuestion.question}
              options={currentQuestion.options}
              handleAnswer={handleAnswer}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
        ) : (
          <div className="w-full h-full" style={{ width: '80%' }}> {/* Container with 80% width */}
            <QuizResult
              correctAnswers={correctAnswers}
              totalQuestions={totalQuestions}
              onRestart={() => {
                setCurrentSectionIndex(0);
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
