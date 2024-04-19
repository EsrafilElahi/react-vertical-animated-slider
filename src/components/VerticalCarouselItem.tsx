import styles from "../VerticalAnimatedCarousel.module.css";

const VerticalCarouselItem = (props) => {
  const { card } = props;

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
          <span className="text-primary text-sm">{card?.id}</span>
          <span className="text-lg text-black">{card?.name}</span>
        </div>
      </div>
    </div>
  );
};

export default VerticalCarouselItem;
