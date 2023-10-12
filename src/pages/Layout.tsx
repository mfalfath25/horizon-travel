import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <main style={{ height: "100dvh" }}>{children}</main>;
};

export default Layout;
