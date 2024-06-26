import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Galaxy Planet !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#F8F9D7",
  },
});
