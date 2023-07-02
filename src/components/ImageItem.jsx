import React from "react";

function ImageItem({ images }) {
  return (
    <div>
      {images.map((img, i) => {
        return <img key={i} src={img.urls.small} alt={img.alt_description} />;
      })}
    </div>
  );
}

export default ImageItem;
