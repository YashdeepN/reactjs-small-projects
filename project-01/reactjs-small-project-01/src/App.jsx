import "./App.css";
import RandomColor from "./components/02-randomColor/RandomColor";
import ImageSlider from "./components/04-image-slider/ImageSlider";
import StarRating from "./components/03-starRating/StarRating";
import Accordian from "./components/accordian/Accordian";
import LoadMoreData from "./components/05-loadMoreData/LoadMoreData";

function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numOfStars={10} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} /> */}
      <LoadMoreData />
    </>
  );
}

export default App;
