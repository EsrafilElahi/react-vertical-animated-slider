/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import RightArrowIcon from "./RightArrowIcon";
import LeftArrowIcon from "./LeftArrowIcon";
import VerticalCarouselItem from "./VerticalCarouselItem";
import styles from "../VerticalAnimatedCarousel.module.css";

interface Props {
  data: unknown;
  CardItem: React.ComponentType<{ card: unknown }>;
  containerClassName?: string | React.CSSProperties;
  carouselClassName?: string | React.CSSProperties;
  cardItemClassName?: string | React.CSSProperties;
  behindCardSpace?: number;
  maxBehindCardVisibility?: number;
  startFromRight?: boolean;
}

const VerticalAnimatedCarousel: React.FC<Props> = (props) => {
  const {
    data,
    containerClassName = "",
    carouselClassName = "",
    cardItemClassName = "",
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
    <div className={`${styles.container} ${containerClassName}`}>
      <span
        className={`${styles.iconsLeft} ${
          active > 0 ? styles.visible : styles.invisible
        }`}
        onClick={() => setActive((i) => i - 1)}
      >
        <LeftArrowIcon className={styles.arrowIcons} />
      </span>

      <div className={`${styles.carousel} ${carouselClassName}`}>
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
            <VerticalCarouselItem
              card={card}
              cardItemClassName={cardItemClassName}
            >
              {(card: any) => <CardItem card={card} />}
            </VerticalCarouselItem>
          </div>
        ))}
      </div>
      <span
        className={`${styles.iconsRight} ${
          active < count - 1 ? styles.visible : styles.invisible
        }`}
        onClick={() => setActive((i) => i + 1)}
      >
        <RightArrowIcon className={styles.arrowIcons} />
      </span>
    </div>
  );
};

export default VerticalAnimatedCarousel;
