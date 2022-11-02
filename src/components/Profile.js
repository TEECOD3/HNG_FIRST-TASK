import React from "react";
import "./Profile.modules.scss";
import img from "../../src/img/picture.jpeg";
import dotted from "../img/dotted-hamburger.svg";
import share from "../img/share-avater-icon.svg";

function Profile() {
  /*const [width] = React.useState(window.innerWidth);
  const breakpoint = 768;*/
  return (
    <header className="header">
      <div className="share-icon">
        <img src={share} alt="share icon" className="share" />
        <img src={dotted} alt="menu icon" className="menu" />
      </div>
      <div className="user-profile">
        <img src={img} alt="user" className="picture" id="profile__img"></img>
      </div>
      <div className="username">
        <h1 className="myname" id="twitter">
          David temitope
        </h1>
        <h3 className="hide" id="slack">
          David temitope
        </h3>
      </div>
    </header>
  );
}
export default Profile;
