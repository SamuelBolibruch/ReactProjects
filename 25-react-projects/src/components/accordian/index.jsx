import { useState } from "react";
import data from "./data.js";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const handleMultiSelection = (currentId) => {
    let copyMultiple = [...multiple];
    const isPresented = copyMultiple.indexOf(currentId);

    if (isPresented === -1) {
      copyMultiple.push(currentId);
    } else {
      copyMultiple.splice(isPresented, 1);
    }

    setMultiple(copyMultiple);
    console.log(copyMultiple);
  };

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          console.log(!enableMultiSelection);
          return setEnableMultiSelection(!enableMultiSelection);
        }}
      >
        Toggle single/multi selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className="content">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="content">{item.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data present </div>
        )}
      </div>
    </div>
  );
}
