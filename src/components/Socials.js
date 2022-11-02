import React from "react";
import "./Socials.modules.scss";

function Socials() {
  return (
    <section className="socials">
      <a href="/Socials" className="slack">
        <img src="img/slacklogo.png" alt="slack" className="slack"></img>
      </a>
      <a href="/Socials" className="github">
        <img src="img/icon.svg" alt="github" className="github"></img>
      </a>
    </section>
  );
}
export default Socials;
