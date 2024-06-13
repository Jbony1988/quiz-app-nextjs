'use client'
import React from 'react';
import Link from "next/link";



export default function Home() {


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Link href='/python-quiz'>
    
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded"
   
      >
        Start Python Quiz
      </button>
      </Link>
    </div>
  );
}
