import "./Home.scss"
import {ProjectGrid} from "./ProjectGrid";

export const Home = () => {
    return (
        <div id={"home"}>
            <div id={"about-me"}>
                <p>
                    Hi! I'm Jake, a CS student from the west coast! Take a look at some of my projects below! <br/>
                    This site is still under construction, so pardon the duplicate information and the horrendous colors. The final version should be up soon!
                </p>
            </div>
            <ProjectGrid/>
        </div>
    )
}
