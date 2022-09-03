import React, { useCallback, useState } from "react";

import { TextFieldProps } from "./types";
import * as Styled from "./TextField.styled";

const TextField: React.FunctionComponent<TextFieldProps> = ({
  errorMessage,
  name,
  onChange,
  placeholder,
  required,
  type,
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
    <Styled.TextField error={error}>
      <input
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
      {error && <b>{errorMessage}</b>}
    </Styled.TextField>
  );
};

export default TextField;
