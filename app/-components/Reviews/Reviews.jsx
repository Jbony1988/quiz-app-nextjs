import React from 'react';
import Image from "next/image";

const Reviews = ({width, height, className, src, review, reviewer, sharedClasses}) => {
  return (
    <div className={`${sharedClasses} bg-gray-200 flex flex-col p-4`}>
    <p className="text-lg font-bold">{reviewer}</p>
    <p className="text-zinc-600 dark:text-zinc-500 mb-4 mt-4">
      {review}
    </p>
    <Image
      width={width}
      height={height}
      className={className}
      src={src}
      alt="profile-pic"
    />
  </div>
  
  )
}

export default Reviews