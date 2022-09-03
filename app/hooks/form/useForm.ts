import React, { useCallback, useState } from "react";

import { FormProps } from "./types";

const useForm = <T extends Record<string, any>>({
  initialValues = {} as T,
}: FormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((_values) => ({ ..._values, [e.target.name]: e.target.value }));
    },
    []
  );

  return { values, handleChange };
};

export default useForm;
