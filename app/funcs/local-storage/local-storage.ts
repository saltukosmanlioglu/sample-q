import { LocalStorageLoadProps, KeyValueProps } from "./types";

export const localStorageSetItem = async ({ key, value }: KeyValueProps) => {
  try {
    await localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const localStorageGetItem = async ({ key }: LocalStorageLoadProps) => {
  try {
    await localStorage.getItem(key);
  } catch (error) {
    console.log(error);
  }
};
