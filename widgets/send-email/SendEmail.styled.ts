import styled from "styled-components";

import { colors } from "@/constants/colors";

export const SendEmail = styled.button`
  padding: 10px;
  background-color: ${() => colors.mainColor};
  color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-left: 20px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bottom-to-top 0.5s;

  @keyframes bottom-to-top {
    0% {
      bottom: -2000px;
    }
    100% {
      bottom: 0;
    }
  }
`;

export const ModalDetail = styled.div`
  width: 40%;
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
  position: relative;

  b {
    font-size: 20px;
    text-align: center;
    display: block;
  }

  form {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    & div:last-child {
      margin-left: auto;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;
