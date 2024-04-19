import { Button as AButton } from "esrafil-btn-component";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex justify-center flex-col gap-10">
        <div>
          <span className="text-[#d0c]">asdasd</span>
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
