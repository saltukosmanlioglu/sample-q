export interface PopupProps {
  description: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  visible: boolean;
}
