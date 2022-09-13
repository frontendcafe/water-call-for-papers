import React from "react";

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <div className="h-full bg-secondary-50">{children}</div>;
};

export default Layout;
