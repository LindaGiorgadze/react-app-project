import TodoApp from "./TodoApp";
import Form from "./Form";
import Counter from "./Counter";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../themeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [data, setData] = useState([]);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://lindagiorgadze.github.io/FakeServer/products.json")
      .then((response) => response.json())
      .then((fetchedData) => setData(fetchedData.Products));
  }, []);
  // console.log('Data:', data);
  const {t} = useTranslation();
  const [inputValue, setInputValue] = useState(0);
  const [startValue, setStartValue] = useState();
  return (
    <div className="Home">
      <div className="Carousel">
        <h3>Carousel</h3>
        <Swiper
          spaceBetween={50}
          slidesPerView={3.5}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          cssMode={true}
          navigation={true}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          className="mySwiper"
        >
          <SwiperSlide> 1 </SwiperSlide>
          <SwiperSlide> 2 </SwiperSlide>
          <SwiperSlide> 3 </SwiperSlide>
          <SwiperSlide> 4 </SwiperSlide>
          <SwiperSlide> 5 </SwiperSlide>
          <SwiperSlide> 6 </SwiperSlide>
          <SwiperSlide> 7 </SwiperSlide>
        </Swiper>
      </div>
      <p dangerouslySetInnerHTML={{__html: t('link')}} />
      {/* <div className="productsContainer">
                {
                    data.map(product => {
                        return (
                            <Link key={product.id} to={`/${product.id}`}>
                                <div className="ProductBox" >
                                    <h3>{product.title}</h3>
                                    <span>{theme}</span>
                                    <br/>
                                    <span>{product.Category}</span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div> */}
      {/* <TodoApp/> */}

      {/* <Form /> */}
      {/* <input 
                type='number' 
                placeholder='Type Number' 
                value={inputValue}
                onChange={(e) => {
                setInputValue(e.target.value);
                }}
            />
            <button onClick={()=> setStartValue(parseInt(inputValue))} >
                Change start value
            </button> */}
      {/* { startValue && <Counter start={startValue} increase={1} /> } */}

      {/* <Counter  increase={5} />
            <Counter start={300}  /> */}
    </div>
  );
}
