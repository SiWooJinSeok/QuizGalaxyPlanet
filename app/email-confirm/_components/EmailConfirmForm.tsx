import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { router } from "expo-router";
import { formStyle } from "../../../assets/styles/signStyle";
import userStore from "../../../assets/stores/userStore";
import { BASE_COLOR } from "../../../assets/constants/color";
import { AUTH_ERROR_MESSAGE } from "../../../assets/constants/message";
import { changeAxiosErrorMessage } from "../../../assets/utils/changeAxiosErrorMessage";
import { axiosInstance } from "../../../assets/api/axiosInstance";

export default function EmailConfirmForm() {
  const { email } = userStore();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const inputs = useRef<TextInput[]>([]);

  const handleChangeText = (value: string, index: number) => {
    const updateCode = [...code];
    updateCode[index] = value;
    setCode(updateCode.join(""));

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  useEffect(() => {
    if (email === "") {
      alert(AUTH_ERROR_MESSAGE.NULL_EMAIL);
      router.replace("/login");
    }
  }, []);

  const submit = async () => {
    console.log(code);
    if (loading) {
      return;
    }

    if (code.length !== 6) {
      inputs.current[0].focus();
      return;
    }

    try {
      setLoading(true);

      const res = await axiosInstance.post("auth/confirm-email", {
        email,
        code,
      });
      if (res.status === 204) {
        alert("이메일 인증이 완료되었습니다.");
        router.replace("/login");
      }
    } catch (e) {
      const message = changeAxiosErrorMessage(e);
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  const resendCode = async () => {
    if (loading) {
      return;
    }

    try {
      setLoading(true);

      const res = await axiosInstance.post("auth/send-email", {
        email,
      });

      if (res.status === 204) {
        alert("인증코드가 다시 발송되었습니다.");
      }
    } catch (e) {
      const message = changeAxiosErrorMessage(e);
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={formStyle.form}>
      <View style={styles.otpContainer}>
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <TextInput
              key={"code " + index}
              onChangeText={(value) => handleChangeText(value, index)}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="number-pad"
              returnKeyType={index === 5 ? "done" : "next"}
              onSubmitEditing={() => {
                if (index < 5) inputs.current[index + 1].focus();
              }}
              ref={(ref) => (inputs.current[index] = ref!)}
            />
          ))}
      </View>
      <Pressable style={formStyle.submitButton} onPress={submit}>
        <Text style={formStyle.submitButtonText}>인증하기</Text>
      </Pressable>

      <Pressable style={formStyle.signLinkText} onPress={resendCode}>
        <Text style={formStyle.signLinkText}>인증코드 다시보내기</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 50,
  },
  otpInput: {
    width: 50,
    height: 80,
    borderWidth: 1,
    borderColor: BASE_COLOR.LIGHT,
    textAlign: "center",
    color: BASE_COLOR.LIGHT_TEXT,
    fontSize: 24,
    fontWeight: "bold",
  },
});
