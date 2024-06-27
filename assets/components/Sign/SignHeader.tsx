import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { BASE_COLOR } from "../../constants/color";

export default function SignHeader() {
  return (
    <View style={styles.logo}>
      <Link
        href={{
          pathname: "/",
        }}
      >
        <Text style={styles.buttonText}>홈으로</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
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
