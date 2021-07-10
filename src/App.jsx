import { Route } from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/Dafault.HOC";

// Components
import Temp from "./components/temp";

function App() {
  return (
    // <div className="App p-10">
    //   <h1 className="text-6xl">
    //     Hello People, welcome to Tailwind
    //   </h1>
    //   <h1 className="text-8xl hover:text-blue-500">
    //     Hello People, welcome to Tailwind
    //   </h1>

    //   <button className="border-2 px-2 py-1 border-blue-500 rounded bg-blue-500 text-white hover:bg-transparent hover:border-2 hover:text-blue-500 outline:none focus:outline-none focus:ring focus:border-blue-300">
    //     Hello Tailwind
    //   </button>
    // </div>

      <>
        <DefaultHOC path="/" exact component={Temp} />
      </>
  );
}

export default App;
