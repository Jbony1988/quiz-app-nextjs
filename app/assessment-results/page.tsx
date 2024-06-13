import React from 'react';

const cardContainerClasses = "flex flex-col md:flex-row bg-zinc-100 p-6 rounded-lg shadow-lg max-w-4xl mx-auto";
const resultCardClasses = "bg-gradient-to-b from-purple-500 to-blue-500 text-white p-6 rounded-lg flex-1 mb-6 md:mb-0 md:mr-6";
const summaryCardClasses = "bg-white p-6 rounded-lg flex-1";
const statCardClasses = "flex justify-between items-center p-4 rounded-lg";
const statIconClasses = "flex items-center";

const ResultCard = () => {
  return (
    <div className={resultCardClasses}>
      <h2 className="text-lg font-semibold mb-4">Your Result</h2>
      <div className="flex flex-col items-center justify-center h-32 w-32 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full mx-auto mb-4">
        <span className="text-6xl font-bold">76</span>
        <span className="text-sm">of 100</span>
      </div>
      <h3 className="text-2xl font-semibold mt-4 text-center" >Great</h3>
      <p className="mt-2 text-center">You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  );
};

const SummaryCard = () => {
  return (
    <div className={summaryCardClasses}>
      <h2 className="text-lg font-semibold mb-4">Summary</h2>
      <div className="space-y-4">
        <div className={statCardClasses + " bg-red-100"}>
          <span className={statIconClasses + " text-red-500"}>
            <img aria-hidden="true" alt="reaction" src="https://placehold.co/20x20" className="mr-2" />
           Beginner
          </span>
          <span className="text-red-500">80 / 100</span>
        </div>
        <div className={statCardClasses + " bg-yellow-100"}>
          <span className={statIconClasses + " text-yellow-500"}>
            <img aria-hidden="true" alt="memory" src="https://placehold.co/20x20" className="mr-2" />
           Intermediate
          </span>
          <span className="text-yellow-500">92 / 100</span>
        </div>
        <div className={statCardClasses + " bg-green-100"}>
          <span className={statIconClasses + " text-green-500"}>
            <img aria-hidden="true" alt="verbal" src="https://placehold.co/20x20" className="mr-2" />
       Advanced
          </span>
          <span className="text-green-500">61 / 100</span>
        </div>

      </div>
      <button className="mt-6 bg-zinc-800 text-white py-2 px-4 rounded-lg w-full">Continue</button>
    </div>
  );
};

const ResultPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className={cardContainerClasses}>
        <ResultCard />
        <SummaryCard />
      </div>
    </div>
  );
};

export default ResultPage;
