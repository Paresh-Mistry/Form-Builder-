// src/layout/MainLayout.tsx
import React from "react";
import Navbar from "../components/Navbar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="">{children}</main>
    </div>
  );
};

export default MainLayout;
