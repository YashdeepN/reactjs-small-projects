import "./App.css";
import RandomColor from "./components/02-randomColor/RandomColor";
import StarRating from "./components/03-starRating/StarRating";
import Accordian from "./components/accordian/Accordian";

function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      <StarRating numOfStars={10} />
    </>
  );
}

export default App;
