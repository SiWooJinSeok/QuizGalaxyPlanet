import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import InputBox from "../../../assets/components/Input/InputBox";
import { Link, router } from "expo-router";
import { checkLoginMessage } from "../../../assets/utils/checkSignMessage";
import { axiosInstance } from "../../../assets/api/axiosInstance";
import userStore from "../../../assets/stores/userStore";
import { ResponseUserType } from "../../../assets/types/userType";
import { formStyle } from "../../../assets/styles/signStyle";
import { changeAxiosErrorMessage } from "../../../assets/utils/changeAxiosErrorMessage";
import { AxiosError } from "axios";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setAccessToken, setEmail: setUserEmail } = userStore();

  const submitLogin = async () => {
    const checkMessage = checkLoginMessage(email, password);

    if (checkMessage !== "") {
      alert(checkMessage);
      return;
    }

    try {
      const res = await axiosInstance.post("auth/login", {
        email,
        password,
      });
      const data: ResponseUserType = await res.data;
      setUser({
        id: data.id,
        email: data.email,
        nickname: data.nickname,
        profile_image: data.profile_image,
        introduction: data.introduction,
      });
      setAccessToken(data.accessToken);
      router.replace("/lobby");
    } catch (e) {
      const error = e as AxiosError;
      const message = changeAxiosErrorMessage(e);
      alert(message);
      if (error.response?.status === 403) {
        console.log("403");
        setUserEmail(email);
        router.push("/email-confirm");
      }
    }
  };

  return (
    <View style={formStyle.form}>
      <InputBox
        labelName="이메일"
        placeholder="이메일을 입력해주세요"
        value={email}
        onChangeText={(value: string) => setEmail(value)}
        returnKeyType="next"
      />
      <InputBox
        labelName="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChangeText={(value: string) => setPassword(value)}
        onSubmitEditing={submitLogin}
        secureTextEntry
      />
      <Pressable style={formStyle.submitButton} onPress={submitLogin}>
        <Text style={formStyle.submitButtonText}>로그인</Text>
      </Pressable>

      <Link href={{ pathname: "/signup" }} style={formStyle.signLinkText}>
        <Text style={formStyle.signLinkText}>회원가입하러 가기</Text>
      </Link>
    </View>
  );
}
