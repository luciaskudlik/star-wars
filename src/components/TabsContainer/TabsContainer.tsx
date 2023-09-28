import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Grid } from "@mui/material";

import PersonCard from "../PersonCard";
import { Person, Planet, Starship, TabsData } from "../../shared/interfaces";
import PlanetCard from "../PlanetCard";
import StarshipCard from "../StarshipCard";

export default function LabTabs(props: { data: TabsData }) {
  const [value, setValue] = React.useState("people");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="People" value="people" />
            <Tab label="Planets" value="planets" />
            <Tab label="Starships" value="starships" />
          </TabList>
        </Box>
        <TabPanel value="people">
          <Grid container spacing={2}>
            {props.data.people.map((person: Person, index: number) => {
              return (
                <Grid item xs={4} key={index}>
                  <PersonCard character={person} />
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
        <TabPanel value="planets">
          <Grid container spacing={2}>
            {props.data.planets.map((planet: Planet, index: number) => {
              return (
                <Grid item xs={4} key={index}>
                  <PlanetCard planet={planet} />
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
        <TabPanel value="starships">
          <Grid container spacing={2}>
            {props.data.starships.map((starship: Starship, index: number) => {
              return (
                <Grid item xs={4} key={index}>
                  <StarshipCard starship={starship} />
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
