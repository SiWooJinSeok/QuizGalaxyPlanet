import { View, Text } from "react-native";
import React from "react";
import userStore from "../../assets/stores/userStore";

export default function Lobby() {
  const { user } = userStore();
  return (
    <View>
      <Text>{user.nickname}님 환영합니다.</Text>
    </View>
  );
}
