import VerticalAnimatedCarousel from "./components/VerticalAnimatedCarousel";
import styles from "./CardItem.module.css";

const CardItem = ({ card }) => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.imageContainer}>
        <img
          src={"https://fakeimg.pl/300/"}
          alt="user"
          className={styles.image}
        />
      </div>

      <div className={styles.textContainer}>
        <span className={styles.id}>{card?.id}</span>
        <span className={styles.name}>{card?.name}</span>
      </div>
    </div>
  );
};

function App() {
  const data = [
    {
      id: 1,
      name: "name 1",
    },
    {
      id: 2,
      name: "name 2",
    },
    {
      id: 3,
      name: "name 3",
    },
    {
      id: 4,
      name: "name 4",
    },
    {
      id: 5,
      name: "name 5",
    },
    {
      id: 6,
      name: "name 6",
    },
    {
      id: 7,
      name: "name 7",
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="w-[30rem] mx-auto">
        <VerticalAnimatedCarousel
          data={data}
          CardItem={CardItem}
          containerStyle={{ height: "10rem" }}
          carouselStyle={{ height: "10rem" }}
          cardItemStyle={{ height: "10rem", padding: "1rem" }}
        />
      </div>
    </div>
  );
}

export default App;
