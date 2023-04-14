import React from "react";
import PageHero from "../components/PageHero";
import logo from "../assets/hero-bcg.jpeg";

function AboutPage() {
  return (
    <>
      <PageHero title="About" />
      <div className="page-100  flex justify-center  gap-20 px-20 lg:px-4 section-center lg:flex-col">
        <div>
          <img src={logo} alt="" className="h-[450px] w-[750px] lg:h-auto lg:w-auto" />
        </div>
        <div>
          <h1 className="text-5xl">Our Story</h1>
          <p className="text-white text-lg max-w-[1500px] leading-9 mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            repellendus corrupti nemo nostrum accusantium tenetur amet officia
            quos? Nihil enim perferendis unde dolor. Unde dicta sunt
            perspiciatis, quidem, dolor reiciendis voluptas ipsa et totam saepe
            accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim, repellendus corrupti nemo nostrum accusantium tenetur amet
            officia quos? Nihil enim perferendis unde dolor. Unde dicta sunt
            perspiciatis, quidem, dolor reiciendis voluptas ipsa et totam saepe
            accusamus
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
