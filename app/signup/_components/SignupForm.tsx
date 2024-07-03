import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import InputBox from "../../../assets/components/Input/InputBox";
import { Link, router } from "expo-router";
import { checkSignUpMessage } from "../../../assets/utils/checkSignMessage";
import { axiosInstance } from "../../../assets/api/axiosInstance";
import { changeAxiosErrorMessage } from "../../../assets/utils/changeAxiosErrorMessage";
import { formStyle } from "./../../../assets/styles/signStyle";
import userStore from "../../../assets/stores/userStore";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");

  const { setEmail: setUserEmail } = userStore();

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
        setUserEmail(email);
        alert("회원가입이 완료되었습니다.");
        router.replace("/email-confirm");
      }
    } catch (e: unknown) {
      const message = changeAxiosErrorMessage(e);
      alert(message);
    }
  };

  return (
    <View style={formStyle.form}>
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

      <Pressable style={formStyle.submitButton} onPress={submitSignup}>
        <Text style={formStyle.submitButtonText}>회원가입</Text>
      </Pressable>

      <Link href={{ pathname: "/login" }} style={formStyle.signLinkText}>
        <Text style={formStyle.signLinkText}>로그인하러 가기</Text>
      </Link>
    </View>
  );
}
