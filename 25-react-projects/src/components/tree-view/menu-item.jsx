import { useState, useEffect } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState(false);

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren(!displayCurrentChildren);
  }

  useEffect(() => {
    console.log(displayCurrentChildren);
  }, [displayCurrentChildren]);

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span
            onClick={() => {
              handleToggleChildren(item.label);
            }}
          >
            {displayCurrentChildren ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
