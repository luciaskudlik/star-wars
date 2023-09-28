import { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import axios from "axios";

import { Person } from "../shared/interfaces";

function PersonCard(props: { character: Person }) {
  const {
    name,
    eye_color,
    hair_color,
    skin_color,
    homeworld,
    height,
    gender,
    birth_year,
  } = props.character;

  const [planet, setPlanet] = useState<string>();

  const fetchData = async () => {
    const planet = await axios.get(homeworld);
    setPlanet(planet.data.name);
  };

  useEffect(() => {
    if (!planet) {
      fetchData();
    }
  }, [planet]);

  return (
    <Card className="card" variant="outlined">
      <CardContent>
        {planet ? (
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {planet}
          </Typography>
        ) : (
          <LinearProgress style={{ margin: "12px 0" }} />
        )}
        <Typography variant="h5" component="div" color="primary">
          {name}
        </Typography>
        <Grid container spacing={1} mt={0.3}>
          <Grid item>
            <Grid container>
              <CalendarMonthIcon fontSize="small" />
              <Typography variant="body2" color="text.primary" ml={"5px"}>
                {birth_year}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container>
              <PersonIcon fontSize="small" />
              <Typography variant="body2" color="text.primary" ml={"5px"}>
                {gender !== "n/a" ? gender : "-"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider variant="middle" style={{ margin: "12px 0" }} />
        <Typography variant="body2" color="text.primary">
          height: {height}cm
        </Typography>
        <Typography variant="body2" color="text.primary">
          eye color: {eye_color}
        </Typography>
        <Typography variant="body2" color="text.primary">
          hair color: {hair_color}
        </Typography>
        <Typography variant="body2" color="text.primary">
          skin color: {skin_color}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PersonCard;
