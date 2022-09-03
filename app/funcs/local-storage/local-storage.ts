import { LocalStorageGetItemProps, KeyValueProps } from "./types";

export const localStorageSetItem = ({ key, value }: KeyValueProps) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const localStorageGetItem = ({ key }: LocalStorageGetItemProps) => {
  try {
    localStorage.getItem(key);
  } catch (error) {
    console.log(error);
  }
};
