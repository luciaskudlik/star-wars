import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Container, LinearProgress } from "@mui/material";

import TabsContainer from "./components/TabsContainer/TabsContainer";
import { TabsData } from "./shared/interfaces";

function App() {
  const [data, setData] = useState<TabsData>();

  const fetchData = async () => {
    const peopleData = await axios.get("https://swapi.dev/api/people");
    const people = peopleData.data.results;
    const planetsData = await axios.get("https://swapi.dev/api/planets");
    const planets = planetsData.data.results;
    const starshipsData = await axios.get("https://swapi.dev/api/starships");
    const starships = starshipsData.data.results;

    setData({ people, planets, starships });
  };

  useEffect(() => {
    if (!data) {
      fetchData();
    }
  }, [data]);

  return (
    <Container>
      {data ? (
        <TabsContainer data={data} />
      ) : (
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "200px",
          }}
        >
          <img src="/starwars.jpeg" alt="starwars" />
          <LinearProgress />
        </Box>
      )}
    </Container>
  );
}

export default App;
