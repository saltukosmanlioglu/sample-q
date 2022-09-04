import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Loader from "@/components/loader";

import { CheckTokenProps } from "./types";

const CheckToken: React.FunctionComponent<CheckTokenProps> = ({ children }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const router = useRouter();

  const checkToken = useCallback(() => {
    if (
      !localStorage.getItem("access_token") &&
      !router.asPath.includes("membership")
    ) {
      setIsActive(false);
      router.push("/membership/login");
    } else {
      setIsActive(true);
    }
  }, [router.asPath]);

  useEffect(() => checkToken(), [checkToken]);

  return isActive ? <React.Fragment>{children}</React.Fragment> : <Loader />;
};

export default CheckToken;
