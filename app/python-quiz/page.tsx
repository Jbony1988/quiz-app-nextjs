'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Quiz from '../-components/Quiz'; // Adjust path based on your project structure
import { pythonQuestions } from '../data/data'; // Adjust path based on your project structure

const PythonQuizPage = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const router = useRouter();

  const currentSection = pythonQuestions[currentSectionIndex];
  const currentQuestion = currentSection.questions[currentQuestionIndex];

  const handleAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Check if selected option is correct
    if (selectedOption === currentQuestion.answer) {
      setCorrectAnswers(correctAnswers + 1);
    }

    // Check if there are more questions in the current section
    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
    } else if (currentSectionIndex < pythonQuestions.length - 1) {
      // Move to the next section if available
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentQuestionIndex(0);
      setSelectedOption('');
    } else {
      // All questions answered, navigate to the results page
      const score = correctAnswers;
      const total = pythonQuestions.reduce((acc, section) => acc + section.questions.length, 0);
      router.push(`/assessment-results?score=${score}&total=${total}`);
    }
  };

  // Calculate progress percentage
  const totalQuestions = pythonQuestions.reduce((acc, section) => acc + section.questions.length, 0);
  const answeredQuestions =
    pythonQuestions
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
        className="w-full max-w-2xl"
      >
        {!showResult ? (
       <div className="w-full sm:w-100 lg:w-100 xl:w-100">
       <Quiz
         question={currentQuestion.question}
         options={currentQuestion.options}
         handleAnswer={handleAnswer}
         selectedOption={selectedOption}
         setSelectedOption={setSelectedOption}
       />
     </div>
        ) : (
          <div className="w-full h-full" style={{ width: '80%' }}>
            {/* Render loading state or other content */}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PythonQuizPage;
