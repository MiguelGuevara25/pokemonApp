import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import ModalViewMorePokemon from "./ModalViewMorePokemon";
import { useState } from "react";

function Pokemon({ poke }) {
  const [modalViewPokemon, setModalViewPokemon] = useState(false);

  const showModalPokemon = () => {
    setModalViewPokemon(true);
  };

  return (
    <>
      {modalViewPokemon && <ModalViewMorePokemon poke={poke} />}
      <Grid item key={poke.id} xs={6} sm={4} md={3}>
        <Card>
          <CardMedia
            sx={{ height: 100, width: 100 }}
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

              <Button variant="contained">Fight</Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default Pokemon;
