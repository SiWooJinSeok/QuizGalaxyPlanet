import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import InputBox from "../../../assets/components/Input/InputBox";
import { BASE_COLOR } from "../../../assets/constants/color";
import { Link } from "expo-router";
import {
  checkEmail,
  checkPassword,
} from "../../../assets/utils/checkSignMessage";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = async () => {
    const checkedEmail = checkEmail(email);
    const checkedPassword = checkPassword(password);

    if (checkedEmail !== "") {
      alert(checkedEmail);
      return;
    }

    if (checkedPassword !== "") {
      alert(checkedPassword);
      return;
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

      <Link href={{ pathname: "/signup" }} style={styles.signLinkText}>
        <Text style={styles.signLinkText}>회원가입하러 가기</Text>
      </Link>
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
  signLinkText: {
    color: BASE_COLOR.LIGHT,
    fontSize: 20,
    textAlign: "center",
    padding: 20,
  },
});
