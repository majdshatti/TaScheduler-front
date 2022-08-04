import { Outlet } from "react-router-dom";
import { Fragment } from "react";
// Components
import NavBar from "../navbar";

const HomeLayout = () => (
  <Fragment>
    <NavBar />
    <Outlet />
  </Fragment>
);

export default HomeLayout;
