import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.png";
import profilePic2 from "../../img/profile2.png";
import profilePic3 from "../../img/profile3.png";
import profilePic4 from "../../img/profile4.png";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      "Working with our web developer was an absolute pleasure. They took our vision for an online store and turned it into a reality that exceeded our expectations. The website's functionality is seamless, the design is eye-catching, and they were always responsive to our needs. Our business has seen a significant uptick in online sales, and we owe it all to their expertise." },
    {
      img: profilePic2,
      review:
      "I'm incredibly impressed by the web developer's skills and professionalism. They understood our brand's identity and translated it into a website that captures its essence perfectly. The attention to detail in both the design and the back-end functionality is remarkable. Our customers love the user experience, and we've received numerous compliments on the site's responsiveness and aesthetics."    },
    {
      img: profilePic3,
      review:
      "Navigating the website developed by this team has been a delight. The layout is intuitive, and finding what I need is a breeze. It's evident that the developers focused on user experience, as I've had no issues accessing the site on different devices. The site loads quickly, and the checkout process was hassle-free. Kudos to the team for a job well done!"
   },
    {
      img: profilePic4,
      review:
      "I've had the privilege of collaborating with this web developer on a few projects, and each time, I'm impressed by their technical prowess. The code is clean, well-organized, and shows a deep understanding of best practices. Their problem-solving skills shine through, especially when faced with complex functionalities. Their commitment to staying updated with the latest web technologies is admirable, making them a true asset to any development team." },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
