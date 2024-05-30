// import { Menu } from "@/components/Menu";
import SideBar from "@/components/SideBar";
import { FaSalesforce } from "react-icons/fa6";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import MenuBar from "./MenuBar";

const Layout = () => {
  const location = useLocation();
  const { id } = useParams();

  return (
    <>
      <div className="flex items-center justify-between md:hidden px-10 md:px-0 bg-white">
        <FaSalesforce className="text-primary-pink size-24" />
        <span className="sr-only">Sales Agent Dashboard</span>

        <MenuBar />
      </div>

      {/* <Menu /> */}
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5 relative">
            <SideBar className="hidden lg:block" />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">
                {!id && (
                  <div className="space-between flex items-center px-8">
                    <h2 className="text-3xl font-bold tracking-tight">
                      {location.pathname === "/"
                        ? "Dashboard"
                        : "School Management"}
                    </h2>
                    <div className="ml-auto">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/sonylomo.png"
                          alt="Sonia Lomo"
                        />
                        <AvatarFallback>SL</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                )}

                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
