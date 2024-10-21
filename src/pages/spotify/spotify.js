import getSpotifyToken from '../../utils/spotifytoken';
import './spotify.css';
import React, { useState, useEffect } from 'react';


let token = getSpotifyToken();

 export default function Spotify() {


  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      const response = await fetch('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg', {
        headers: {
          Authorization: token,
        },
      });
      const data = await response.json();
    //   setArtists(data.artists.items);
    console.log(data.artists)
    };
    fetchArtists();
  }, []);

  return (
    <div>
      <h1>Top Artists by Monthly Listeners</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name} - {artist.popularity} popularity score
          </li>
        ))}
      </ul>
    </div>
  );
};



