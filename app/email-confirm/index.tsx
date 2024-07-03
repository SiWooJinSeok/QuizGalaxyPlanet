import { View, Text } from "react-native";
import React from "react";
import SignHeader from "../../assets/components/Sign/SignHeader";
import { containerStyle } from "../../assets/styles/common";

export default function EmailConfirm() {
  return (
    <View style={containerStyle.base}>
      <SignHeader />
      <Text>index</Text>
    </View>
  );
}
