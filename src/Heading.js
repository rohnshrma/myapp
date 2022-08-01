import React from "react";
import "./Heading.css"

const Head = (props) => {


    console.log(props)

  return (
    <div className="headingBox">
    <img src={props.imgSrc} alt="" />
      <h1 className="title">{props.title}</h1>
      <p >{props.content} </p>
    </div>
  );
};

export default Head;
