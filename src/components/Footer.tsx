import "./Footer.scss"

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
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="resume.html">Resume</a>
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
