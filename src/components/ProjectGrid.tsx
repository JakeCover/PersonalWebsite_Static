import "./ProjectGrid.scss";
import Masonry from "masonry-layout";
import {useEffect} from "react";

type GridElementImageProps = {
    image_url: string;
    image_alt: string;
    title: string;
    text: string;
};

type GridElementProps = {
    image_url: string;
    image_alt: string;
    title: string;
    text: string;
};

const OneWide = ({title, text}: GridElementProps) => {
    return (
        <div className={"OneByOne GridElement"}>
            <div className={"title"}>
                <h2>{title}</h2>
            </div>
            <div className={"description"}>
                <p>{text}</p>
            </div>
        </div>
    );
};

const OneWidePic = ({
                        image_url,
                        image_alt,
                        title,
                        text,
                    }: GridElementImageProps) => {
    return (
        <div className={"OneByOne GridElement"}>
            <div className={"image"}>
                <img src={image_url} alt={image_alt}/>
            </div>
            <div className={"description"}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

const FourByOneGridElement = ({
                                  image_url,
                                  image_alt,
                                  title,
                                  text,
                              }: GridElementImageProps) => {
    return (
        <div className={"FourByOne GridElement"}>
            <div className={"image"}>
                <img src={image_url} alt={image_alt}/>
            </div>
            <div className={"description"}>
                <h2>{title}</h2>

                <p>{text}</p>
            </div>
        </div>
    );
};

export const ProjectGrid = () => {
    useEffect(() => {
        var elem = document.querySelector("#project-grid");

        // @ts-ignore
        var msnry = new Masonry(elem, {
            itemSelector: ".GridElement",
            gutter: 5,
            columnWidth: ".GridSizer",
            percentPosition: true,
        });
    });

    return (
        <div id={"project-grid-parent"}>
            <div id={"project-grid"}>
                <div className={"GridSizer"}/>
                <OneWidePic
                    image_url={"http://jakecover.me/images/codedaysd.png"}
                    image_alt={"CodeDay San Diego Logo"}
                    title={"CodeDay"}
                    text={
                        "CodeDay, an event by SRND, is a beginner-friendly 24 hour event for students that challenges\n attendees to create a game or an app."
                    }
                />
                <OneWidePic
                    image_url={"http://jakecover.me/images/codedaysd.png"}
                    image_alt={"CodeDay San Diego Logo"}
                    title={"CodeDay"}
                    text={
                        "CodeDay, an event by SRND, is a beginner-friendly 24 hour event for students that challenges\n attendees to create a game or an app."
                    }
                />
                <OneWidePic
                    image_url={"http://jakecover.me/images/codedaysd.png"}
                    image_alt={"CodeDay San Diego Logo"}
                    title={"CodeDay"}
                    text={
                        "CodeDay, an event by SRND, is a beginner-friendly 24 hour event for students that challenges\n attendees to create a game or an app."
                    }
                />
                <OneWidePic
                    image_url={"http://jakecover.me/images/codedaysd.png"}
                    image_alt={"CodeDay San Diego Logo"}
                    title={"CodeDay"}
                    text={
                        "CodeDay, an event by SRND, is a beginner-friendly 24 hour event for students that challenges\n attendees to create a game or an app."
                    }
                />
                <FourByOneGridElement
                    image_url={"http://jakecover.me/images/foresightsports.png"}
                    image_alt={"Foresight Sports Logo"}
                    title={"Foresight Sports"}
                    text={
                        "Foresight Sports creates advanced augmented reality sports experiences. I created multiple games using Unity that took data from their launch monitor technology and translated it into a seamless experience."
                    }
                />
                <OneWidePic
                    image_url={"http://jakecover.me/images/codedaysd.png"}
                    image_alt={"CodeDay San Diego Logo"}
                    title={"CodeDay"}
                    text={
                        "CodeDay, an event by SRND, is a beginner-friendly 24 hour event for students that challenges\n attendees to create a game or an app."
                    }
                />

                <OneWidePic
                    image_url={"http://jakecover.me/images/codedaysd.png"}
                    image_alt={"CodeDay San Diego Logo"}
                    title={"CodeDay"}
                    text={
                        "CodeDay, an event by SRND, is a beginner-friendly 24 hour event for students that challenges\n attendees to create a game or an app."
                    }
                />
                <OneWidePic
                    image_url={"http://jakecover.me/images/codedaysd.png"}
                    image_alt={"CodeDay San Diego Logo"}
                    title={"CodeDay"}
                    text={
                        "CodeDay, an event by SRND, is a beginner-friendly 24 hour event for students that challenges\n attendees to create a game or an app."
                    }
                />
                <OneWidePic
                    image_url={"http://jakecover.me/images/codedaysd.png"}
                    image_alt={"CodeDay San Diego Logo"}
                    title={"CodeDay"}
                    text={
                        "CodeDay, an event by SRND, is a beginner-friendly 24 hour event for students that challenges\n attendees to create a game or an app."
                    }
                />
                <OneWidePic
                    image_url={"http://jakecover.me/images/codedaysd.png"}
                    image_alt={"CodeDay San Diego Logo"}
                    title={"CodeDay"}
                    text={
                        "CodeDay, an event by SRND, is a beginner-friendly 24 hour event for students that challenges\n attendees to create a game or an app."
                    }
                />
            </div>
        </div>
    );
};
