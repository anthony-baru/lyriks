import React from "react";
import { Error, Loader, SongCard, ArtistCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading top charts" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left">Top Artists</h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks
          ?.slice(0, 6)
          .reverse()
          .map((track, i) => (
            <ArtistCard key={track.key} track={track} />
          ))}
      </div>
    </div>
  );
};

export default TopArtists;
