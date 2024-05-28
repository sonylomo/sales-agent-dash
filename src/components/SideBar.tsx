import { ReactNode } from "react";

const SideBar = ({ children }: { children: ReactNode }) => {
  return <div className="bg-green-500 w-1/3">{children}</div>;
};

export default SideBar;
