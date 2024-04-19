import React, { useState, useEffect } from "react";
import styles from "../VerticalCarousel.module.css";
import { BsChatLeft } from "react-icons/bs";

const VerticalCarouselItem = (props) => {
  const { req, hasRequest } = props;

  console.log("req inside carousel item :", req);

  const activeDot =
    "before:content-[''] before:w-3 before:h-3 before:p-1 before:bg-red before:rounded-[50%] before:top-3 before:left-4 before:absolute";

  return (
    <div
      className={`flex justify-between items-center shadow-lg cursor-pointer ${styles.card}`}
    >
      <div className="flex justify-start gap-3">
        <div className="w-[4em] h-[3.5em]">
          <img
            src={"https://fakeimg.pl/300/"}
            alt="user"
            className="rounded-md xs-only:w-full aspect-square !h-full"
          />
        </div>

        <div className="flex flex-col justify-between items-start">
          <span className="text-primary text-sm">{"department"}</span>
          <span className="text-lg text-black">{"userName"}</span>
        </div>
      </div>

      <div
        className={`flex justify-center items-center p-2 ml-2 bg-primary rounded-lg ${
          hasRequest && activeDot
        }`}
      >
        <BsChatLeft className="w-6 h-6 mt-[1px] text-white" />
      </div>
    </div>
  );
};

export default VerticalCarouselItem;
