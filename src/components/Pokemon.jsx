import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import ModalViewMorePokemon from "./ModalViewMorePokemon";
import ScreenFIght from "./ScreenFIght";
import { useState } from "react";

function Pokemon({ poke }) {
  const [modalViewPokemon, setModalViewPokemon] = useState(false);
  const [modalFightPokemon, setModalFightPokemon] = useState(false);

  const showModalPokemon = () => {
    setModalViewPokemon(true);
  };

  const showFightPokemon = () => {
    setModalFightPokemon(true);
  };

  return (
    <>
      {modalViewPokemon && (
        <ModalViewMorePokemon
          poke={poke}
          setModalViewPokemon={setModalViewPokemon}
        />
      )}
      {modalFightPokemon && (
        <ScreenFIght setModalFightPokemon={setModalFightPokemon} />
      )}

      <Grid item key={poke.id} xs={6} sm={4} md={3}>
        <Card>
          <div className="flex flex-col justify-center items-center">
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

              <Typography>
                Health: <span>{poke.stats[0].base_stat}</span>
              </Typography>
              <div className="flex gap-5">
                <Button variant="contained" onClick={showModalPokemon}>
                  View More
                </Button>

                <Button variant="contained" onClick={showFightPokemon}>
                  Fight
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </Grid>
    </>
  );
}

export default Pokemon;
