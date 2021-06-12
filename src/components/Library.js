import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {
  return (
    <div className={`library ${ libraryStatus ? 'active-library' : ''} `}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              song={song}
              audioRef={audioRef}
              isPlaying={isPlaying}
              songs={songs}
              setCurrentSong={setCurrentSong}
              setSongs={setSongs}
              id={song.id}
              key={song.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
