import Link from 'next/link';
import { motion } from 'framer-motion';

export default function QuizResult({ correctAnswers, totalQuestions, onRestart }) {
  // Calculate the score percentage
  const percentageCorrect = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }} // Use easeInOut for smooth transition
      className="text-center max-w-lg mx-auto" // Widen the result component
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Result</h1>
      <div className="bg-white p-8 rounded-lg shadow-md flex justify-between"> {/* Increased padding for a wider result box */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Score: {percentageCorrect}%</h2>
          <p className="text-lg text-gray-700 mb-4">
            You got {correctAnswers} out of {totalQuestions} questions correct.
          </p>
          <button
            onClick={onRestart}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors mr-4"
          >
            Restart Quiz
          </button>
        </div>
        {/* Link to the home page */}
        <Link href="/">
          <button className="bg-blue-500 text-white px-6 py-3 rounded">Back to Home</button>
        </Link>
      </div>
    </motion.div>
  );
}
