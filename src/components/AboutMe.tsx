import "./AboutMe.scss";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

interface NowPlayingData {
  introduction: string,
  lastfm: {
    artist: string,
    track: string,
    playing: boolean
  }
}

function LastFmLi() {
  const [nowPlayingData, setNowPlayingData] = useState<NowPlayingData>({
    introduction: "",
    lastfm: {
      artist: "nobody",
      playing: false,
      track: "nothing"
    }
  });

  async function updateNowPlaying() {
    try {
      const songRequestData = await axios.get(
        "https://api.jakecover.me"
      );

      setNowPlayingData(songRequestData.data)
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    updateNowPlaying();

    const interval = setInterval(updateNowPlaying, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  if (nowPlayingData.lastfm.playing) {
    return <li>listening to {nowPlayingData.lastfm.track} by {nowPlayingData.lastfm.artist}</li>;
  }
  return <li>not listening to anything right now.</li>;
};

function Age() {
  // Accounts for leap years and stuff
  function milliseconds_year() {
    const dateObj = new Date();
    const dateInit = Math.round(
      new Date(dateObj.getFullYear(), 0, 1).getTime()
    );
    const dateEnd = Math.round(
      new Date(dateObj.getFullYear(), 11, 31, 23, 59, 59, 999).getTime()
    );
    return dateEnd - dateInit;
  }

  function searchSternBorcotTree(
    target: number,
    left_n: number,
    left_d: number,
    right_n: number,
    right_d: number,
    count: number = 0
  ): [number, number] {
    count++;
    const center_n: number = left_n + right_n;
    const center_d: number = left_d + right_d;
    // Check to see if we've gone too deep
    if (count > 25) return [center_n, center_d];
    // Check to see if we're close enough to the target
    if (Math.abs(target - (center_n / center_d)) > 0.001) {
      // Look right down the tree
      if (target > (center_n / center_d))
        return searchSternBorcotTree(
          target,
          center_n,
          center_d,
          right_n,
          right_d,
          count
        );
      // Ok now look left
      return searchSternBorcotTree(
        target,
        left_n,
        left_d,
        center_n,
        center_d,
        count
      );
    }
    return [center_n, center_d];
  }

  function CalcAge() {
    let ageMs = new Date().getTime() - 1021004428000;
    const yearMs = milliseconds_year();
    const ageYearsComponent = Math.floor(ageMs / yearMs);
    const ageSecondsComponent = Math.floor((ageMs % yearMs) / 1000);
    const [target_n, target_d] = searchSternBorcotTree(
      ageSecondsComponent / (yearMs / 1000),
      0,
      1,
      1,
      1
    );
    return `${ageYearsComponent} and ${target_n}/${target_d}`;
  }

  const [age, setAge] = useState(CalcAge());

  function UpdateAge() {
    setAge(CalcAge());
  }

  useEffect(() => {
    UpdateAge();

    const interval = setInterval(UpdateAge, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <li>
      {age} years old
    </li>
  );
};

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
              <Tooltip
                title={
                  "Hey! This part is still a work in progress, check back in a bit to see if it's working!"
                }
              >
                <LastFmLi />
                <li>
                  doing (general stuff - in class, projects, sleeping, games)
                </li>
              </Tooltip>
              <li>
                rather colorblind
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
