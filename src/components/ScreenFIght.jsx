import { Typography, CardMedia } from "@mui/material";

const ScreenFIght = ({ pokemones, setModalFightPokemon }) => {
  return (
    <div>
      <div className="fixed inset-x-0 bottom-0 top-0 z-[1000] flex w-full items-center justify-center bg-black">
        <div className="bg-white w-11/12 h-[95%] flex justify-center items-center">
          {pokemones.map((poke, index) => (
            <div key={index}>
              <CardMedia
                sx={{
                  height: 200,
                  width: 200,
                  transform: index === 0 && "scaleX(-1)",
                }}
                image={poke.sprites.front_default}
              />

              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="capitalize"
              >
                {poke.name}
              </Typography>
            </div>
          ))}
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
