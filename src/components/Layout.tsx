import { LazyLoadImage } from "react-lazy-load-image-component";

// import { Menu } from "@/components/Menu";
import SideBar from "@/components/SideBar";
import { Outlet, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <div className="md:hidden">
        <LazyLoadImage
          src="/examples/music-light.png"
          width={1280}
          height={1114}
          alt="Music"
          className="block dark:hidden"
        />
        <LazyLoadImage
          src="/examples/music-dark.png"
          width={1280}
          height={1114}
          alt="Music"
          className="hidden dark:block"
        />
      </div>

      {/* <Menu /> */}
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5 relative">
            <SideBar className="hidden lg:block" />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">
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
                {/* Body of dashboard */}
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
