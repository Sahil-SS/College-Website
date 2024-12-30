import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef(); //Now we can use that ul tag as we have used ref
  let tx = 0; //tx = translateX
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slidebackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials" id="testimonial">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slidebackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sarah Simmons</h3>
                  <span>Edusity ,USA</span>
                </div>
              </div>
              <p>
                A graduate from Edusity University, USA, is recognized for their
                exceptional academic foundation and innovative thinking. They
                are skilled in blending global perspectives with specialized
                expertise, contributing meaningfully to their field. Their
                experience reflects a commitment to continuous learning and
                professional excellence
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Smith</h3>
                  <span>Edusity ,USA</span>
                </div>
              </div>
              <p>
                A graduate from Edusity University, USA, is recognized for their
                exceptional academic foundation and innovative thinking. They
                are skilled in blending global perspectives with specialized
                expertise, contributing meaningfully to their field. Their
                experience reflects a commitment to continuous learning and
                professional excellence
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Jazz </h3>
                  <span>Edusity ,USA</span>
                </div>
              </div>
              <p>
                A graduate from Edusity University, USA, is recognized for their
                exceptional academic foundation and innovative thinking. They
                are skilled in blending global perspectives with specialized
                expertise, contributing meaningfully to their field. Their
                experience reflects a commitment to continuous learning and
                professional excellence
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Mike Alter</h3>
                  <span>Edusity ,USA</span>
                </div>
              </div>
              <p>
                A graduate from Edusity University, USA, is recognized for their
                exceptional academic foundation and innovative thinking. They
                are skilled in blending global perspectives with specialized
                expertise, contributing meaningfully to their field. Their
                experience reflects a commitment to continuous learning and
                professional excellence
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
