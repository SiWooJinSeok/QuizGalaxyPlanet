import { View } from "react-native";
import React from "react";
import LobbyHeader from "./_components/LobbyHeader";
import CategoryList from "./_components/CategoryList";
import { containerStyle } from "../../assets/styles/common";
import CategoryModal from "../../assets/components/Modal/CategoryModal";

export default function Lobby() {
  return (
    <View style={containerStyle.base}>
      <LobbyHeader />
      <CategoryList />
      <CategoryModal></CategoryModal>
    </View>
  );
}
