import Footer from "@/components/ui/customUI/footer";
import Navbar from "@/components/ui/customUI/navbar";
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
