import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { BASE_COLOR } from "../../constants/color";
import { ImageBackground } from "expo-image";

export default function SignHeader() {
  return (
    <View style={styles.logo}>
      <Link
        href={{
          pathname: "/",
        }}
      >
        <ImageBackground
          source={require("../../img/logo.jpg")}
          style={styles.image}
        ></ImageBackground>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 150,
  },
  buttonText: {
    color: BASE_COLOR.LIGHT_TEXT,
    fontSize: 30,
  },
  image: {
    width: 200,
    height: 200,
  },
});
