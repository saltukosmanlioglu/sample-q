import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";

import useUser from "@/app/hooks/user";
import { colors } from "@/constants/colors";

import { HeaderProps } from "./types";
import * as Styled from "./Header.styled";

const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
  const [isActive, setIsActive] = useState<boolean>(true);

  const router = useRouter();
  const { userInfo } = useUser();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    router.push("/membership/login");
  };

  return (
    <Styled.Header>
      <Styled.Wrapper>
        <Link href="/home">
          <a>
            <AiFillHome size={30} />
          </a>
        </Link>
        <b>{title}</b>
        <Styled.Menu>
          <Styled.Profile onClick={() => setIsActive(!isActive)}>
            <p>{userInfo.username}</p>
            <RiArrowDownSLine size={25} color={colors.mainColor} />
          </Styled.Profile>
          {isActive && (
            <Styled.Dropdown>
              <button onClick={() => router.push("/my-favorite-movies")}>
                My Favorite TV Shows
              </button>
              <button onClick={handleLogout}>Logout</button>
            </Styled.Dropdown>
          )}
        </Styled.Menu>
      </Styled.Wrapper>
    </Styled.Header>
  );
};

export default Header;
