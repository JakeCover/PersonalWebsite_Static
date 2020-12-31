import "./ProjectGrid.scss";
import Masonry from "masonry-layout";


type GridElementProps = {
  image_url: string;
  image_alt: string;
  text: string;
};

const OneByOneGridElement = ({
  image_url,
  image_alt,
  text,
}: GridElementProps) => {
  return (
    <div className={"OneByOneGridElement"}>
      <div className={"image"}>
        <img src={image_url} alt={image_alt} />
      </div>
      <div className={"description"}>
        <p>{text}</p>
      </div>
    </div>
  );
};

const FourByOneGridElement = ({
  image_url,
  image_alt,
  text,
}: GridElementProps) => {
  return (
    <div className={"FourByOneGridElement"}>
      <div className={"image"}>
        <img src={image_url} alt={image_alt} />
      </div>
      <div className={"description"}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export const ProjectGrid = () => {


  return (
    <div id={"project-grid"}>
      <OneByOneGridElement
        image_url={"http://jakecover.me/images/codedaysd.png"}
        image_alt={"CodeDay San Diego Logo"}
        text={
          "CodeDay, an event by SRND, is a beginner-friendly 24 hour event for students that challenges\n attendees to create a game or an app."
        }
      />
      <OneByOneGridElement
        image_url={"http://jakecover.me/images/codedaysd.png"}
        image_alt={"CodeDay San Diego Logo"}
        text={
          "CodeDay, an event by SRND, is a beginner-friendly 24 hour event for students that challenges\n attendees to create a game or an app."
        }
      />
      <OneByOneGridElement
        image_url={"http://jakecover.me/images/codedaysd.png"}
        image_alt={"CodeDay San Diego Logo"}
        text={
          "CodeDay, an event by SRND, is a beginner-friendly 24 hour event for students that challenges\n attendees to create a game or an app."
        }
      />
      <OneByOneGridElement
        image_url={"http://jakecover.me/images/codedaysd.png"}
        image_alt={"CodeDay San Diego Logo"}
        text={
          "CodeDay, an event by SRND, is a beginner-friendly 24 hour event for students that challenges\n attendees to create a game or an app."
        }
      />
      <FourByOneGridElement
        image_url={"http://jakecover.me/images/foresightsports.png"}
        image_alt={"Foresight Sports Logo"}
        text={
          "Foresight Sports creates advanced augmented reality sports experiences. I created multiple games using Unity that took data from their launch monitor technology and translated it into a seamless experience."
        }
      />
    </div>
  );
};
