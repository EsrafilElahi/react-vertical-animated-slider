import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styles from "../VerticalCarousel.module.css";

const VerticalCarousel = (props) => {
  const {
    data,
    containerClassName = "",
    behindCardSpace = 1.4,
    maxBehindCardVisibility = 2,
    CardItem,
  } = props;

  const count = data?.length;
  const [active, setActive] = useState(count - 1);

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
        {data
          ?.slice(0)
          ?.reverse()
          ?.map((card, i) => (
            <div
              key={i}
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
                } as unknown
              }
            >
              <CardItem hasCard={count} id={card.id} card={card} />
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
