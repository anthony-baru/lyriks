import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  artistId,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div className="flex flex-col">
    {console.log("relatedSongData", data)}
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
    <div className="mt-6 w-full flex flex-col">
      {data.length > 0 ? (
        data?.map((song, i) => (
          <SongBar
            key={`${song?.key}-${artistId}`}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))
      ) : (
        <p className="text-gray-400 text-base my-1">
          Sorry, no related songs found.
        </p>
      )}
    </div>
  </div>
);

export default RelatedSongs;
