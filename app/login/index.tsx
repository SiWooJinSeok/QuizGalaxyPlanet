import { StyleSheet, View } from "react-native";
import { BASE_COLOR } from "../../assets/constants/color";
import LoginForm from "./_components/LoginForm";
import SignHeader from "../../assets/components/Sign/SignHeader";

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <SignHeader />
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLOR.DEEP,
  },
});
