import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import './Aside.css';

const marvelHeroes = [
  'Iron Man',
  'Captain America',
  'Thor',
  'Hulk',
  'Black Widow',
  'Hawkeye',
  'Spider-Man',
  'Black Panther',
  'Doctor Strange',
  'Scarlet Witch',
  'Captain Marvel',
];

const Aside: React.FC = () => {
  return (
    <aside className="aside-container">
      <h3>Héroes de Marvel</h3>

      <Autocomplete
        disablePortal
        options={marvelHeroes}
        sx={{ width: 250 }}
        renderInput={(params) => <TextField {...params} label="Selecciona un héroe" />}
      />

      <h3 className="aside-video-title">Video recomendado</h3>

      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Marvel Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </aside>
  );
};

export default Aside;
