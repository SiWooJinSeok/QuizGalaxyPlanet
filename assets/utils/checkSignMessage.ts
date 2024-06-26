import { AUTH_ERROR_MESSAGE } from "../constants/message";

export const checkEmail = (email: string) => {
  if (!email) {
    return AUTH_ERROR_MESSAGE.NOT_EMAIL;
  }

  if (!email.includes("@")) {
    return AUTH_ERROR_MESSAGE.INVALID_EMAIL;
  }
  return "";
};

export const checkPassword = (password: string) => {
  if (!password) {
    return AUTH_ERROR_MESSAGE.NOT_PASSWORD;
  }

  if (password.length < 8) {
    return AUTH_ERROR_MESSAGE.INVALID_PASSWORD;
  }

  return "";
};
