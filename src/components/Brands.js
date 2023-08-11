import React from "react";
//import data
import { overview } from "../data";

const Brands = () => {
  //destructure overview
  const brands = overview;
  return (
    <section className="py-9 bg-pink-100">
      <div className="container mx-auto">
        {/* brands */}
        {brands.map((item, index) => {
          const { image, delay } = item;
        })}
      </div>
    </section>
  );
};

export default Brands;
