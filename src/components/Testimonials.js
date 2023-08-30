import React from "react";
// import data
import { testimonials } from "../data";
// import components
import ClientSlider from "../components/ClientSlider";

const Testimonials = () => {
  //destructure testimonials
  const { title, clients } = testimonials;
  return (
    <section className="bg-pink-200 section">
      <div className="container mx-auto">
        {/* title */}
        <h2 className="title mb-10 lg:mb-20 text-center max-w-[920px] mx-auto">
          {title}
        </h2>
        {/* slider */}
        <div>
          <ClientSlider clients={clients} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
