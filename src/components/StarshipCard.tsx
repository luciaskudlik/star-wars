import { Card, CardContent, Divider, Typography } from "@mui/material";

import { Starship } from "../shared/interfaces";

function StarshipCard(props: { starship: Starship }) {
  const { name, manufacturer, length, model, consumables } = props.starship;

  return (
    <Card className="card" variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {manufacturer}
        </Typography>
        <Typography variant="h5" component="div" color="primary">
          {name}
        </Typography>
        <Divider variant="middle" style={{ margin: "12px 0" }} />

        <Typography variant="body2" color="text.primary">
          length: {length}
        </Typography>
        <Typography variant="body2" color="text.primary">
          model: {model}
        </Typography>
        <Typography variant="body2" color="text.primary">
          consumables: {consumables}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StarshipCard;
