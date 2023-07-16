import React from "react";
import "./contact.css";
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

function Contact() {
  return (
    <div id="contact">
      <h2 className="contact__title">Contact me</h2>
      <div className="contact__container">
        <div className="contact__options column">
          <article className="contact__option">
            <MdEmail className="option__icon" />
            <h4>Email</h4>
            <h5>maxlooper19@gmail.com</h5>
            <a href="mailto:maxlooper19@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <MdLocationPin className="option__icon" />
            <h4>Adress</h4>
            <h5>Iran, Urmia</h5>
          </article>
          <article className="contact__option">
            <BsFillTelephoneFill className="option__icon" />
            <h4>Phone</h4>
            <h5>+98 914-713-9219</h5>
          </article>
        </div>
        <div className="column">
          <form action="" className="form">
            <div className="form__item form__item1">
              {/* <label htmlFor="name">Name:</label> */}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
              <br />
            </div>

            <div className="form__item form__item2">
              {/* <label htmlFor="email">Email:</label> */}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
              <br />
            </div>

            <div className="form__item form__item3">
              {/* <label htmlFor="subject">Subject:</label> */}
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
              />
              <br />
            </div>

            <div className="form__item form__item4">
              {/* <label htmlFor="message">Message:</label> */}
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="20"
                placeholder="Your message hear"
              ></textarea>
              <br />
            </div>
            <button type="submit" className="form__item form__item5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
