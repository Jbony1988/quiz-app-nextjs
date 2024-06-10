import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Quiz = ({ question, options, handleAnswer, selectedOption, setSelectedOption }) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={question} // Ensure a unique key for each question
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">{question}</h2>
        <div className="grid gap-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(option)}
              className={`p-4 rounded hover:bg-gray-300 ${
                selectedOption === option ? 'bg-gray-200' : ''
              } text-gray-800 text-left w-full`} // Align options to the left
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex justify-center mt-8"> {/* Center the submit button */}
          <button onClick={handleAnswer} className="bg-blue-500 text-white px-6 py-3 rounded">
            Submit Answer
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Quiz;
