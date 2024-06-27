import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import InputBox from "../../../assets/components/Input/InputBox";
import { BASE_COLOR } from "../../../assets/constants/color";
import { Link, router } from "expo-router";
import { checkLoginMessage } from "../../../assets/utils/checkSignMessage";
import { axiosInstance } from "../../../assets/api/axiosInstance";
import userStore from "../../../assets/stores/userStore";
import { ResponseUserType } from "../../../assets/types/userType";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setAccessToken } = userStore();

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
      router.push("/lobby");
    } catch (e) {
      console.log("error:", e);
      alert(e);
    }
  };

  return (
    <View style={styles.form}>
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
