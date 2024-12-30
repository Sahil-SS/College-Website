import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const submit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "335dfb36-4a68-4db8-b011-61a5058477a3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out to me for any inquiries, collaborations, or
          assistance. Whether it's academic projects, innovative ideas, or
          general questions, I'm always open to connecting and exploring
          opportunities. Let's build something great together!
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            admin@gmail.com{" "}
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +1 123-456-7890{" "}
          </li>
          <li>
            <img src={location_icon} alt="" />
            123 Academic Lane, University Town, Education City, Stateville, ZIP
            12345, USA{" "}
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={submit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone-number"
            placeholder="Enter your Phone Number"
            required
          />
          <label>Enter Your Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email Address"
            required
          />
          <label>Write your Message Here</label>
          <textarea
            name="message"
            rows="7"
            placeholder="Enter your Text"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit <img src={white_arrow} alt="" />
          </button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
