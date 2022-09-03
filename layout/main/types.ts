import React from "react";

import { HeaderProps } from "./components/header";

export interface MainProps {
  children: React.ReactNode;
  headerProps: HeaderProps;
  pageTitle: string;
}
