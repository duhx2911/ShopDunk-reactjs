import React, { Fragment, ReactNode } from "react";
import ContentComponent from "./content";

const Layouts = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <ContentComponent>{children}</ContentComponent>
    </Fragment>
  );
};

export default Layouts;
