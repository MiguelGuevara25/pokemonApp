const ScreenFIght = ({ poke, setModalFightPokemon }) => {
  return (
    <div>
      <div className="fixed inset-x-0 bottom-0 top-0 z-[1000] flex w-full items-center justify-center bg-black">
        <div className="bg-white w-11/12 h-[95%]">
          <div key={poke.id}>
            <div className="flex flex-col justify-center items-center">
              <img src={poke.sprites.front_default} />
              <div>
                <div>{poke.name}</div>

                <div>
                  Health: <span>{poke.stats[0].base_stat}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0"
          onClick={() => setModalFightPokemon(false)}
        />
      </div>
    </div>
  );
};

export default ScreenFIght;
