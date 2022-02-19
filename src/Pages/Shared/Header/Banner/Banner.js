import React from "react";
import "./Banner.css";
import bannerImg from "../../../../assets/banner-7.png"
const Banner = () => {
  return (
    <div>
      <div className="row banner-container mt-0 pt-0 g-0">
        <div className="col-12 col-md-6 col-lg-5 mt-lg-5 pt-lg-5">
          <div className="left-top text-white mt-lg-5">
            <p><span>BEST GUITAR</span></p>
            <h1>Epiphone Zenith</h1>
            <p className="mt-4">Even at her commercial peak with “Little Plastic Castle,” Ani DiFranco was never an A-List celebrity. Anyone seasoned in the culture of singer-songwriters would tell you that her individuality as an artist surpasses that of most folk legends in the 60s, and her guitar technique is a marvel of spontaneity.</p>
          </div>
          <div className="left-bottom ps-2 text-white mt-5">
              <p className="pt-1 mb-0"><span >Starting from</span></p>
              <p className="mt-0"><sup>$</sup>199.99</p>
              <button className="mt-3 mb-5  banner-btn">DISCOVER MORE <i className=" ms-3 fas fa-caret-right fs-5"></i></button>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-7 mb-3 pe-5 ps-lg-5 mt-0 pt-lg-5">
            <img className=" ms-lg-5 ps-lg-5 mt-lg-5 mt-5 banner-img  img-fluid" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
