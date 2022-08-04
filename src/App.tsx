import { Routes, Route } from "react-router-dom";

// Features
import Home from "./feature/Home";
// Components
import HomeLayout from "./components/layouts/home.layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
