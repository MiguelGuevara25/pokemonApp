import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

function Pokemon({ poke }) {
  return (
    <Grid item key={poke.id} xs={2}>
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
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Pokemon;
