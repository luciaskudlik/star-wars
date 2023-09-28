import { Card, CardContent, Divider, Typography } from "@mui/material";

import { Planet } from "../shared/interfaces";

function PlanetCard(props: { planet: Planet }) {
  const { name, gravity, terrain, diameter, climate } = props.planet;

  return (
    <Card className="card" variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {terrain}
        </Typography>
        <Typography variant="h5" component="div" color="primary">
          {name}
        </Typography>
        <Divider variant="middle" style={{ margin: "12px 0" }} />
        <Typography variant="body2" color="text.primary">
          climate: {climate}
        </Typography>
        <Typography variant="body2" color="text.primary">
          diameter: {diameter}
        </Typography>
        <Typography variant="body2" color="text.primary">
          gravity: {gravity}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PlanetCard;
