import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";

const DefaultLayout = () => {
  return (
    <>
      ADMIN LAYOUT
      <TheNavbar />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
