import { useState, useEffect } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemon2, setPokemon2] = useState({});

  useEffect(() => {
    const consult = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon`;
      const response = await fetch(url);
      const data = await response.json();

      const url2 = `https://pokeapi.co/api/v2/pokemon/${data.results[4].name}`;
      const response2 = await fetch(url2);
      const data2 = await response2.json();

      setPokemon(data.results);
      setPokemon2(data2);
    };

    consult();
  }, []);

  const { name, sprites } = pokemon2;

  return (
    <>
      <h1>Fight Simulator Pokemon</h1>
      {pokemon.map((poke, id) => (
        <div key={id + 1}>
          <h1 className="capitalize">{poke.name}</h1>
        </div>
      ))}

      <h1>OTRO POKEMON</h1>
      <p className="capitalize">{name}</p>
      <img src={sprites.front_default} alt={name} />
    </>
  );
}

export default App;
