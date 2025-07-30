import React from "react";
import heroImage from "../assets/heroImage.png";
import herologo from "../assets/herologo.png";

const Hero = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-auto max-h-[80vh] object-cover rounded-lg brightness-75"
        src={heroImage}
        alt="Hero"
      />
      <div className="absolute top-1/2 left-6 md:left-20 transform -translate-y-1/2 w-[90%] md:w-[70%]">
        <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
          Featured
        </h3>
        <h1
          className="text-white text-3xl md:text-5xl font-bold leading-tight"
          style={{ fontFamily: "Irish Grover" }}
        >
          Breaking into product design:
          <br />
          Advice from untitled founder, Frankie
        </h1>
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:gap-6">
          <p className="text-white text-sm md:text-base font-semibold md:w-[60%]">
            Let’s get one thing out of the way: you don’t need a fancy
            Bachelor’s Degree to get into Product Design. We sat down with
            Frankie Sallivan to talk about gatekeeping in product design and how
            anyone can get into this growing industry.
          </p>
          <img
            src={herologo}
            alt="logo"
            className="mt-4 md:mt-0 w-24 md:w-36 lg:w-48 mx-auto md:mx-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
