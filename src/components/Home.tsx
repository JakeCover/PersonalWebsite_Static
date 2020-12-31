import "./Home.scss"
import {ProjectGrid} from "./ProjectGrid";

export const Home = () => {
    return (
        <div id={"home"}>
            <div id={"about-me"}>
                <p>
                    Hi! I'm Julie, a CS student from the west coast! Take a look at some of my projects below!
                </p>
            </div>
            <ProjectGrid/>
        </div>
    )
}
