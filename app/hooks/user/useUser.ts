import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { localStorageGetItem } from "@/app/funcs/local-storage";
import { UserProps } from "@/app/types";

const useUser = () => {
  const [userInfo, setUserInfo] = useState<UserProps>();

  const router = useRouter();

  useEffect(() => {
    setUserInfo(
      JSON.stringify(localStorageGetItem({ key: "access_token" })) as any
    );
  }, [router]);

  return { userInfo };
};

export default useUser;
