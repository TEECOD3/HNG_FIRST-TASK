import "./Footer.modules.scss";

import ingres from "../img/ingressive.png";
import zuri from "../img/zuri.svg";

function Footer() {
  return (
    <footer>
      <img src={zuri} alt="" className="zuri" />
      <p className="sample-txt"> HNG Internship 9 Frontend Task</p>
      <img src={ingres} alt="" className="hng" />
    </footer>
  );
}
export default Footer;
