import { AUTH_ERROR_MESSAGE } from "../constants/message";

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

export const checkEmail = (email: string) => {
  if (!email) {
    return AUTH_ERROR_MESSAGE.NOT_EMAIL;
  }

  if (!EMAIL_REGEX.test(email)) {
    return AUTH_ERROR_MESSAGE.INVALID_EMAIL;
  }
  return "";
};

export const checkPassword = (password: string) => {
  if (!password) {
    return AUTH_ERROR_MESSAGE.NOT_PASSWORD;
  }

  if (!PASSWORD_REGEX.test(password)) {
    return AUTH_ERROR_MESSAGE.INVALID_PASSWORD;
  }

  return "";
};
