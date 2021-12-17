import { React, useState } from "react";
import { useGetProductsQuery } from "../../services/eCommerceAPI";
import Slider from "react-slick";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "./Loading";

export default function HeroSlider() {
  const [imgIndex, setImgIndex] = useState(0);
  const { data, isLoading, error } = useGetProductsQuery();

  // const NextArrow = ({ onClick }) => {
  //   return (
  //     <div className="arrow next rounded-full " onClick={onClick}>
  //       <FaArrowRight />
  //     </div>
  //   );
  // };
  // const PrevArrow = ({ onClick }) => {
  //   return (
  //     <div className="arrow prev rounded-full" onClick={onClick}>
  //       <FaArrowLeft />
  //     </div>
  //   );
  // };

  const settings = {
    infinte: true,
    lazyLoad: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImgIndex(next),
  };

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>error happened</p>;
  }
  if (data) {
    return (
      <div className="w-full sm:w-9/12 my-8 mx-auto">
        <Slider {...settings}>
          {data.map((datum, index) => {
            return (
              <div className="rounded ">
                <Link to={`/products/${datum._id}`}>
                  <div
                    className={
                      index === imgIndex ? "slide activeSlide mb-8" : "slide"
                    }
                  >
                    <img
                      className="mx-auto h-16 sm:h-32 md:h-48 xl:h-72 2xl:h-96"
                      src={datum.image}
                      alt="Hot Deals"
                    />
                    <p className="text-center text-xs sm:text-sm md:text-lg font-thin p-1 ">
                      {datum.name}
                    </p>
                  </div>
                </Link>
                <div></div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
