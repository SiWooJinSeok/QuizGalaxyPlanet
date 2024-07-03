import { View } from "react-native";
import React from "react";
import userStore from "../../assets/stores/userStore";
import LobbyHeader from "./_components/LobbyHeader";
import CategoryList from "./_components/CategoryList";
import { containerStyle } from "../../assets/styles/common";

export default function Lobby() {
  const { user } = userStore();
  return (
    <View style={containerStyle.base}>
      <LobbyHeader />
      <CategoryList />
    </View>
  );
}
