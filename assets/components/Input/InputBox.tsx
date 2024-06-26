import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import React from "react";
import { BASE_COLOR } from "../../constants/color";

interface InputBoxProps extends TextInputProps {
  labelName: string;
}

export default function InputBox({ labelName, ...rest }: InputBoxProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{labelName}</Text>
      <TextInput
        autoCapitalize="none"
        placeholderTextColor={BASE_COLOR.LIGHT_YELLOW}
        style={styles.input}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: BASE_COLOR.MEDIUM_PURPLE,
    padding: 10,
    borderWidth: 1,
    borderColor: BASE_COLOR.LIGHT_PURPLE,
    marginBottom: 10,
    borderRadius: 15,
    color: BASE_COLOR.LIGHT_YELLOW,
  },
  label: {
    color: BASE_COLOR.LIGHT_YELLOW,
    marginBottom: 8,
  },
});
