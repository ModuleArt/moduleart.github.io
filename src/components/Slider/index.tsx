import { FunctionComponent } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Props from "./Props";
import "./index.scss";

const Slider: FunctionComponent<Props> = ({ images, labels = [] }) => {
  return (
    <div className="slider">
      <Carousel
        className="slider__carousel"
        infiniteLoop
        dynamicHeight
        autoFocus
        showStatus={false}
        showIndicators={false}
        renderArrowNext={(clickHandler) => {
          return (
            <button
              className="slider__arrow slider__arrow--next"
              onClick={clickHandler}
            >
              Next
            </button>
          );
        }}
        renderArrowPrev={(clickHandler) => {
          return (
            <button
              className="slider__arrow slider__arrow--prev"
              onClick={clickHandler}
            >
              Prev
            </button>
          );
        }}
      >
        {images.map((image, imageIndex) => {
          return (
            <div className="slider__slide" key={imageIndex}>
              <img
                className="slider__image"
                src={image}
                alt={labels[imageIndex] ? labels[imageIndex] : ""}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
