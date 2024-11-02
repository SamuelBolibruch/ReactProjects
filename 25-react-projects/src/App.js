import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import "./App.css";

function App() {
  return (
    <>
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating numberOfStars={10}/> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={1} />
    </>
  );
}

export default App;
