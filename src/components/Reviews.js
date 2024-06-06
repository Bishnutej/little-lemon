import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Icon from "./icons_assets/icon_review.png";
import "swiper/css";

const Reviews = () => {
  return (
    <section className="reviews mt-5 pt-5">
      <Container fluid className="p-0">
        <Row>
          <Col>
            <h2>Reviews</h2>
          </Col>
        </Row>
        <Row className="mx-auto justify-content-between">
          <div
            className="swiper-button-prev custom-icon p-0"
            tabIndex="0"
            role="button"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper"
            aria-disabled="false"
          >
            <i class="bi bi-arrow-left-circle"></i>
          </div>
          <div
            className="swiper-button-next custom-icon p-0"
            tabIndex="0"
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper"
            aria-disabled="false"
          >
            <i class="bi bi-arrow-right-circle"></i>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <blockquote className="review-blockquote">
                <div className="mt-2">
                  <div>
                  <img
                  className="mb-1"
                  alt="Photo"
                  src={Icon}
                  width={50}
                  height={50}
                  />


                    <p>
                      <strong>Madhubabu</strong>
                    </p>
                  </div>
                  <div>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="mt-4">
                  Nestled in a charming corner of the city, Little Lemon Restaurant is a true gem waiting to be discovered. From the moment you step through the door, you're greeted with a warm and inviting atmosphere that sets the stage for a memorable dining experience.
                  </p>
                </div>
              </blockquote>
            </SwiperSlide>

            <SwiperSlide>
              <blockquote className="review-blockquote">
                <div className="mt-2">
                  <div>
                    <img
                    className="mb-1"
                    alt="Photo"
                    src={Icon}
                    width={50}
                    height={50}
                    />
                    <p>
                      <strong>Shriti Jena</strong>
                    </p>
                  </div>
                  <div>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="mt-4">
                  Whether you're looking for a romantic dinner for two or a lively gathering with friends, Little Lemon Restaurant is the perfect choice. With its cozy ambiance, delicious food, and top-notch service, it's sure to become a favorite dining destination for anyone who appreciates good food and good company.
                  </p>
                </div>
              </blockquote>
            </SwiperSlide>
            <SwiperSlide>
              <blockquote className="review-blockquote">
                <div className="mt-2">
                  <div>
                    <img
                      className="mb-1"
                      alt="Photo"
                      src={Icon}
                      width={50}
                      height={50}
                    />
                    <p>
                      <strong>Karthik</strong>
                    </p>
                  </div>
                  <div>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="mt-4">
                  The menu is a delightful blend of traditional flavors and innovative twists, all centered around the bright and tangy essence of lemons. Each dish is a work of art, beautifully presented and bursting with fresh, vibrant flavors. The lemon-infused seafood dishes are a particular highlight, perfectly balancing tanginess with savory goodness.
                  </p>
                </div>
              </blockquote>
            </SwiperSlide>
          </Swiper>
        </Row>
      </Container>
      <hr />
    </section>
  );
};

export default Reviews;
