import { FC } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Props } from './Props'
import './index.scss'

export const Slider: FC<Props> = ({ images, labels = [] }) => {
  if (!images.length) return null

  if (images.length === 1) {
    return (
      <div className="slider">
        <div className="slider__slide">
          <img className="slider__image" src={images[0]} alt={labels[0] || ''} />
        </div>
      </div>
    )
  }

  return (
    <div className="slider">
      <Carousel
        className="slider__carousel"
        infiniteLoop
        dynamicHeight
        autoFocus
        showStatus={false}
        showIndicators={false}
        thumbWidth={64}
        renderArrowNext={(clickHandler) => {
          if (images.length <= 1) return null

          return (
            <button className="slider__arrow slider__arrow--next" onClick={clickHandler}>
              Next
            </button>
          )
        }}
        renderArrowPrev={(clickHandler) => {
          if (images.length <= 1) return null

          return (
            <button className="slider__arrow slider__arrow--prev" onClick={clickHandler}>
              Prev
            </button>
          )
        }}
      >
        {images.map((image, imageIndex) => {
          return (
            <div className="slider__slide" key={imageIndex}>
              <img className="slider__image" src={image} alt={labels[imageIndex] || ''} />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
