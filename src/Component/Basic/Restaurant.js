import React from "react";
import "./Style.scss";
import Menu from "./menuApi";
import { useState } from "react";
import MenuCard from "./MenuCard";
import Nav from "./Nav";
import img from "../../assets/image.jpg";
const categoryList = [
  ...new Set(
    Menu.map((current) => {
      return current.category;
    })
  ),
  "All",
];

const Restaurant = () => {
  const [state, setState] = useState(Menu);

  const filterItem = (category) => {
    if (category === "All") {
      setState(Menu);
      return;
    }

    const item = Menu.filter((curEle) => {
      return curEle.category === category;
    });
    setState(item);
  };
  const handleClick = () => {
    console.log("See, You can make a div clickable");
  };

  return (
    <>
      <Nav filterItem={filterItem} categoryList={categoryList} />
      <MenuCard state={state} />
      <div
        onClick={handleClick}
        style={{
          width: "20%",
          marginLeft: "20%",
          marginBottom: "20%",
          padding: "20px",
          background: "#ebebeb",
        }}
      >
        Click Men and see Console
      </div>
    </>
  );
};

export default Restaurant;
