import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import type { NextPage } from "next";
import { BiLogIn } from "react-icons/bi";

import { localStorageSetItem } from "@/app/funcs/local-storage";
import useForm from "@/app/hooks/form";
import Button from "@/components/button";
import TextField from "@/components/text-field";
import Membership from "layouts/membership";
import Popup from "@/widgets/popup";

import { LoginRequest } from "./types";
import * as Styled from "./Login.styled";

const Login: NextPage = () => {
  const [users, setUsers] = useState<Array<any>>();
  const [popupVisible, setPopupVisible] = useState<boolean>(false);

  const router = useRouter();

  const form = useForm<LoginRequest>({
    initialValues: { password: "", username: "" },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    users?.find((user) => {
      if (
        user.username === form.values.username &&
        user.password === form.values.password
      ) {
        localStorageSetItem({
          key: "access_token",
          value: user,
        });
        router.push("/home");
      } else {
        console.log("hata");
        setPopupVisible(true);
      }
    });
  };

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users") as any));
  }, []);

  return (
    <Membership pageTitle="Login - Q">
      <Styled.Login>
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
          <Button icon={<BiLogIn size={30} />} text="Login" type="submit" />
        </form>
        <Link href="/membership/register">
          <a>Have you registered yet ?</a>
        </Link>
      </Styled.Login>
      <Popup
        description="Invalid username"
        setVisible={setPopupVisible}
        title="Error"
        visible={popupVisible}
      />
    </Membership>
  );
};

export default Login;
