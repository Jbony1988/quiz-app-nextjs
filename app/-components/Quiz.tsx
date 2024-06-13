import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizProps {
  question: string;
  options: string[]; // Assuming options are strings
  handleAnswer: (event: React.MouseEvent<HTMLButtonElement>) => void;
  selectedOption: string | null; // Assuming selectedOption can be null
  setSelectedOption: (option: string) => void; // Adjust the type based on the actual function signature
}


const Quiz: React.FC<QuizProps> = ({ question, options = [], handleAnswer, selectedOption, setSelectedOption }) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={question} // Ensure a unique key for each question
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full" // Widen the quiz container
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">{question}</h2>
        <div className="grid gap-4">
          {options && options.map((option, index) => (
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
          <button
            onClick={handleAnswer}
            disabled={!selectedOption} // Disable button if no option is selected
            className={`bg-blue-500 text-white px-6 py-3 rounded ${!selectedOption ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Submit Answer
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Quiz;
