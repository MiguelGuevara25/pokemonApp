import { useEffect } from "react";

function App() {
  useEffect(() => {
    const consult = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon`;
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);
    };

    consult();
  }, []);

  return (
    <>
      <h1>Fight Simulator Pokemon</h1>
    </>
  );
}

export default App;
