import React from 'react';

const TitleHeader2 = ({ title, sub, link }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge text-lg md:text-2xl">
        <p>{sub}</p>
      </div>

      {/* Title with arrow and link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 mt-7 ml-5 cursor-pointer underline text-blue-600 hover:opacity-80 transition-all text-2xl md:text-3xl font-semibold"
      >
        <span>{title}</span>
        <img
          src="/assets/arrow-up.png"
          alt="arrow"
          className="w-4 h-4 md:w-5 md:h-5"
        />
      </a>
    </div>
  );
};

export default TitleHeader2;
