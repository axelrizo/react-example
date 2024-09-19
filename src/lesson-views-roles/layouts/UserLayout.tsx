import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";

const DefaultLayout = () => {
  return (
    <>
      USER LAYOUT
      <TheNavbar />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
