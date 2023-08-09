import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === "title" ? (
    <FaPauseCircle onClick={handlePause} />
  ) : (
    <FaPlayCircle onClick={handlePlay} />
  );

export default PlayPause;
