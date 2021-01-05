import "./Home.scss";
import { ProjectGrid } from "./ProjectGrid";
import { AboutMe } from "./AboutMe";

export function Home() {
  return (
    <div id={"home"}>
      <AboutMe />
      <ProjectGrid />
    </div>
  );
}
