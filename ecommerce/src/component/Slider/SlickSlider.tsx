import React from "react";
import Slider from "react-slick";
const SlickSlider = (arrImage: any) => {
  const listImg: Array<string> = arrImage.arrImage;
  let settings = {
    dots: false,
    centreMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div className="my-slick-slider">
      <Slider {...settings}>
        {listImg.map((image: any) => {
          return (
            <div className="thumb-img">
              <img src={image} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default SlickSlider;
