import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreButton from "./components/load-more-button";
import TreeView from "./components/tree-view";
import QrCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";

import "./App.css";
import menus from "./components/tree-view/data";

function App() {
  return (
    <>
      {/* <Accordian/> */}
      <RandomColor />
      {/* <StarRating numberOfStars={10}/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={1} /> */}
      {/* <LoadMoreButton/> */}
      {/* <TreeView menus={menus}/> */}
      {/* <QrCodeGenerator/> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}
      {/* <TabTest/> */}
    </>
  );
}

export default App;
