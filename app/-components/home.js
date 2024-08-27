import React from "react";
import Link from "next/link";
import Button from "./Button/Button";
import Image from "next/image";
import HeroImage from "../assets/developer-8829711_1280.jpg";
import AboutUs from "../assets/man-2562325_1280.jpg";
import ReviewPic from "../assets/anna-pic.jpg";
import ReviewPicTwo from "../assets/darrius-pic.jpeg";
import ReviewPicThree from "../assets/imani-pic.jpeg";
import Review from "../-components/Reviews/Reviews";
import CourseBlocks from "../-components/Course-Block/CourseBlock";

const sharedClasses = {
  textColor: "text-zinc-900 dark:text-black",
  button:
    "bg-black text-white py-2 px-6 rounded-full shadow-lg hover:bg-gray-800 transition duration-300",
  card: "p-6 rounded-lg shadow-lg",
};

const Home = () => {
  return (
    <>
      <div className={`py-10 mt-16 sm:mt-32`}>
        <div className="container mx-auto px-6 md:px-12 grid gap-12 lg:grid-cols-2 lg:py-24">
          <div>
            <h1
              className={`${sharedClasses.textColor} text-4xl font-bold leading-tight  md:text-center lg:text-left sm:text-center`}
            >
              Invest in <br className="hidden md:block" /> Your Future{" "}
              <br className="hidden md:block" />{" "}
              <span className="text-orange-500">Learn How to Code</span>
            </h1>
            <p className="mt-4 text-zinc-600 dark:text-zinc-500  md:text-center lg:text-left sm:text-center">
              Our e-learning programs have been developed to be a vehicle of
              delivering multimedia learning solutions to take your skills to
              the next level.
            </p>
            <div className="mt-6 flex justify-center sm:items-center lg:justify-start ">
              {/* Centering on small screens, maintaining space-x-4 for larger screens */}
              <Button className={sharedClasses.button} />
            </div>
          </div>
          <div className="relative lg:ml-12">
            <Image
              width="400"
              height="400"
              className="w-full max-w-md mx-auto"
              src={HeroImage}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-4 mb-8">
        <h2
          className={`${sharedClasses.textColor} text-3xl font-bold text-center`}
        >
          Python Course Coming Soon
        </h2>
        <div className="mt-8 flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center max-w-6xl w-full">
    <div className="text-left">
      <h2 className="text-2xl font-bold mb-4">Your Headline Here</h2>
      <p className="text-gray-600">
        Your text content goes here. You can add multiple paragraphs or other elements as needed.
      </p>
    </div>
    <div className="flex justify-center sm:justify-end">
      <img 
        src="/path-to-your-image.jpg" 
        alt="Description of the image" 
        className="max-w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
          {/* Left Column (Image) */}
          <div className="md:w-1/2 mb-4 md:mb-0">
            <Image
              width={400}
              height={300}
              className="w-full max-w-full md:max-w-md mx-auto"
              src={AboutUs}
              alt="About Us Image"
            />
          </div>

          {/* Right Column (Text Content) */}
          <div className="md:w-1/2 md:ml-4">
            <h2 className={`${sharedClasses.textColor} text-2xl font-bold`}>
              About Us
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-500">
              We are dedicated to providing high-quality e-learning programs
              that empower individuals to achieve their career goals. Our
              courses are designed to be engaging, informative, and accessible
              to everyone.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className={`${sharedClasses.textColor} text-2xl font-bold`}>
            Reviews
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Review
              review={
                '"Overall, the content is incredibly valuable and beneficial. Techluminate provides the assistance I require, and I am optimistic about successfully completing this course."'
              }
              reviewer={"Anna Moseley"}
              src={ReviewPic}
              sharedClasses={sharedClasses.card}
              width={40}
              height={40}
              className={"w-10 h-10 rounded-full mt-auto"}
            />
            <Review
              review={
                '"I have learned so much more than a 4 year college ever could. I highly recommend taking instructor Jerry’s course.!"'
              }
              reviewer={"Darius Montgomery"}
              src={ReviewPicTwo}
              sharedClasses={sharedClasses.card}
              width={40}
              height={40}
              className={"w-10 h-10 rounded-full mt-auto"}
            />
            <Review
              review={
                " “Jerry’s course is phenomenal! I now understand so much more about web development & I feel more confident about completing my sites.”"
              }
              reviewer={"Imani"}
              src={ReviewPicThree}
              sharedClasses={sharedClasses.card}
              width={40}
              height={40}
              className={"w-10 h-10 rounded-full mt-auto"}
            />
          </div>
        </div>
      </div>

      <footer className="bg-blue-100 dark:bg-zinc-800 py-4">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-zinc-700 dark:text-zinc-300">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
