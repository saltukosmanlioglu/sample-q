import React, { useCallback, useState } from "react";

import { TextAreaProps } from "./types";
import * as Styled from "./TextArea.styled";

const TextArea: React.FunctionComponent<TextAreaProps> = ({
  errorMessage,
  name,
  onChange,
  placeholder,
  required,
  rows,
  value,
}) => {
  const [error, setError] = useState<boolean>(false);

  const onBlur = useCallback(() => {
    if (required && value.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  }, [value]);

  return (
    <Styled.TextArea error={error}>
      <textarea
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        value={value}
      />
      {error && <b>{errorMessage}</b>}
    </Styled.TextArea>
  );
};

export default TextArea;
