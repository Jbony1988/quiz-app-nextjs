import React from "react";

const CourseBlock = ({ sharedClasses, courseName, styles }) => {
  return (
    <div
      className={`${sharedClasses} ${styles}`}
    >
      <p className="text-2xl font-bold">{courseName}</p>
    </div>
  );
};

export default CourseBlock;
