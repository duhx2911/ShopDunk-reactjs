import PreviewPicture from "./../Slider/PreviewPicture";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import useFetch from "../../customize/useFetch";
import useFetchCategory from "../../customize/useFetchCategory";
import store from "../../stores";
import {
  getCategory,
  getListCategory,
  getListImagePrd,
} from "../../stores/actions/actionReducers";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFetchSingle from "../../customize/useFetchSingle";
const PictureDetail = (props: any) => {
  let cateItem: string;
  const { productSlug } = useParams();
  const { data: product } = useFetchSingle(
    `http://localhost:8080/${productSlug}`
  );
  const dataRedux: any = useSelector((state) => state);
  const dataImage = dataRedux?.imageProductReducer?.images || [];
  const dataCategory = dataRedux?.categoryReducer?.categories;
  const fetchData = () => {
    store.dispatch(getListImagePrd());
    store.dispatch(getListCategory());
  };
  useEffect(() => {
    fetchData();
  }, []);
  dataCategory.map(
    (item: {
      cate_id: number;
      cate_name: string;
      slug: string;
      folder: string;
    }) => {
      if (item.cate_id === product.cate_id) cateItem = item.folder;
    }
  );
  const [mainImg, setMainImg] = useState(`/images/Image-detail.png`);
  useEffect(() => {
    if (dataImage && dataImage.length) {
      setMainImg(`/images/Iphone/details/${dataImage[0].imgDetail}`);
    }
  }, [dataImage]);
  let settings = {
    dots: false,
    centreMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };
  return (
    <div className="picture-details gallery-sticky">
      <div className="gallery">
        <div className="picture">
          <PreviewPicture imgPreview={mainImg} />
        </div>
        <div className="my-slick-slider">
          <Slider {...settings}>
            {dataImage.map(
              (image: {
                id: number;
                product_id: number;
                imgDetail: string;
              }) => {
                if (image.product_id === product.id) {
                  return (
                    <div className="thumb-img">
                      <img
                        src={`/images/${cateItem}/details/${image.imgDetail}`}
                        onClick={() =>
                          setMainImg(
                            `/images/${cateItem}/details/${image.imgDetail}`
                          )
                        }
                        alt=""
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  );
                }
              }
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default PictureDetail;
