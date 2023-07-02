import React, { useState } from "react";
import ImageItem from "./ImageItem";
import "../App.css";

function ImageList({ imageHolder }) {
  return (
    <div className="imgContainer">
      <ImageItem images={imageHolder} />
    </div>
  );
}

export default ImageList;
