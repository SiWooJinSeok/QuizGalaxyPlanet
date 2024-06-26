import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { BASE_COLOR } from "../../assets/constants/color";
import LoginForm from "./_components/LoginForm";

export default function LoginPage() {
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
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLOR.DEEP,
  },
  logo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: BASE_COLOR.LIGHT_TEXT,
    fontSize: 30,
  },
});
