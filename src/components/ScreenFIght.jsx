import { Typography, Button, CardMedia } from "@mui/material";
import { useState } from "react";

const ScreenFIght = ({ pokemones }) => {
  return (
    <div>
      <div className="fixed inset-x-0 bottom-0 top-0 z-[1000] flex w-full items-center justify-center bg-black">
        <div className="bg-white w-11/12 h-[95%] flex justify-center items-center">
          {pokemones.map((poke, index) => {
            return (
              <div key={index} className="flex flex-col items-center">
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

                <progress
                  id="file"
                  max={poke.stats[0].base_stat}
                  value={poke.stats[0].base_stat}
                ></progress>
                <Button variant="contained">
                  {poke.abilities[0].ability.name}
                </Button>
                <Button variant="contained">
                  {poke.abilities[1].ability.name}
                </Button>
                <p>{poke.stats[1].base_stat}</p>
                <p>{poke.stats[2].base_stat}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScreenFIght;
