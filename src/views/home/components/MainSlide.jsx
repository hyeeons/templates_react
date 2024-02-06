import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Image } from "@chakra-ui/react";
import styled from "styled-components";

const MainSlide = () => {
  return (
    <>
      <SwiperWrap pagination={true} modules={[Pagination]} className="top-cont">
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1586783509992-bcfa7fe443b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="ddd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1493962621260-74cc5a3baf89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="dddsdd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1586783509992-bcfa7fe443b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="ddd"
          />
        </SwiperSlide>
      </SwiperWrap>
    </>
  );
};

const SwiperWrap = styled(Swiper)`
  img {
    display: block;
    height: 630px;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
export default MainSlide;
