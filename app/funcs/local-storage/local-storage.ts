import { KeyValueProps } from "./types";

export const localStorageSetItem = ({ key, value }: KeyValueProps) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};
