import React, { useState } from "react";
import defaultSong from "../data/song.mp3";

const songs = [
  {
    title: "Music Number 1",
    artists: "Aman",
    song: defaultSong,
    img: "https://api.prod.headspace.com/content/media-items/69454/download-image?width=224",
  },
  {
    title: "Music Number 2",
    artists: "Aman",
    song: defaultSong,
    img: "https://api.prod.headspace.com/content/media-items/80838/download-image?width=224",
  },
  {
    title: "Music Number 3",
    artists: "Aman",
    song: defaultSong,
    img: "https://api.prod.headspace.com/content/media-items/50735/download-image?width=224",
  },
  {
    title: "Music Number 4",
    artists: "Aman",
    song: defaultSong,
    img: "https://api.prod.headspace.com/content/media-items/82503/download-image?width=224",
  },
  {
    title: "Music Number 5",
    artists: "Aman",
    song: defaultSong,
    img: "https://api.prod.headspace.com/content/media-items/97889/download-image?width=224",
  },
];

const BreatheMusic = () => {
  const [currentSong, setCurrentSong] = useState(null);

  const playSong = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="music-list-container p-4 flex flex-col items-center justify-center ">
      {songs.map((music, index) => (
        <div
          key={index}
          className="card flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-4 cursor-pointer hover:bg-gray-100 w-[70%]"
          onClick={() => playSong(music.song)}
        >
          <div className="text-left">
            <h2 className="text-lg font-semibold">{music.title}</h2>
            <p className="text-sm text-gray-600">{music.artists}</p>
          </div>

          <div className="right-image ml-4">
            <img
              src={music.img}
              alt={music.title}
              className="w-24 h-24 object-cover rounded-lg"
            />
          </div>
        </div>
      ))}

      {currentSong && (
        <audio controls autoPlay className="mt-4 w-full">
          <source src={currentSong} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default BreatheMusic;
