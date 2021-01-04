import "./Home.scss";
import { ProjectGrid } from "./ProjectGrid";
import {AboutMe} from "./AboutMe";

export const Home = () => {
  return (
    <div id={"home"}>
      <AboutMe />
      <ProjectGrid />
    </div>
  );
};
