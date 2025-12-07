"use client";

type Props = { spotifyEmbedSrc?: string };

export default function SpotifyTile({
  spotifyEmbedSrc = "https://open.spotify.com/embed/track/1oFAF1hdPOickyHgbuRjyX?utm_source=generator",
}: Props) {
  return (
    <div className="w-full h-full bg-black rounded-[40px] overflow-hidden">
      {spotifyEmbedSrc ? (
        <div className="w-full h-full">
          <iframe
            loading="lazy"
            src={spotifyEmbedSrc}
            width="100%"
            height="152px"
            allow="encrypted-media; autoplay"
            title="Spotify player"
          />
        </div>
      ) : null}
    </div>
  );
}
