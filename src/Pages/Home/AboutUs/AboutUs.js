import React from "react";
import "./AboutUs.css";
import aboutImg from "../../../assets/about-img.png";
import ChoosingUs from "./ChoosingUs/ChoosingUs";
const About = () => {
  return (
    <>
   
      <div className="about-container">
        <div className="row about py-5">
          <div className="col-md-12 col-lg-6 pe-5 col-12 about-left">
            <p>THE WORLD IS YOURS</p>
            <hr className="hr" />
            <h1 className="about-title my-4">Learn More Ashiq Guiter Shop</h1>
            <h3 className="about-sub-title my-4">
              Ashiq Guiter shop is the best place to get your best Guitar
            </h3>
            <span className="text-secondary  me-5">
              Welcome to Ashiq Guiter Shop guiter.Ashiq Guiter Shop has
              proudly been in business since 1995 providing the highest level of
              service to our customers. We believe that Good Business begins
              with Top Quality Guiters, High Attention to detail & continues
              with service after the sale. Our customers are very discerning Guiter
              people that are searching for the very best in the Guiter and
              the buying experience, I believe you will be comforted in knowing
              what other Premier customers have said in regards to their
              experience..
            </span>
          </div>

          <div className="col-md-12 col-lg-6 my-4 col-12">
            <img className="img-fluid" style={{display:'block', marginLeft:'auto',marginRight:'auto',width:'50%'}} src={aboutImg} alt="" />
          </div>
        </div>
      </div>
      <ChoosingUs></ChoosingUs>
    </>
  );
};

export default About;
