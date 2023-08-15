import React, { Fragment, ReactNode } from "react";
import ContentComponent from "./content";
import HeaderAdminComponent from "./header";
const Layouts = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <HeaderAdminComponent />
      <ContentComponent>{children}</ContentComponent>
    </Fragment>
  );
};

export default Layouts;
