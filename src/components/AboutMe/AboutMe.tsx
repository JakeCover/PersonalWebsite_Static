import "./AboutMe.scss";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";
import { Age } from "./Age";
import { LastFmLi } from "./LastFmLi";


export function AboutMe() {
  function EmailHandler() {
    const email = "Y29udGFjdEBqYWtlY292ZXIubWU=";
    window.prompt("Thanks for being a human! Here's my email:", atob(email));
  }

  return (
    <div id={"about-me-parent"}>
      <div id={"about-me"} className={"about-me-card"}>
        <h1> Hi! I'm Jake!</h1>

        <div id={"info-parent"}>
          <div id={"specific-info"}>
            <h2> A bit about me:</h2>

            <ul>
              <li>
                <b>Name</b>: Jake Cover
              </li>
              <li>
                <b>Occupation:</b> Student
              </li>
              <li>
                <b>Location:</b> Southern California
              </li>
              <li>
                <b>Projects:</b>{" "}
                <button
                  onClick={() =>
                    document.getElementById("project-header")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                >
                  Down there
                </button>
              </li>
              <li>
                <b>Resume:</b> <Link to={"/resume"}>Over here</Link>
              </li>
              <li>
                <b>Find Me:</b>
                <ul>
                  <li>
                    Email: <button onClick={EmailHandler}>Click This</button>
                  </li>
                  <li>
                    Twitter:{" "}
                    <Tooltip title={":("}>
                      <a
                        href={"https://github.com/JakeCover"}
                        target="_blank"
                        rel="noreferrer"
                      >
                        @cobular_
                      </a>
                    </Tooltip>
                  </li>
                  <li>
                    GitHub:{" "}
                    <a
                      href={"https://github.com/JakeCover"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      JakeCover
                    </a>
                  </li>
                  <li>
                    Telegram:{" "}
                    <a
                      href={"https://t.me/cobular"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      @cobular
                    </a>
                  </li>
                  <li>Elsewhere: Probably @cobular</li>
                </ul>
              </li>
            </ul>
          </div>
          <div id={"fun-info"}>
            <h2>I'm:</h2>
            <ul>
              <Age />
              <LastFmLi />
              <Tooltip
                title={
                  "Hey! This part is still a work in progress, check back in a bit to see if it's working!"
                }
              >
                <li>
                  doing (general stuff - in class, projects, sleeping, games)
                </li>
              </Tooltip>
              <li>rather colorblind</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
