export interface TextFieldProps {
  errorMessage: string;
  name: HTMLInputElement["name"];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: HTMLInputElement["placeholder"];
  required: HTMLInputElement["required"];
  type: HTMLInputElement["type"];
  value: HTMLInputElement["value"];
}
