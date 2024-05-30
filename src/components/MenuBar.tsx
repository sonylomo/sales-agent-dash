import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <Menubar className="border-none">
      <MenubarMenu>
        <MenubarTrigger>
          <RxHamburgerMenu className="text-primary-pink size-8" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link to="/">Dashboard</Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Link to="/school-management">School Management</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default MenuBar;
