import { signOut } from "next-auth/react";
import { BiLogOut } from "react-icons/bi";
import { BsBellFill, BsFillPeopleFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";

import useCurrentUser from "@/hooks/useCurrentUser";

import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarPostButton from "./SidebarPostButton";

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      icon: HiHome,
      label: "Home",
      href: `/`,
      auth: true,
    },
    {
      icon: FaUser,
      label: "Profile",
      href: `/users/${currentUser?.id}`,
      auth: true,
    },
    {
      icon: BsBellFill,
      label: "Notifications",
      href: "/notifications",
      auth: true,
      alert: currentUser?.hasNotification,
    },
  ];

  return (
    <div className="w-full h-full select-none">
      <div className="w-full flex xl:flex-col">
        <div className="w-full flex-grow flex justify-start">
          <SidebarLogo />
        </div>
        <div className="xl:w-full flex xl:flex-col items-center gap-1">
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              alert={item.alert}
              auth={item.auth}
              href={item.href}
              icon={item.icon}
              label={item.label}
            />
          ))}
          <div className="md:hidden">
            <SidebarItem
              key="/people"
              auth
              href="/people"
              icon={BsFillPeopleFill}
              label="People"
            />
          </div>
          {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              icon={BiLogOut}
              label="Logout"
            />
          )}
          <SidebarPostButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
