import { Button as AButton } from "esrafil-btn-component";
import { Button } from "./components/Button";
import VerticalCarousel from "./components/VerticalCarousel";

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
      id: 4,
      name: "name 4",
    },
    {
      id: 4,
      name: "name 4",
    },
    {
      id: 4,
      name: "name 4",
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex justify-center flex-col gap-10">
        <div className="w-[30rem] mx-auto">
          <VerticalCarousel data={data} />
        </div>
        <div>
          <Button onClick={() => console.log("clicked me!")}>click me</Button>
          <AButton onClick={() => console.log("AButton clicked me!")}>
            click me
          </AButton>
        </div>
      </div>
    </div>
  );
}

export default App;
