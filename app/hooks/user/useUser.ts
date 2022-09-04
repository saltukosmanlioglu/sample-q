import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { UserProps } from "@/app/types";

const useUser = () => {
  const [userInfo, setUserInfo] = useState<Omit<UserProps, "password">>({
    id: "",
    username: "",
  });

  const router = useRouter();

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("access_token") || "{}"));
  }, [router]);

  return { userInfo };
};

export default useUser;
