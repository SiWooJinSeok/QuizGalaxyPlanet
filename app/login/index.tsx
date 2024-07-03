import { StyleSheet, Text, View } from "react-native";
import { BASE_COLOR } from "../../assets/constants/color";
import LoginForm from "./_components/LoginForm";
import SignHeader from "../../assets/components/Sign/SignHeader";
import userStore from "../../assets/stores/userStore";
import { Link, router } from "expo-router";
import { useEffect } from "react";

export default function LoginPage() {
  const { accessToken } = userStore();
  useEffect(() => {
    if (accessToken !== "") {
      router.replace("/lobby");
    }
  }, []);

  return (
    <View style={styles.container}>
      <SignHeader />
      <LoginForm />

      <Link href="/email-confirm">
        <Text>email-confirm</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLOR.DEEP,
  },
});
