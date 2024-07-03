import { View } from "react-native";
import LoginForm from "./_components/LoginForm";
import SignHeader from "../../assets/components/Sign/SignHeader";
import userStore from "../../assets/stores/userStore";
import { router } from "expo-router";
import { useEffect } from "react";
import { containerStyle } from "../../assets/styles/common";

export default function LoginPage() {
  const { accessToken } = userStore();
  useEffect(() => {
    if (accessToken !== "") {
      router.replace("/lobby");
    }
  }, []);

  return (
    <View style={containerStyle.base}>
      <SignHeader />
      <LoginForm />
    </View>
  );
}
