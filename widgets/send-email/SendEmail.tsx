import React, { useState } from "react";
import { RiShareBoxLine } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";

import useForm from "@/app/hooks/form";
import Button from "@/components/button";
import TextField from "@/components/text-field";
import { SendEmailRequest } from "@/services/send-email";

import { SendEmailProps } from "./types";
import * as Styled from "./SendEmail.styled";

const SendEmail: React.FunctionComponent<SendEmailProps> = ({ onSubmit }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const form = useForm<SendEmailRequest>({
    initialValues: {
      text: "",
      to: "",
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form.values);
    setModalVisible(false);
  };

  return (
    <React.Fragment>
      <Styled.SendEmail onClick={() => setModalVisible(true)}>
        <p>Share with your friend</p>
        <RiShareBoxLine size={20} />
      </Styled.SendEmail>
      {modalVisible && (
        <Styled.Modal>
          <Styled.ModalDetail>
            <Styled.CloseButton onClick={() => setModalVisible(false)}>
              <IoIosClose size={40} />
            </Styled.CloseButton>
            <b>Share with your friend !!!</b>
            <form onSubmit={handleSubmit}>
              <TextField
                errorMessage="Please enter your friend's email.. *"
                name="to"
                onChange={form.handleChange}
                placeholder="Email *"
                required
                type="email"
                value={form.values.to}
              />
              <TextField
                errorMessage="Please enter description.. *"
                name="text"
                onChange={form.handleChange}
                placeholder="Description *"
                required
                type="text"
                value={form.values.text}
              />
              <div>
                <Button
                  text="Share"
                  icon={<RiShareBoxLine size={20} />}
                  type="submit"
                />
              </div>
            </form>
          </Styled.ModalDetail>
        </Styled.Modal>
      )}
    </React.Fragment>
  );
};

export default SendEmail;
