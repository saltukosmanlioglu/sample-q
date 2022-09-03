import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { IoIosCreate } from "react-icons/io";

import { localStorageSetItem } from "@/app/funcs/local-storage";
import useForm from "@/app/hooks/form";
import Button from "@/components/button";
import TextField from "@/components/text-field";
import Membership from "@/layout/membership";

import { LoginRequest } from "./types";
import * as Styled from "./Register.styled";

const Register: NextPage = () => {
  const [users, setUsers] = useState<Array<LoginRequest>>();
  const [popupVisible, setPopupVisible] = useState<boolean>(false);

  const router = useRouter();

  const form = useForm<LoginRequest>({
    initialValues: {
      id: "",
      password: "",
      passwordConfirm: "",
      username: "",
    },
  });

  const id = `${Math.floor(
    Math.random() * 10000
  )}-${form.values.username.substring(0, 2)}-${form.values.password.substring(
    0,
    5
  )}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (users && form.values.password === form.values.passwordConfirm) {
      users.push({ ...form.values, id });

      localStorageSetItem({
        key: "users",
        value: [...users],
      });

      router.push("/membership/login");
    } else {
      setPopupVisible(true);
    }
  };

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users") || "[]"));
  }, []);

  return (
    <Membership pageTitle="Login - Q">
      <Styled.Register>
        <p>You can register by filling out the fields below.</p>
        <form onSubmit={handleSubmit}>
          <TextField
            errorMessage="Please enter your username.. *"
            name="username"
            onChange={form.handleChange}
            placeholder="User name *"
            required
            type="text"
            value={form.values.username}
          />
          <TextField
            errorMessage="Please enter your password.. *"
            name="password"
            onChange={form.handleChange}
            placeholder="Password *"
            required
            type="password"
            value={form.values.password}
          />
          <TextField
            errorMessage="Please enter your password again.. *"
            name="passwordConfirm"
            onChange={form.handleChange}
            placeholder="Password again *"
            required
            type="password"
            value={form.values.passwordConfirm}
          />
          {!(form.values.password === form.values.passwordConfirm) && (
            <p style={{ color: "red" }}>Password should be same!</p>
          )}
          <Button
            icon={<IoIosCreate size={30} />}
            text="Register"
            type="submit"
          />
        </form>
      </Styled.Register>
    </Membership>
  );
};

export default Register;
