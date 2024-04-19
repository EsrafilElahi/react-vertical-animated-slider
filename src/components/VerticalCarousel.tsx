import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styles from "../VerticalCarousel.module.css";
import VerticalCarouselItem from "./VerticalCarouselItem";

const MAX_VISIBILITY = 2;

const VerticalCarousel = (props) => {
  const { activeRequestsList } = props;

  const count = activeRequestsList?.length;
  const [active, setActive] = useState(count - 1);

  return (
    <div className="flex h-[8.5em] justify-between items-center gap-4">
      <AiOutlineLeft
        className={`text-gray w-6 h-6 cursor-pointer ${
          active > 0 ? "visible" : "invisible"
        }`}
        onClick={() => setActive((i) => i - 1)}
      />
      <div className={styles.carousel}>
        {activeRequestsList
          ?.slice(0)
          ?.reverse()
          ?.map((req, i) => (
            <div
              key={i}
              className={styles.cardContainer}
              style={
                {
                  "--active": i === active ? 1 : 0,
                  "--offset": (active - i) / 1.3,
                  "--direction": Math.sign(active - i),
                  "--absOffset": Math.abs(active - i) / 2,
                  pointerEvents: active === i ? "auto" : "none",
                  opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
                  display:
                    Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
                } as unknown
              }
            >
              <VerticalCarouselItem hasRequest={count} id={req.id} req={req} />
            </div>
          ))}
      </div>
      <AiOutlineRight
        className={`text-gray w-6 h-6 cursor-pointer ${
          active < count - 1 ? "visible" : "invisible"
        }`}
        onClick={() => setActive((i) => i + 1)}
      />
    </div>
  );
};

export default VerticalCarousel;
