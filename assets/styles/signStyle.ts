import { StyleSheet } from "react-native";
import { BASE_COLOR } from "../constants/color";

export const formStyle = StyleSheet.create({
  form: {
    flex: 3,
    justifyContent: "flex-start",
  },
  submitButton: {
    backgroundColor: BASE_COLOR.LIGHT,
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 30,
  },
  submitButtonText: {
    fontSize: 20,
    color: BASE_COLOR.LIGHT_TEXT,
  },
  signLinkText: {
    color: BASE_COLOR.LIGHT,
    fontSize: 20,
    textAlign: "center",
    padding: 20,
  },
});

export const ContainerStyle = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: BASE_COLOR.DEEP,
  },
});
