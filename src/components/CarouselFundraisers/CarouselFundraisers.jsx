import React, { useEffect } from "react";
import style from "./carouselFundraisers.module.css";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { loadFundraisings } from "../../redux/features/fundraising";
import FundraisingCardRender from "../FundraisingCard/FundraisingCardRender";

const CarouselFundraisers = () => {
  const fundraisings = useSelector((state) => state.fundraising.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFundraisings());
  }, [dispatch]);
  return (
    <div className={style.carouselFundraisersPosition}>
      <div className={style.carouselFundraisersTitle}>Сборы</div>
      <div className={style.carouselFundraisersSize}>

      <Carousel
        variant="dark"
        interval="3000"
        controls={false}
        indicators={true}
        wrap={true}
      >
        {fundraisings.map((item, index) => {
          return (
              <Carousel.Item key={index}>
                <FundraisingCardRender
                  image={item.image}
                  title={item.title}
                  amount={item.amount}
                  description={item.description}
                  key={index}
                />
              </Carousel.Item>
          );
        })}
      </Carousel>
      </div>
    </div>
  );
};

export default CarouselFundraisers;
