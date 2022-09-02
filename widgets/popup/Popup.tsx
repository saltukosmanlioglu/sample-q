import React, { useEffect } from "react";
import { GrFormClose } from "react-icons/gr";

import { PopupProps } from "./types";
import * as Styled from "./Popup.styled";

const Popup: React.FunctionComponent<PopupProps> = ({
  description,
  title,
  setVisible,
  visible,
}) => {
  useEffect(() => {
    setTimeout(() => {
      if (visible === true) {
        setVisible(false);
      }
    }, 3000);
  }, [visible]);

  return visible ? (
    <Styled.Popup>
      <div>
        <b>{title}</b>
        <button onClick={() => setVisible(false)}>
          <GrFormClose size={20} />
        </button>
      </div>
      <p>{description}</p>
    </Styled.Popup>
  ) : null;
};

export default Popup;
