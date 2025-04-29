import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/sidebar/sidebar";

const Layout: React.FC = () => {
  return (
    <div className="flex w-screen min-h-screen bg-[rgb(40,94,146)]">
      <Sidebar />
      <main className="w-full bg-white rounded-lg m-6 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
