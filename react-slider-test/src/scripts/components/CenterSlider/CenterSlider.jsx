import React, {useState} from 'react';
import Slider from 'react-slick'

export const CenterSlider = ({
  slides,
  handleSetView,
  activeView,
  content
}) => {
  const [prevView, setPrevView] = useState(slides.length - 1)
  const [nextView, setNextView] = useState(1)

  const PrevArrow = ({ onClick }) => (
    <div className="center-slider__prev js-fill-pointer-circle" style={{backgroundImage: `url(${slides[prevView]})`}}
         onClick={() => {
           onClick()
         }}>
      <div className="center-slider__prev__animation-block" />
    </div>
  )

  const NextArrow = ({ onClick }) => (
    <div className="center-slider__next js-fill-pointer-circle" style={{backgroundImage: `url(${slides[nextView]})`}} onClick={() => {
      onClick()
    }}>
      <div className="center-slider__next__animation-block" />
    </div>
  )

  const config = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,
    afterChange: (index) => {
      document.body.classList.remove('is-animating')
    },
    beforeChange: (oldIndex, newIndex) => {
      document.body.classList.add('is-animating')
      newIndex + 1 > 4 ? setNextView(0) : setNextView(newIndex + 1)
      newIndex - 1 < 0 ? setPrevView(4) : setPrevView(newIndex - 1)
      handleSetView(newIndex)
    },
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  }

  return (
    <React.Fragment>
      <div className="center-slider">
        <Slider {...config}>
          {slides && slides.map((slide, index) => {
            return (
              <div key={index} className="center-slider__slide">
                <div className="center-slider__image" style={{backgroundImage: `url(${slide})`}} alt=""/>
                <div className="center-slider__content">
                  <div className="center-slider__content__item">
                    <h1 className="title" dangerouslySetInnerHTML={{__html: content}}/>
                  </div>
                  <div className="center-slider__content__item">
                    <h1 className="title-transparent" dangerouslySetInnerHTML={{__html: content}}/>
                    <div className="center-slider__number">
                      {index + 1} / {slides.length}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </React.Fragment>
  )
}