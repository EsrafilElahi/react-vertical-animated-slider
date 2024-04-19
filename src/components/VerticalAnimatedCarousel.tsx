/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styles from "../VerticalAnimatedCarousel.module.css";

interface Props {
  data: unknown;
  CardItem: React.ComponentType<{ hasCard: number; card: unknown }>;
  containerClassName?: string;
  behindCardSpace?: number;
  maxBehindCardVisibility?: number;
  startFromRight?: boolean;
}

const VerticalAnimatedCarousel: React.FC<Props> = (props) => {
  const {
    data,
    containerClassName = "",
    behindCardSpace = 1.4,
    maxBehindCardVisibility = 2,
    CardItem,
    startFromRight = true,
  } = props;

  const count: number = Array.isArray(data) ? data.length : 0;
  const [active, setActive] = useState<number>(startFromRight ? 0 : count - 1);

  const sortedData: unknown[] = startFromRight
    ? Array.isArray(data)
      ? data
      : []
    : [...(Array.isArray(data) ? data : [])]?.reverse();

  return (
    <div
      className={`flex h-[8.5em] justify-between items-center gap-4 ${containerClassName}`}
    >
      <AiOutlineLeft
        className={`text-gray w-6 h-6 cursor-pointer ${
          active > 0 ? "visible" : "invisible"
        }`}
        onClick={() => setActive((i) => i - 1)}
      />
      <div className={styles.carousel}>
        {sortedData?.map((card: any, i) => (
          <div
            key={card?.id || i}
            className={styles.cardContainer}
            style={
              {
                "--active": i === active ? 1 : 0,
                "--offset": (active - i) / behindCardSpace,
                "--direction": Math.sign(active - i),
                "--absOffset": Math.abs(active - i) / 2,
                pointerEvents: active === i ? "auto" : "none",
                opacity:
                  Math.abs(active - i) >= maxBehindCardVisibility ? "0" : "1",
                display:
                  Math.abs(active - i) > maxBehindCardVisibility
                    ? "none"
                    : "block",
              } as React.CSSProperties
            }
          >
            <CardItem hasCard={count} card={card} />
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

export default VerticalAnimatedCarousel;
