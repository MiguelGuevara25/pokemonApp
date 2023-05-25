import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ModalViewMorePokemon = ({ poke, setModalViewPokemon }) => {
  return (
    <div className="fixed inset-x-0 bottom-0 top-0 z-[1000] flex w-full items-center justify-center bg-black bg-opacity-50">
      <Card>
        <div className="flex items-center p-3 flex-col md:flex-row">
          <CardMedia
            sx={{ height: 200, width: 200 }}
            image={poke.sprites.front_default}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="capitalize"
            >
              {poke.name}
            </Typography>

            <div className="capitalize">
              <Typography>
                Health: <span>{poke.stats[0].base_stat} HP</span>
              </Typography>

              <Typography>
                Weight: <span>{poke.weight}</span>
              </Typography>

              <Typography>
                Ability: <span>{poke.abilities[0].ability.name}</span>
              </Typography>

              <Typography>
                Special Ability: <span>{poke.abilities[1].ability.name}</span>
              </Typography>

              <Typography>
                Attack: <span>{poke.stats[1].base_stat}</span>
              </Typography>

              <Typography>
                Defense: <span>{poke.stats[2].base_stat}</span>
              </Typography>

              <Typography>
                Special Attack: <span>{poke.stats[3].base_stat}</span>
              </Typography>
            </div>
          </CardContent>
        </div>
      </Card>

      <div
        className="absolute inset-0"
        onClick={() => setModalViewPokemon(false)}
      />
    </div>
  );
};

export default ModalViewMorePokemon;
