import React from 'react';

const sharedClasses = {
  textCenter: 'text-center',
  textZincLight: 'text-zinc-600 dark:text-zinc-400',
  textZincDark: 'text-zinc-900 dark:text-zinc-100',
  mxAuto: 'mx-auto',
  roundedFull: 'rounded-full',
  spaceY: 'space-y-6',
};

const AboutUs = () => {
  return (
    <>
      <div
        className="py-10 mt-16 sm:mt-32"
        style={{marginTop: 100}}
      >
        <div className="container mx-auto px-6 md:px-12 grid gap-12 lg:grid-cols-2 lg:py-24">
          <div>
            <h1 className="text-4xl font-bold leading-tight">
              About Us
            </h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-500">
              Our e-learning programs have been developed to be a vehicle of delivering multimedia
              learning solutions to take your skills to the next level.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <button className="bg-purple-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-purple-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative lg:ml-12">
            <img
              className="w-full max-w-md mx-auto"
              src="https://placehold.co/400x400"
              alt="Hero Image"
            />
            <div className="absolute top-0 right-0 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-bold text-zinc-900 dark:text-white">175K</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-300">Assisted Students</p>
            </div>
            <div className="absolute bottom-0 left-0 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-bold text-zinc-900 dark:text-white">Learning Chart</p>
              <img className="mt-2" src="https://placehold.co/100x50" alt="Learning Chart" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-4 mb-8">
        <h2 className="text-2xl font-bold">Browse Top Coding Languages</h2>
        <div className="mt-6 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-purple-500 text-white text-center p-6 rounded-lg">
              <p className="text-lg font-bold">JavaScript</p>
            </div>
            <div className="bg-blue-500 text-white text-center p-6 rounded-lg">
              <p className="text-lg font-bold">Python</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button className="bg-purple-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-purple-600 transition duration-300">
            Browse All
          </button>
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
          {/* Left Column (Image) */}
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              className="w-full max-w-full md:max-w-md mx-auto"
              src="https://placehold.co/400x300"
              alt="About Us Image"
            />
          </div>
          {/* Right Column (Text Content) */}
          <div className="md:w-1/2 md:ml-4">
            <h2 className="text-2xl font-bold">About Us</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-500">
              We are dedicated to providing high-quality e-learning programs that empower individuals to achieve their career goals.
              Our courses are designed to be engaging, informative, and accessible to everyone.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-blue-100 dark:bg-zinc-800 py-4">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-zinc-700 dark:text-zinc-300">© 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default AboutUs;
