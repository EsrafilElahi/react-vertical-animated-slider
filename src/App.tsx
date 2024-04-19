import VerticalAnimatedCarousel from "./components/VerticalAnimatedCarousel";

const CardItem = ({ card }) => {
  return (
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
        <VerticalAnimatedCarousel data={data} CardItem={CardItem} />
      </div>
    </div>
  );
}

export default App;
