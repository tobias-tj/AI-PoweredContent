import React from "react";
import Sidebar from "./_components/sidebar";
import AIUsage from "./_components/ai-usage";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="bg-gray-50 h-screen flex">
      <div className="md:w-64 hidden md:flex flex-col fixed h-full">
        <Sidebar />
        <div className="mt-auto">
          <AIUsage />
        </div>
      </div>
      <div className="md:ml-64 w-full bg-gray-50 h-fit pb-5">{children}</div>
    </div>
  );
};

export default DashboardLayout;
