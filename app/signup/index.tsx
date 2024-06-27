import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import SignHeader from "../../assets/components/Sign/SignHeader";
import { BASE_COLOR } from "../../assets/constants/color";
import SignupForm from "./_components/SignupForm";

export default function LoginPage() {
  return (
    <View style={styles.container}>
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
  container: {
    flex: 1,
    backgroundColor: BASE_COLOR.DEEP,
  },
  scrollView: {
    flex: 3,
  },
});
