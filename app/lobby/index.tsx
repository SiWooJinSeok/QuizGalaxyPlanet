import { View, Text, StyleSheet } from "react-native";
import React from "react";
import userStore from "../../assets/stores/userStore";
import LobbyHeader from "./_components/LobbyHeader";
import { BASE_COLOR } from "../../assets/constants/color";
import CategoryList from "./_components/CategoryList";

export default function Lobby() {
  const { user } = userStore();
  return (
    <View style={styles.container}>
      <LobbyHeader />
      <CategoryList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLOR.DEEP,
  },
});
