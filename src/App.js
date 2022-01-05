import React from 'react';
import Grid from './Grid';
import movies from './data_a';
import pokemon from './data_b';

const Trailer = ({ data }) => {
  const { url } = data?.Trailer;

  if( !url ) {
    return;
  }

  return (
    <a href={url}
      target="_blank"
      rel="noopener noreferrer">
      trailer...
    </a>
  );
}

const PokemonName = ({ data }) => {
  const { name } = data;

  if( !name ) {
    return;
  }

  return <span style={{ textTransform: 'capitalize' }}>{name}</span>
};

const moviesConfig = [
  {
    title: 'id',
    field: 'imdbID'
  },
  {
    title: 'title',
    field: 'Title'
  },
  {
    title: 'rating',
    field: 'imdbRating',
  },
  {
    title: 'trailer',
    field: 'Trailer',
    component: Trailer
  }
];

const pokemonConfig = [
  {
    title: 'pokedex #',
    field: 'number'
  },
  {
    title: 'name',
    field: 'name',
    component: PokemonName
  }
];

const App = () => (
  <div>
    <h2>Movies</h2>
    <Grid config={moviesConfig} data={movies} />

    <h2>Pokemon</h2>
    <Grid config={pokemonConfig} data={pokemon} />
  </div>
);

export default App;
