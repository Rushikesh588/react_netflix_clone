import React from "react";
import "../css/footer.css";
import LanguageIcon from "@material-ui/icons/Language";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Footer() {
  return (
    <footer className="footer">
      <p>Questions? Call 000-800-040-1843</p>
      <div className="footer__cols">
        <ul>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Investors Relations</a>
          </li>
          <li>
            <a>Privacy</a>
          </li>
          <li>
            <a>Speed Test</a>
          </li>
        </ul>
        <ul>
          <li>
            <a>Help Center</a>
          </li>
          <li>
            <a>Jobs</a>
          </li>
          <li>
            <a>Cookie Preferences</a>
          </li>
          <li>
            <a>Legal Notice</a>
          </li>
        </ul>
        <ul>
          <li>
            <a>Account</a>
          </li>
          <li>
            <a>Ways to Watch</a>
          </li>
          <li>
            <a>Corporate Information</a>
          </li>
          <li>
            <a>Netflix Originals</a>
          </li>
        </ul>
        <ul>
          <li>
            <a>Media Center</a>
          </li>
          <li>
            <a>Terms of Use </a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="footer__under">
        <div className="footer__info">
          <LanguageIcon />
          <p>English</p>
          <ArrowDropDownIcon style={{ fontSize: "30px" }} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
