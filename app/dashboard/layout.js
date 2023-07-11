import Username from "@/components/Username";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <section>
      {/* <Username /> */}
      <div className="mt-[60px]">{children}</div>
    </section>
  );
};

export default DashboardLayout;
