import React from "react";
import "./Socials.modules.scss";
import slack from "../../src/img/slacklogo.png";
// import github from "../../src/img/icon/svg";

function Socials() {
  return (
    <section className="socials">
      <a href="/Socials" className="slack">
        <img src={slack} alt="slack" className="slack"></img>
      </a>
      <a href="/Socials" className="github">
        <img src="/src/img/icon.svg" alt="github" className="github"></img>
      </a>
    </section>
  );
}
export default Socials;
