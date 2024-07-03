import { View } from "react-native";
import React from "react";
import SignHeader from "../../assets/components/Sign/SignHeader";
import { containerStyle } from "../../assets/styles/common";
import EmailConfirmForm from "./_components/EmailConfirmForm";

export default function EmailConfirm() {
  console.log("EmailConfirm");
  return (
    <View style={containerStyle.base}>
      <SignHeader />
      <EmailConfirmForm />
    </View>
  );
}
