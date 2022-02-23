import React from "react";
import Header from "./header";
import pic from "../../assets/WhatsApp Image 2022-02-23 at 8.32.55 PM.jpeg";
import "../../../../../frontend/timetable/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import "./slider.css";
function Home() {
  return (
    <div className="home">
      <Header />
      <div className="card bg-dark text-black w-100 h-50 d-inline-block">
        <img src={pic} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h2 className="card-title text-sm-left text-md-left text-lg-left text-xl-left">
            SUCCESS IS A JOURNEY, NOT A DESTINATION
          </h2>
          <br />
          <p className="card-text text-sm-center text-md-center text-lg-center text-xl-center">
            One among the few colleges started in the country prior to
            Independence. A holistic
            <br /> hold on excellence for generations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
