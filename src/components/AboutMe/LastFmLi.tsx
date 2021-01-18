import {useEffect, useState} from "react";
import axios from "axios";

interface NowPlayingData {
    introduction: string;
    lastfm: {
        artist: string;
        track: string;
        playing: boolean;
        url: string | undefined;
    };
}

export function LastFmLi() {
    const [nowPlayingData, setNowPlayingData] = useState<NowPlayingData>({
        introduction: "",
        lastfm: {
            artist: "nobody",
            playing: false,
            track: "nothing",
            url: undefined,
        },
    });

    async function updateNowPlaying() {
        try {
            const songRequestData = await axios.get("https://api.jakecover.me");

            setNowPlayingData(songRequestData.data);
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
        return (
            <li>
                <a
                    href={nowPlayingData.lastfm.url}
                    target={"_blank"}
                    rel="noreferrer"
                    style={{color: "inherit", textDecoration: "inherit"}}
                >
                    listening to {nowPlayingData.lastfm.track} by{" "}
                    {nowPlayingData.lastfm.artist}
                </a>
            </li>
        );
    }
    return <li>not listening to anything right now.</li>;
}