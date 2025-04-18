import "./App.css";
import RandomColor from "./components/02-randomColor/RandomColor";
import ImageSlider from "./components/03-image-slider/ImageSlider";
import StarRating from "./components/03-starRating/StarRating";
import Accordian from "./components/accordian/Accordian";

function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numOfStars={10} /> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={5} />
    </>
  );
}

export default App;
