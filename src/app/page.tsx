import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Link href="/python-quiz">
          <button className="bg-blue-500 text-white px-6 py-3 rounded">Python Quiz</button>
        </Link>
        <Link href="/javascript-quiz">
          <button className="bg-blue-500 text-white px-6 py-3 rounded">JavaScript Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
