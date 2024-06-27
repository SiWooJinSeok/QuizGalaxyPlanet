import { AxiosError } from "axios";

interface AxiosErrorResponseType {
  data: {
    message: string;
  };
}

export const changeAxiosErrorMessage = (error: unknown) => {
  const e = error as AxiosError;
  const response = e.response as AxiosErrorResponseType;
  if (response !== undefined) {
    return response.data["message"] as string;
  }
  return "알 수 없는 오류가 발생했습니다.";
};
