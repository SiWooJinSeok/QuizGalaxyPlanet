import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "./_components/Header";
import { BASE_COLOR } from "../assets/constants/color";

export default function App() {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={require("../assets/img/mainbg.jpg")}
        style={styles.bg}
      >
        <Link
          href={{
            pathname: "/login",
          }}
          asChild
        >
          <Pressable style={styles.linkContainer}>
            <Header />
            <View style={styles.touchMeContainer}>
              <Text style={styles.touchMeText}> Please touch anywhere!! </Text>
            </View>
          </Pressable>
        </Link>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  linkContainer: {
    paddingVertical: 50,
    flex: 1,
  },
  bg: {
    flex: 1,
  },
  touchMeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  touchMeText: {
    color: BASE_COLOR.DEEP,
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: BASE_COLOR.LIGHT_TEXT,
  },
});
