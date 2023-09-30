import React from "react";

import FollowBar from "@/components/layout/FollowBar";
import Sidebar from "@/components/layout/Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-fit bg-black">
      <div className="sticky top-0 z-40 flex xl:hidden w-full xl:w-[16rem]  bg-neutral-900 xl:rounded-3xl p-2 xl:p-4">
        <Sidebar />
      </div>
      <div className="relative container flex h-full gap-2 xl:gap-4 p-4 mx-auto  max-w-6xl">
        <div className=" fixed  hidden xl:flex w-fit xl:w-[16rem]  bg-neutral-900 rounded-3xl p-2 xl:p-4">
          <Sidebar />
        </div>
        <div className="hidden xl:flex w-fit xl:w-[16rem]  p-2 xl:p-4"></div>
        <div className="h-fit flex-grow flex flex-col  bg-neutral-900 rounded-3xl py-2 px-4 ">
          {children}
        </div>
        <div className="hidden md:block w-full max-w-[18rem] bg-neutral-900 rounded-xl p-4">
          <FollowBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
