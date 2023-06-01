import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Pokemon from "./components/Pokemon";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemones, setPokemones] = useState([]);
  const [contadores, setContadores] = useState(0);
  const [modalFightPokemon, setModalFightPokemon] = useState(false);

  const getAllPokemons = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`;
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

  const selectPokemonFight = (poke) => {
    setPokemones([...pokemones, poke]);
    setContadores(contadores + 1);
    contadores === 1 && setModalFightPokemon(true);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-6xl text-center my-5">Fight Simulator Pokemon</h1>
      <Grid container spacing={2}>
        {pokemon.map((poke) => {
          return (
            <Pokemon
              poke={poke}
              key={poke.id}
              setContadores={setContadores}
              contadores={contadores}
              selectPokemonFight={selectPokemonFight}
              pokemones={pokemones}
              modalFightPokemon={modalFightPokemon}
              setModalFightPokemon={setModalFightPokemon}
            />
          );
        })}
      </Grid>
    </div>
  );
}

export default App;
