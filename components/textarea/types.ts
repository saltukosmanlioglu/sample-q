export interface TextAreaProps {
  errorMessage?: string;
  name: HTMLTextAreaElement["name"];
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: HTMLTextAreaElement["placeholder"];
  required?: HTMLTextAreaElement["required"];
  rows: HTMLTextAreaElement["rows"];
  value: HTMLTextAreaElement["value"];
}
