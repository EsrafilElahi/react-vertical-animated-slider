import React from "react";
import styles from "../VerticalAnimatedCarousel.module.css";

interface Props {
  card: unknown;
  cardItemClassName?: string | React.CSSProperties;
  children: (card: unknown) => React.ReactNode;
}

const VerticalCarouselItem = (props: Props) => {
  const { card, children, cardItemClassName } = props;

  return (
    <div className={`${styles.card} ${cardItemClassName}`}>
      {children(card)}
    </div>
  );
};

export default VerticalCarouselItem;
