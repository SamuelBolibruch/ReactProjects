import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreButton from "./components/load-more-button";
import TreeView from "./components/tree-view";
import "./App.css";
import menus from "./components/tree-view/data";

function App() {
  return (
    <>
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating numberOfStars={10}/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={1} /> */}
      {/* <LoadMoreButton/> */}
      <TreeView menus={menus}/>
      
    </>
  );
}

export default App;
