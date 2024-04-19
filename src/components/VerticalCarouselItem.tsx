import React from "react";
import styles from "../VerticalAnimatedCarousel.module.css";
import "dist/styles.css";

interface Props {
  card: unknown;
  children: (card: unknown) => React.ReactNode;
}

const VerticalCarouselItem = (props: Props) => {
  const { card, children } = props;

  return <div className={`${styles.card}`}>{children(card)}</div>;
};

export default VerticalCarouselItem;
