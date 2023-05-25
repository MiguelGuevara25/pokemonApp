const ScreenFIght = ({ setModalFightPokemon }) => {
  return (
    <div>
      <div className="fixed inset-x-0 bottom-0 top-0 z-[1000] flex w-full items-center justify-center bg-black bg-opacity-50">
        <h1 className="bg-white">HOLA MUNDO DESDE SCREEN FIGHT</h1>
      </div>

      <div
        className="absolute inset-0"
        onClick={() => {
          console.log("HOLA");
        }}
        // onClick={() => setModalFightPokemon(false)}
      />
    </div>
  );
};

export default ScreenFIght;
