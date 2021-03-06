import { Route } from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/Dafault.HOC";

// Components
import Temp from "./components/temp";

function App() {
  return (
      <>
        <DefaultHOC path="/" exact component={Temp} />
      </>
  );
}

export default App;
