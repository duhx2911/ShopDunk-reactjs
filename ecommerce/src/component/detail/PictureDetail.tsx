import SlickSlider from "./../Slider/SlickSlider";
import slider1 from "./../../assets/images/Iphone/iphone-14-128gb.png";
import slider2 from "./../../assets/images/Iphone/iphone-14-plus-128gb.png";
import slider3 from "./../../assets/images/Iphone/iphone-14-pro-128gb.png";
import PreviewPicture from "./../Slider/PreviewPicture";
const PictureDetail = () => {
  const arrImg: Array<string> = [
    slider1,
    slider2,
    slider3,
    slider1,
    slider2,
    slider3,
    slider1,
    slider2,
    slider3,
  ];
  // console.log(typeof arrImg);
  return (
    <div className="picture-details gallery-sticky">
      <div className="gallery">
        <div className="picture">
          <PreviewPicture />
        </div>
        <SlickSlider arrImage={arrImg} />
      </div>
    </div>
  );
};
export default PictureDetail;
