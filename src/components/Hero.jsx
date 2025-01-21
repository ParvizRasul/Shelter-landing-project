import React from "react";

function Hero() {
  return (
    <div className="hero-container d-flex m-1">
      <div className="text-content col-sm-12 col-md-7">
        <header className="m-1 fs-2 fw-bold">Find Your Perfect</header>
        <h2 className="m-1 text-primary m-2">Companion</h2>
        <p className="m-1 text-secondary">
          Every pet in our shelter as a story ans is waiting for a loving orver
          home.Start your journey of pet adoption today
        </p>
        <button className="btn btn-primary m-2">Adopt a Pet</button>
        <button className="btn btn-outline-primary g-3">Learn More</button>
        <div className="d-flex justify-content-between p-1 m-1">
          <div className="text-center">
            <h3>50+</h3>
            <p>Pets available</p>
          </div>

          <div className="text-center">
            <h3>200+</h3>
            <p>Happy Adoptions</p>
          </div>

          <div className="text-center">
            <h3>15+</h3>
            <p>Years of service</p>
          </div>

        </div>
      </div>
      <div className="image-container m-3 col-md-5">
        <img
          className="d-none d-sm-inline-block img-fluid"
          src="src/assets/FSD - Project - Happy Tails/animals.png"
          alt="bg-pic"
        />
      </div>
    </div>
  );
}

export default Hero;
