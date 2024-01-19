import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import ProductImage from "../../assets/image.svg";

const Slides2 = () => {
  const slides = [
    {
      content: "100% Natural",
      title: "Fresh Smoothie & Summer Juice",
      description: "Best selling summer juice with natural extracts.",
      image: ProductImage,
      color: "#FAEF9B",
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      content: "50% Natural",
      title: "Fresh Smoothie & Summer Juice",
      description: "Best selling summer juice with natural extracts.",
      image: ProductImage,
      color: "#BFD8AF",
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      content: "80% Natural",
      title: "Fresh Smoothie & Summer Juice",
      description: "Best selling summer juice with natural extracts.",
      image: ProductImage,
      color: "#E6F3FA",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const pageChange = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
        <div style={{backgroundColor: `${slides[currentIndex].color}`}}
          className={`w-full h-full bg-cover bg-center rounded-2xl duration-500`}
        >
          <div>
          <p>{slides[currentIndex].content}</p>
          <h3>{slides[currentIndex].title}</h3>
          <p>{slides[currentIndex].description}</p>
          <button>
            <a href="">Shop Now</a>
          </button>
          </div>
          <div>
            <img src={slides[currentIndex].image} alt="" />
          </div>
      
        </div>

        {/* prev-btn */}
        <div className="hidden group-hover:block absolute top-[50%] left-6 -translate-x-0 translate-y-[-50%] p-2 bg-black/20 rounded-full text-white text-2xl cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* next-btn */}
        <div className="hidden group-hover:block absolute top-[50%] right-6 -translate-x-0 translate-y-[-50%] p-2 bg-black/20 rounded-full text-white text-2xl cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="text-2xl cursor-pointer"
              onClick={() => pageChange(slideIndex)}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slides2;
