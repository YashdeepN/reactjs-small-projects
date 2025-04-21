import "./App.css";
import RandomColor from "./components/02-randomColor/RandomColor";
import ImageSlider from "./components/04-image-slider/ImageSlider";
import StarRating from "./components/03-starRating/StarRating";
import Accordian from "./components/accordian/Accordian";
import LoadMoreData from "./components/05-loadMoreData/LoadMoreData";
import TreeView from "./components/06-treeView/TreeView";

// import menus from "./components/06-treeView/data.js";
import QrCodeGenerator from "./components/07-qr-generator/QrCodeGenerator.jsx";

function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numOfStars={10} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} /> */}
      {/* <LoadMoreData /> */}

      {/* <TreeView menus={menus} /> */}
      <QrCodeGenerator />
    </>
  );
}

export default App;
