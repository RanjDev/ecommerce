import { React, useState } from "react";
import { useGetProductsQuery } from "../../services/eCommerceAPI";
import Slider from "react-slick";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    return <p>isLoading ...</p>;
  }
  if (error) {
    return <p>error happened</p>;
  }
  if (data) {
    return (
      <div className="w-3/4 m-4 mx-auto">
        <Slider {...settings}>
          {data.map((datum, index) => {
            return (
              <div className="rounded overflow-hidden">
                <Link to={`/products/${datum._id}`}>
                  <div
                    className={
                      index === imgIndex ? "slide activeSlide" : "slide"
                    }
                  >
                    <img src={datum.image} alt="Hot Deals" />
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
