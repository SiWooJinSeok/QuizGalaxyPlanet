import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import InputBox from "../../../assets/components/Input/InputBox";
import { Link, router } from "expo-router";
import { BASE_COLOR } from "../../../assets/constants/color";
import { checkSignUpMessage } from "../../../assets/utils/checkSignMessage";
import { axiosInstance } from "../../../assets/api/axiosInstance";
import { changeAxiosErrorMessage } from "../../../assets/utils/changeAxiosErrorMessage";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");

  const submitSignup = async () => {
    const checkMessage = checkSignUpMessage(
      email,
      nickname,
      password,
      passwordCheck
    );

    if (checkMessage !== "") {
      alert(checkMessage);
      return;
    }

    // 회원가입 API 호출
    try {
      const res = await axiosInstance.post("auth/signup", {
        email,
        nickname,
        password,
      });
      if (res.status === 201) {
        alert("회원가입이 완료되었습니다.");
        router.replace("/login");
      }
    } catch (e: unknown) {
      const message = changeAxiosErrorMessage(e);
      alert(message);
    }
  };

  return (
    <View style={styles.form}>
      <InputBox
        labelName="이메일"
        placeholder="이메일을 입력해주세요"
        value={email}
        onChangeText={(value: string) => setEmail(value)}
      />
      <InputBox
        labelName="닉네임"
        placeholder="닉네임을 입력해주세요"
        value={nickname}
        onChangeText={(value: string) => setNickname(value)}
      />
      <InputBox
        labelName="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChangeText={(value: string) => setPassword(value)}
        secureTextEntry
      />
      <InputBox
        labelName="비밀번호 확인"
        placeholder="한번 더 비밀번호를 입력해주세요"
        value={passwordCheck}
        onChangeText={(value: string) => setPasswordCheck(value)}
        secureTextEntry
      />

      <Pressable style={styles.submitButton} onPress={submitSignup}>
        <Text style={styles.submitButtonText}>회원가입</Text>
      </Pressable>

      <Link href={{ pathname: "/login" }} style={styles.signLinkText}>
        <Text style={styles.signLinkText}>로그인하러 가기</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
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
