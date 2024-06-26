import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <Link
        style={styles.button}
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "skyblue",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
