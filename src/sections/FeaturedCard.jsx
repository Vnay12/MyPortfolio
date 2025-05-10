import React from "react";
import { abilities } from "../constants";

const FeaturedCard = () => {
  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="size-14 flex items-center justify-center rounded-full bg-light-gray-2 w-16 h-16">
              <img src={imgPath} alt={title} className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCard;
