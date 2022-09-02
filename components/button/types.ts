export type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  icon?: JSX.Element;
  onClick?: () => void;
  text: string;
  type?: ButtonType;
}
