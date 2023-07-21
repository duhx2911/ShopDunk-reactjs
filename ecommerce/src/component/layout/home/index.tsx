import React, { ReactNode } from "react";
import Header from "./Header";
import Newletter from "./Newletter";
import Footer from "./Footer";
import ContentHome from "./content";

const HomeLayouts = ({ children }: { children: ReactNode }) => {
  return (
    <div className="App">
      <Header />
      <ContentHome>{children}</ContentHome>
      <Newletter />
      <Footer />
    </div>
  );
};

export default HomeLayouts;
