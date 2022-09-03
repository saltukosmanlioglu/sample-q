import { SendEmailRequest } from "@/services/send-email";

export interface SendEmailProps {
  onSubmit: (values: SendEmailRequest) => void;
}
