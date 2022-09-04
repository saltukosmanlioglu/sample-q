import styled from "styled-components";

import { colors } from "@/constants/colors";

export const Header = styled.header`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 30px 0;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > a:nth-child(1) {
    position: absolute;
    left: 20px;
  }

  b {
    font-size: 20px;
  }
`;

export const Menu = styled.div`
  position: absolute;
  right: 20px;
  border-radius: 12px;
  max-width: 250px;
`;

export const Profile = styled.button`
  padding: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 200px;

  svg {
    margin-left: 20px;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 80px;
  z-index: 100;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 200px;
  overflow: hidden;

  button {
    width: 100%;
    padding: 20px;
    background-color: #fff;
  }

  & > button:not(:last-child) {
    border-bottom: 1px solid ${() => colors.mainColor};
  }
`;
