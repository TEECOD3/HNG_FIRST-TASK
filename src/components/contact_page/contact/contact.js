import React from "react";
import "./contact.modules.scss";
import { useState } from "react";
import { Inputfield, Textarea } from "../../contact_page/Form/index";
import Successfull from "../../messagesAlerts/sucessmessage/index";

function Contact() {
  const [alertOpen, setAlertOpen] = useState(false);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const handleCheckboxChange = (e) => {
  //   console.log(e);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirst_name("");
    setLast_name("");
    setEmail("");
    setMessage("");
    setAlertOpen(true);
  };

  return (
    <div className="contact">
      <div className={`${alertOpen ? "" : "hide-alert"}`}>
        <Successfull close={() => setAlertOpen(false)} />
      </div>
      <div className="container">
        <div className="contact-form">
          <div className="contact-form-headings">
            <h1 className="contact-form-headings__main">Contact Me</h1>
            <p className="contact-form-headings__sub">
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </div>

          <form action="#" onSubmit={handleSubmit}>
            <div className="name">
              <Inputfield
                type="text"
                id="first_name"
                label="First Name"
                name="first_name"
                required
                placeholder="Enter your first name"
                value={first_name}
                handleChange={(e) => setFirst_name(e.target.value)}
              />
              <Inputfield
                type="text"
                id="last_name"
                label="Last Name"
                required
                name="last_name"
                value={last_name}
                handleChange={(e) => setLast_name(e.target.value)}
                placeholder="Enter your last name"
              />
            </div>

            <Inputfield
              type="email"
              id="email"
              label="Email"
              required
              classes="width"
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="yourname@email.com"
            />

            <Textarea
              id="message"
              label="Message"
              name="message"
              value={message}
              handleChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Send me a message and I'll reply you as soon as possible..."
            />

            <label className="checkbox-text">
              <input type="checkbox" id="logcheck" />
              <p>
                You agree to providing your data to name who may contact you.
              </p>
            </label>

            <button className="btn">send message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
