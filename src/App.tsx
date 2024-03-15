import "./App.css";
import { Button as AButton } from "esrafil-btn-component";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <Button onClick={() => console.log("clicked me!")}>click me</Button>
      <AButton onClick={() => console.log("AButton clicked me!")}>
        click me
      </AButton>
    </>
  );
}

export default App;
