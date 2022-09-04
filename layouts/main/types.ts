import React from "react";

import { HeaderProps } from "layouts/main/components/header";

export interface MainProps {
  children: React.ReactNode;
  headerProps: HeaderProps;
  pageTitle: string;
}
