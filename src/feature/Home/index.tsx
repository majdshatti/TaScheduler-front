// Material UI
import { Container, Typography } from "@mui/material";
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
          height: "100vh",
        }}
      >
        <Typography variant="h1">Welcome, to TaScheduler</Typography>
      </Container>
    </div>
  );
};

export default Home;
