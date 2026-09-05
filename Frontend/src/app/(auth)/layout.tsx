import Footer from "@/src/component/ui/footer";
import Navbar from "@/src/component/ui/navbar";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="min-h-[50vh] justify-center items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default layout;
