import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import InputBox from "../../../assets/components/Input/InputBox";
import { Link } from "expo-router";
import { formStyle } from "../../../assets/styles/signStyle";

export default function EmailConfirmForm() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const submit = () => {
    console.log("submit");
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
        value={code}
        onChangeText={(value: string) => setCode(value)}
        onSubmitEditing={submit}
        secureTextEntry
      />
      <Pressable style={formStyle.submitButton} onPress={submit}>
        <Text style={formStyle.submitButtonText}>로그인</Text>
      </Pressable>

      <Link href={{ pathname: "/signup" }} style={formStyle.signLinkText}>
        <Text style={formStyle.signLinkText}>회원가입하러 가기</Text>
      </Link>
    </View>
  );
}
