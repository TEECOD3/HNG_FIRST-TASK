import React from "react";
import "./clicks.modules.scss";
import Button from "./Button";
import Profile from "./Profile";
import Socials from "./Socials";
import { Link } from "react-router-dom";

function clicks() {
  return (
    <div className="clicks">
      <div className="container">
        <Profile />
        <Button id="twitter" link="https://twitter.com/TOPSHI_">
          Twitter Link
        </Button>
        <Button id="btn__zuri" link="https://training.zuri.team/">
          Zuri Team
        </Button>
        <Button id="books" link="http://books.zuri.team/">
          Zuri Books
        </Button>

        <Button
          id="book__python"
          link="https://books.zuri.team/python-for-beginers?ref_id=Truevine"
        >
          Python Books
        </Button>
        <Button id="pitch" link="https://background.zuri.team/">
          Background Check for Coders
        </Button>
        <Button id="book__design" link="https://books.zuri.team/design-rules">
          Design Books
        </Button>

        <Link to="/contact" className="contacta">
          <Button> contact us</Button>
        </Link>

        <Socials />
      </div>
    </div>
  );
}

export default clicks;
