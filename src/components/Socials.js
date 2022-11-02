import React from "react";
import "./Socials.modules.scss";
import slack from "../img/slacklogo.png";
import github from "../img/Icon.svg";

function Socials() {
  return (
    <section className="socials">
      <a href="/Socials" className="slack">
        <img src={slack} alt="slack" className="slack" />
      </a>
      <a href="/Socials" className="github">
        <img src={github} alt="github" className="github" />
      </a>
    </section>
  );
}
export default Socials;
