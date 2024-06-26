import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import InputBox from "../../../assets/components/Input/InputBox";
import { BASE_COLOR } from "../../../assets/constants/color";
import { AUTH_ERROR_MESSAGE } from "../../../assets/constants/message";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = async () => {
    if (email === "") {
      return alert(AUTH_ERROR_MESSAGE.NOT_EMAIL);
    }

    if (password === "") {
      return alert(AUTH_ERROR_MESSAGE.NOT_PASSWORD);
    }

    console.log(email, password);
  };
  return (
    <View style={styles.form}>
      <InputBox
        labelName="이메일"
        placeholder="이메일을 입력해주세요"
        value={email}
        onChangeText={(value: string) => setEmail(value)}
        onSubmitEditing={submitLogin}
      />
      <InputBox
        labelName="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChangeText={(value: string) => setPassword(value)}
        onSubmitEditing={submitLogin}
        secureTextEntry
      />
      <Pressable style={styles.submitButton} onPress={submitLogin}>
        <Text style={styles.submitButtonText}>로그인</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 2,
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
});
