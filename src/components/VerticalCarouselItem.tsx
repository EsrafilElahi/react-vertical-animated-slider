import React from "react";
import styles from "../VerticalAnimatedCarousel.module.css";

interface Props {
  card: unknown;
  cardItemClassName?: string;
  cardItemStyle?: React.CSSProperties;
  children: (card: unknown) => React.ReactNode;
}

const VerticalCarouselItem = (props: Props) => {
  const { card, children, cardItemClassName, cardItemStyle } = props;

  return (
    <div
      className={`${styles.card} ${cardItemClassName}`}
      style={cardItemStyle}
    >
      {children(card)}
    </div>
  );
};

export default VerticalCarouselItem;
