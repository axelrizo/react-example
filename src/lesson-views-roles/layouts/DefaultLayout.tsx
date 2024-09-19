import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";

const DefaultLayout = () => {
  return (
    <>
      DEFAULT LAYOUT
      <TheNavbar />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
