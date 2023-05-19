import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Pokemon from "./components/Pokemon";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const getAllPokemons = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`;
    const response = await fetch(url);
    const data = await response.json();

    const arrayPokemon = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();

      return data;
    });

    const results = await Promise.all(arrayPokemon);

    setPokemon(results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <>
      <h1 className="text-6xl text-center">Fight Simulator Pokemon</h1>
      {console.log(pokemon)}
      <Grid container rowSpacing={1}>
        {pokemon.map((poke) => (
          <Pokemon poke={poke} key={poke.id} />
        ))}
      </Grid>
    </>
  );
}

export default App;
