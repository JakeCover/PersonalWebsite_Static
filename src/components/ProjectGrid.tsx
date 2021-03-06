/**
 * TODO:
 *  - For things that can't be linked, use <ExpandAltOutlined /> to signal that clicking will open a modal https://ant.design/components/modal/
 *     in order to give a more complex writeup and some pictures
 *  - Tooltip for modal and linkable items, possibly <QuestionCircleOutlined /> which displays a modal with an example card with tooltips or explanations
 *  - Footer
 *  - Responsive top bar
 *
 */

import "./ProjectGrid.scss";
import Masonry from "masonry-layout";
import ImagesLoaded from "imagesloaded";

import { useEffect } from "react";
import { LinkOutlined } from "@ant-design/icons";
import CodeDaySD from "../images/SanDiego.svg";
import Foresight from "../images/foresightsports.png";
import Distest from "../images/distest.svg";
import Scoresaver from "../images/scoresaver.svg";
import Hashicorp from "../images/HashiCorp_Logo_no_text.png";

type GridElementImageProps = {
  image_url: string;
  image_alt: string;
  title: string;
  text: string;
  link?: string;
  org?: string;
};

type GridElementProps = {
  title: string;
  text: string;
  link?: string;
  org?: string;
};

function SmallElement({ title, text, link, org }: GridElementProps) {
  if (link === undefined) {
    return (
      <div className={"OneWide GridElement"}>
        <div className={"GridElementInternal"}>
          <div className={"title"}>
            <h2>{title}</h2>
            {org && <h3>{org}</h3>}
          </div>
          <div className={"description"}>
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <a
      className={"OneWide GridElement Link"}
      href={link}
      rel={"noreferrer"}
      target={"_blank"}
    >
      <div className={"GridElementInternal"}>
        <div className={"title"}>
          <h2>{title}</h2>
          {org && <h3>{org}</h3>}
          <LinkOutlined className={"LinkIcon"} />
        </div>
        <div className={"description"}>
          <p>{text}</p>
        </div>
      </div>
    </a>
  );
}

function SmallElementPic({
  image_url,
  image_alt,
  title,
  text,
  link,
  org,
}: GridElementImageProps) {
  if (link === undefined) {
    return (
      <div className={"OneWide Pic GridElement"}>
        <div className={"GridElementInternal"}>
          <div className={"image"}>
            <img src={image_url} alt={image_alt} />
          </div>
          <div className={"description"}>
            <h2>{title}</h2>
            {org && <h3>{org}</h3>}

            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <a
      className={"OneWide Pic GridElement Link"}
      href={link}
      target={"_blank"}
      rel={"noreferrer"}
    >
      <div className={"GridElementInternal"}>
        <div className={"image"}>
          <img src={image_url} alt={image_alt} />
          <LinkOutlined className={"LinkIcon"} />
        </div>
        <div className={"description"}>
          <h2>{title}</h2>
          {org && <h3>{org}</h3>}
          <p>{text}</p>
        </div>
      </div>
    </a>
  );
}

function MediumElement({
  image_url,
  image_alt,
  title,
  text,
  link,
  org,
}: GridElementImageProps) {
  if (link === undefined) {
    return (
        <div className={"Medium GridElement"}>
          <div className={"GridElementInternal"}>
            <div className={"image"}>
              <img src={image_url} alt={image_alt} />
            </div>
            <div className={"description"}>
              <h2>{title}</h2>
              {org && <h3>{org}</h3>}
              <p>{text}</p>
            </div>
          </div>
        </div>
    );
  }
  return (
      <a
          className={"Medium GridElement Link"}
          href={link}
          target={"_blank"}
          rel={"noreferrer"}
      >
        <div className={"GridElementInternal"}>
          <div className={"image"}>
            <img src={image_url} alt={image_alt} />
            <LinkOutlined className={"LinkIcon"} />
          </div>
          <div className={"description"}>
            <h2>{title}</h2>
            {org && <h3>{org}</h3>}
            <p>{text}</p>
          </div>
        </div>
      </a>
  );
}

function LargeElementPic({
  image_url,
  image_alt,
  title,
  text,
  link,
  org,
}: GridElementImageProps) {
  if (link === undefined) {
    return (
      <div className={"FourByOne GridElement"}>
        <div className={"GridElementInternal"}>
          <div className={"image"}>
            <img src={image_url} alt={image_alt} />
          </div>
          <div className={"description"}>
            <h2>{title}</h2>
            {org && <h3>{org}</h3>}
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <a
      className={"FourByOne GridElement Link"}
      href={link}
      target={"_blank"}
      rel={"noreferrer"}
    >
      <div className={"GridElementInternal"}>
        <div className={"image"}>
          <img src={image_url} alt={image_alt} />
          <LinkOutlined className={"LinkIcon"} />
        </div>
        <div className={"description"}>
          <h2>{title}</h2>
          {org && <h3>{org}</h3>}
          <p>{text}</p>
        </div>
      </div>
    </a>
  );
}

export function ProjectGrid() {
  useEffect(() => {
    var elem = document.querySelector("#project-grid");

    if (elem) {
      const msnry = new Masonry(elem, {
        itemSelector: ".GridElement",
        gutter: 0,
        columnWidth: ".GridSizer",
        percentPosition: true,
      });

      ImagesLoaded(elem).on("progress", () => {
        setTimeout(() => msnry.layout?.(), 200);
      });
    }
  });

  return (
    <div>
      <div id={"project-grid-parent"}>
        <div id={"project-header"}>
          <h2>&lt;/&gt; My Projects</h2>
          <p>
            A gallery of some of my most interesting projects. Look for{" "}
            <LinkOutlined />, click those projects for more information!
          </p>
        </div>
        <div id={"project-grid"}>
          <div className={"GridSizer"} />
          <SmallElement
            title={"ElaticMatch"}
            org={"CodeDay"}
            text={
              `A set of tools, including a custom suggestion and weighting system, as well as a custom matching 
              algorithm that I wrote and used to match around 350 students to the best-fitting mentors in the CodeDay 
              Labs summer internship program in 2020.`
            }
            link={"https://github.com/codeday/labs-elastic-match"}
          />
          <SmallElement
            title={"John Peter"}
            org={"CodeDay"}
            text={
              `John Peter is a Discord bot used for moderation and server management for Virtual CodeDay. It has a very 
              xtensive featureset, and has been used for multiple CodeDays and has worked with over 1000 students.`
            }
            link={"https://github.com/codeday/johnpeter-discord"}
          />
          <SmallElement
            title={"CopyMoji"}
            org={"BetterDiscord"}
            text={
              `An extension for the alternate discord client BetterDiscord that changes the functionality of copying 
              emoji to copy the actual emoji characters rather than their names from the discord client.`
            }
            link={
              "https://github.com/JakeCover/BetterDiscordExtensions/tree/main/plugins/CopyMoji"
            }
          />
          <SmallElementPic
            image_url={CodeDaySD}
            image_alt={"CodeDay San Diego Logo"}
            org={"CodeDay"}
            title={"CodeDay San Diego"}
            text={
              `A 24 hour hackathon occurring around the world a few times a year. I volunteered for and then later ran 
              the San Diego event.`
            }
            link={"https://event.codeday.org/sandiego"}
          />
          <LargeElementPic
            image_url={Foresight}
            image_alt={"Foresight Sports Logo"}
            title={"Foresight Sports"}
            text={
              `Foresight Sports creates advanced augmented reality sports experiences. I created multiple games using 
              Unity that took data from their launch monitor technology and translated it into a seamless experience.`
            }
          />
          <SmallElementPic
            image_url={Distest}
            image_alt={"Distest Logo"}
            title={"Distest"}
            org={"Random Projects"}
            text={
              `Distest is a testing library I wrote for Discord bots that allows for full integration tests of bots, 
              improving the discord bot development workflow significantly. As far as I know, it's the only tool 
              available for this sort of testing.`
            }
            link={"https://github.com/JakeCover/distest"}
          />
          <SmallElementPic
            image_url={Scoresaver}
            image_alt={"Scoresaver Logo"}
            title={"ScoreSaver"}
            org={"Random Projects"}
            text={
              `A Chrome extension to help you download beatsaber songs directly from ScoreSaber. No more searching for 
              mapper names on BeatSaver, just download the newest ranked songs directly!`
            }
            link={"https://github.com/JakeCover/ScoreSaverExtention"}
          />

          <MediumElement
            image_url={Hashicorp}
            image_alt={"HashiCorp Logo"}
            title={"Hashicorp Stack Sysadmin"}
            org={"CodeDay, Random Projects"}
            text={
              `I've setup and used a stack consisting of Nomad, Consul, and Vault along with Traefik both at CodeDay, 
              where it runs almost every service we have, as well as at home, where I use it to run a number of 
              assorted services on a few old machines. I strongly recommend it, it's very powerful and not all that 
              complex to get started with at any scale, from one personal server to large corporate backends.`
            }
          />
          <SmallElement
              title={"Personal Website"}
              org={"Random Projects"}
              text={
                `You're looking at it! There's not a whole lot to this, it's just a React site hosted on GitHub Pages, 
                but I didn't know React before starting on this so I'm pretty proud of it.`
              }
              link={"https://github.com/JakeCover/PersonalWebsite_Static"}
          />
          <SmallElement
            title={"Nomad Job Templates Tool"}
            link={"https://github.com/JakeCover/NomadJobTemplatesTool"}
            org={"Random Projects"}
            text={
              `A little custom tool to allow you to use jinga-esque text substitutions in Nomad jobfiles to help 
              centralize the definition of service traefik tags. This mainly makes it easier to update and change 
              networking configuration across many jobs easily.`
            }
          />
          <SmallElement
            title={"Assorted Discord Bots"}
            org={"Random Projects"}
            text={
              `I've made quite a number of discord bots over time! Some of them, like ReplyBot, which added a reply 
              functionality to Discord years before they finally implemented it first-party, have been obsoleted 
              nowadays, others like DiscordChannelMirror really aren't significantly notable, and many more have been 
              lost to time and past me's lack of understanding of the importance of backup. I digress, however I really
               do love writing these sorts of applications!`
            }
          />
          <SmallElement
            title={"OVRTools"}
            org={"Random Projects"}
            link={"https://github.com/OVRTools"}
            text={
              `This one's a bit more work in progress than some of the others here. It is a set of tools to help people 
              develop OpenVR plugins more easily and independently from Unity. It will eventually grow to include 
              multiple additional input methods and other tools to allow users to interact with other OVR plugins more
              easily.`
            }
          />
        </div>
      </div>
    </div>
  );
}
