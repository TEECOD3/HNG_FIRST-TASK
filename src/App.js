import React from "react";
import Button from "./components/Button";
import Profile from "./components/Profile";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
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
        <Socials />
      </div>
      <Footer />
    </div>
  );
}

export default App;
