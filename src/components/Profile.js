import React from "react";
import "./Profile.modules.scss";
import img from "../../src/img/picture.jpeg";

function Profile() {
  /*const [width] = React.useState(window.innerWidth);
  const breakpoint = 768;*/
  return (
    <header className="header">
      <div className="share-icon">
        <img
          src="img/share-avater-icon.svg"
          alt="share icon"
          className="share"
        />
        <img src="img/dotted-hamburger.svg" alt="menu icon" className="menu" />
      </div>
      <div className="user-profile">
        <img src={img} alt="user" className="picture" id="profile__img"></img>
      </div>
      <div className="username">
        <h1 className="myname" id="twitter">
          David temitopes
        </h1>
        <h3 className="hide" id="slack">
          David temitope
        </h3>
      </div>
    </header>
  );
}
export default Profile;
