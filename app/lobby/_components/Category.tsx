import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { BASE_COLOR } from "../../../assets/constants/color";

interface CategoryProps {
  name: string;
}

export default function Category({ name }: CategoryProps) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100, // 고정된 너비 설정
    height: 100, // 고정된 높이 설정
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5, // 가로 여백 설정
    backgroundColor: BASE_COLOR.LIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: BASE_COLOR.LIGHT_TEXT,
  },
});
