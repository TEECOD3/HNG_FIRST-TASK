import React from "react";
import "./contact.modules.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-form">
          <div className="contact-form-headings">
            <h1 className="contact-form-headings__main">Contact Me</h1>
            <p className="contact-form-headings__sub">
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </div>
          <form action="#">
            <div className="name">
              <div className="input-fields">
                <label>firstname</label>
                <input type="text" placeholder="Enter your first name"></input>
              </div>
              <div className="input-fields lastname">
                <label>lastname</label>
                <input type="text" placeholder="Enter your last name"></input>
              </div>
            </div>

            <div className="input-field">
              <label>email</label>
              <input type="email" placeholder="yourname@gmail.com"></input>
            </div>

            <div className="input-field">
              <label>message</label>
              <textarea
                type="text"
                placeholder="Send me a message and I'll reply you as soon as possible..."
              ></textarea>
            </div>

            <label className="checkbox-text">
              <input type="checkbox" id="logcheck" />
            <p> You agree to providing your data to name who may contact you.</p> 
            </label>

            <button className="btn">send message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
