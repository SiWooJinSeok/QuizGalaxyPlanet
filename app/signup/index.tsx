import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import SignHeader from "../../assets/components/Sign/SignHeader";
import SignupForm from "./_components/SignupForm";
import { containerStyle } from "../../assets/styles/common";

export default function LoginPage() {
  return (
    <View style={containerStyle.base}>
      <SignHeader />
      <View style={styles.scrollView}>
        <ScrollView>
          <SignupForm />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 3,
  },
});
