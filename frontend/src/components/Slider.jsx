import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // ✅ Import Swiper styles
import "swiper/css/navigation";
import CounterUp from "./CounterUp";
// import { createClient } from "@/prismicio";

const swiperOptions = {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
};

export default function Slider() {
  //   const client = createClient();
  //   const heroSectionData = await client.getSingle("collection_images");

  const heroSectionData = {
    data: {
      hero_section: [
        { image: { url: "/assets/images/slider/slider-7.png" } }, // ✅ Safe fallback image
      ],
    },
  };

  return (
    <>
      <section className="tf-slider home3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="swiper-container slider-home ">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="slider-item">
                      <div className="tf-slider-item style-3">
                        <div className="content-inner">
                          <h1 className="heading mb0">
                            WITH
                            <span className="animationtext clip">
                              <TypeAnimation
                                sequence={[
                                  " BINABOX",
                                  1000,
                                  " NFTBOX",
                                  1000,
                                  " BOXNFT",
                                  1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{
                                  display: "inline-block",
                                  marginLeft: "15px",
                                }}
                                repeat={Infinity}
                                className="cd-words-wrapper ms-3"
                              />
                            </span>
                          </h1>
                          <h1 className="heading"> EXPLORE NFT COLLECTION </h1>
                          <p className="sub-heading">
                            We are the best way to check the rarity of NFT collection
                          </p>
                          <div className="counter-wrap">
                            <div className="tf-counter">
                              <div className="content">
                                <CounterUp count={2240} />+
                              </div>
                              <h6>Total Items</h6>
                            </div>
                            <div className="tf-counter">
                              <div className="content">
                                <CounterUp count={1000} />+
                              </div>
                              <h6>Profiles Whitelisted</h6>
                            </div>
                          </div>
                          <div className="btn-slider ">
                            <Link
                              to="#"
                              className="tf-button"
                              data-toggle="modal"
                              data-target="#popup_bid"
                            >
                              CONNECT WALLET
                            </Link>
                            <Link to="/collection" className="tf-button style-2">
                              WHITELIST NOW
                            </Link>
                          </div>
                        </div>
                        <div className="image">
                          <img
                            src={heroSectionData?.data?.hero_section?.[0]?.image?.url || "/assets/images/placeholder.jpg"}
                            alt="Hero Section"
                            className="img ani5"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
