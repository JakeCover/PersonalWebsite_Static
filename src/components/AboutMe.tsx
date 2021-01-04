import "./AboutMe.scss";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

const TelegramOutlinedSvg = () => {
  return (
    <svg
      width="24px"
      height="24px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 1.41421,
      }}
    >
      <path
        id="telegram-1"
        d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
      />
    </svg>
  );
};

const LastFmLi = () => {
  const [nowPlayingSong, setNowPlayingSong] = useState<string>("nothing");
  const [nowPlayingArtist, setNowPlayingArtist] = useState<string>("no-one");

  const updateNowPlaying = async () => {
    try {
      const songData = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      console.log(songData.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    updateNowPlaying();

    const interval = setInterval(updateNowPlaying, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <li>listening to ____ by ____</li>;
};

const Age = () => {
  const [age, setAge] = useState(
    Math.round((new Date().getTime() - 1021004428000) / 1000)
  );

  const UpdateAge = () => {
    setAge(Math.round((new Date().getTime() - 1021004428000) / 1000));
  };

  useEffect(() => {
    UpdateAge();

    const interval = setInterval(UpdateAge, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <li>
      <span style={{ fontFamily: "Fira Code" }}>{age}</span> seconds old{" "}
    </li>
  );
};

export const AboutMe = () => {
  const EmailHandler = () => {
    const email = "Y29udGFjdEBqYWtlY292ZXIubWU=";
    window.prompt("Thanks for being a human! Here's my email:", atob(email));
  };

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
              <li>Occupation: Student</li>
              <li>Location: Southern California</li>
              <li>
                Projects:{" "}
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
                Resume: <Link to={"/resume"}>Over here</Link>
              </li>
              <li>
                Find Me:
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
              <li>
                doing (general stuff - in class, projects, sleeping, games)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
