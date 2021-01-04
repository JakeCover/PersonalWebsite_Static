import "./Footer.scss"
import { Link } from "react-router-dom";


export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="blurb">
          <p className="text-justify">
            Made with ☕ and ❤️ by Jake Cover, a CS student who really needs to find something
            witty and interesting to put here soon. Feel free to reach out!
            <br />
            Checklist Icon by Arthur Shlain from the Noun Project
          </p>
        </div>
        <div className="links-container">
          <h2>Links and Stuff</h2>
          <ul className="footer-links">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link  to={"/resume"}>Resume</Link>
            </li>
            <li>
              <a href="https://github.com/JakeCover">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copyright-text">
        Copyright &copy; 2020 All Rights Reserved by Jake Cover
      </div>
    </footer>
  );
};
