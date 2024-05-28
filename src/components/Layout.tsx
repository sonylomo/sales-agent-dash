import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <SideBar>
        <Outlet/>
      </SideBar>
    </div>
  );
};

export default Layout;
