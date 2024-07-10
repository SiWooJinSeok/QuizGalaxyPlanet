import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { BASE_COLOR } from "../../../assets/constants/color";
import playStore from "../../../assets/stores/playstore";

interface CategoryProps {
  name: string;
}

export default function Category({ name }: CategoryProps) {
  const { setCategoryName, setModalVisible, modalVisible } = playStore();

  const onPress = () => {
    setCategoryName(name);
    setModalVisible(!modalVisible);
  };

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    </Pressable>
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
