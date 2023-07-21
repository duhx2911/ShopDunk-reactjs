import React from "react";
import { Carousel } from "antd";
import { styled } from "styled-components";
import { LeftOutlined } from "@ant-design/icons";
import { RightOutlined } from "@ant-design/icons";

const Banner = () => {
  return (
    <Carousel
      autoplay
      arrows={true}
      draggable
      prevArrow={<LeftOutlined />}
      nextArrow={<RightOutlined />}
    >
      <div>
        <ImgBanner src="images/banner/banner_mac.jpeg" alt="" />
      </div>
      <div>
        <ImgBanner src="images/banner/banner_watch.png" alt="" />
      </div>
      <div>
        <ImgBanner src="images/banner/ipad_gen9.png" alt="" />
      </div>
      <div>
        <ImgBanner src="images/banner/iphone_14_pro_max.png" alt="" />
      </div>
      <div>
        <ImgBanner src="images/banner/mac_air.jpeg" alt="" />
      </div>
    </Carousel>
  );
};
const ImgBanner = styled.img`
  width: 100%;
`;

export default Banner;
