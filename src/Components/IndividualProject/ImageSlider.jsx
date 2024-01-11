import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const ImageSlider = ({ imageArray }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageArray?.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="w-full h-full  md:pl-24 ">
      <div className="image-container">
        <img
          src={imageArray?.[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="h-[35vh] sm:h-[60vh] w-full object-cover"
        />
      </div>
      <div className="dots-container">
        {imageArray?.map((_, index) => (
          <span
            key={index}
            className={index === currentImageIndex ? "active-dot" : "dot"}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <div className="flex w-full justify-between items-center px-10 mt-4 ">
        <LeftCircleOutlined onClick={handlePrev} />
        <div className="flex gap-4 justify-center items-center">
          {imageArray?.map((url, index) => {
            return (
              <div
                className={`p-1 w-[3rem]  ${
                  index === currentImageIndex ? "border-2" : "cursor-pointer"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img src={url} alt="" />
              </div>
            );
          })}
        </div>
        <RightCircleOutlined onClick={handleNext} />
      </div>
    </div>
  );
};

export default ImageSlider;
