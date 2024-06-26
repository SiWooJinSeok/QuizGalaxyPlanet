import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import InputBox from "../../assets/components/Input/InputBox";
import { BASE_COLOR } from "../../assets/constants/color";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = () => {
    console.log(email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Link
          href={{
            pathname: "/",
          }}
        >
          <Text style={styles.buttonText}>홈으로</Text>
        </Link>
      </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLOR.DEEP_PURPLE,
  },
  logo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: BASE_COLOR.LIGHT_YELLOW,
    fontSize: 30,
  },
  form: {
    flex: 2,
    justifyContent: "flex-start",
  },
  submitButton: {
    backgroundColor: BASE_COLOR.LIGHT_PURPLE,
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 30,
  },
  submitButtonText: {
    fontSize: 20,
    color: BASE_COLOR.LIGHT_YELLOW,
  },
});
