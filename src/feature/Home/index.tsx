// Material UI
import { Container, Grid, Typography, Button } from "@mui/material";

import FlexColBox from "../../components/box/col-box";
// Custom Styles
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <FlexColBox gap={5} alignItems="center">
          <Typography variant="h1">Welcome, to TaScheduler</Typography>

          <FlexColBox gap={3} sx={{ width: "70%", textAlign: "center" }}>
            <Typography
              variant="body1"
              fontSize="1.3rem"
              sx={{ textAlign: "center" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores suscipit ab expedita reprehenderit pariatur
              repudiandae? Reprehenderit modi minima ab quam quia! Animi debitis
              ad eum porro! Fugit nesciunt saepe quibusdam!
            </Typography>

            <Button variant="outlined" size="large">
              Get Started
            </Button>
          </FlexColBox>
        </FlexColBox>
      </Container>
    </div>
  );
};

export default Home;
