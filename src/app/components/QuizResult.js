// QuizResult.js
import { motion } from 'framer-motion';

export default function QuizResult({ correctAnswers, totalQuestions, onRestart }) {
  const score = correctAnswers * 10;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="text-center max-w-md mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Result</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Your Score: {score}/{totalQuestions * 10}</h2>
        <p className="text-lg text-gray-700 mb-4">
          You got {correctAnswers} out of {totalQuestions} questions correct.
        </p>
        <button
          onClick={onRestart}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors"
        >
          Restart Quiz
        </button>
      </div>
    </motion.div>
  );
}
