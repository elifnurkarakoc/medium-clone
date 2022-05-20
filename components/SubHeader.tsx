import React from "react";

const SubHeader = () => {
  return (
    <div>
      <div className="flex items-center justify-between bg-yellow-400 border-y  border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">Stay curious.</h1>
          <h2>
            Discover stories, thinking, and expertise from writers on any topic.
          </h2>
        </div>
        <img
          className="hidden md:inline-flex h-32 lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt="medium-icon"
        />
      </div>
    </div>
  );
};

export default SubHeader;
