import React, { useEffect, useState } from "react";
import { Error, Loader, SongCard } from "../components";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  useGetSongsByCountryQuery,
  useGetTopChartsQuery,
} from "../redux/services/shazamCore";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  //   const { data, isFetching, error } = useGetSongsByCountryQuery(country);
  const { data, isFetching, error } = useGetTopChartsQuery(country);

  useEffect(() => {
    //   at_9FYfIpWwIU0siYKqWEUj5OHepk354
    // axios
    //   .get(
    //     `https://geo.ipify.org/api/v2/country?apiKey=at_9FYfIpWwIU0siYKqWEUj5OHepk354`,
    //   )
    //   .then((res) => {
    //     console.log("🚀 ~ file: AroundYou.jsx:18 ~ .then ~ res:", res);
    //     return setCountry(res?.data?.location?.country);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    //   .finally(() => setLoading(false));
  }, [country]);

  if (isFetching && loading) return <Loader title="Loading songs around you" />;
  if (error && country) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left">
        Around You
        <span className="font-black text-amber-50">{country}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks
          ?.slice(0, 6)
          .reverse()
          .map((song, i) => (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={i}
            />
          ))}
      </div>
    </div>
  );
};

export default AroundYou;
