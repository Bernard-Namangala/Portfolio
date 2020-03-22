import React from "react";
const Corousel = ({ images }) => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((image, key) => (
          <div
            className={key === 0 ? "carousel-item active" : "carousel-item"}
            key={key}
          >
            <img
              className="d-block carousel-img"
              src={image.image}
              alt="slide"
            />
          </div>
        ))}
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>

      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Corousel;
