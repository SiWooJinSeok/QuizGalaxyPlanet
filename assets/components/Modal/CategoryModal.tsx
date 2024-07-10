import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseModal from "./BaseModal";
import playStore from "../../stores/playstore";
import { BASE_COLOR } from "../../constants/color";

const { width } = Dimensions.get("window");

export default function CategoryModal() {
  const { modalVisible, setModalVisible, categoryName } = playStore();
  const onClose = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <BaseModal isOpen={modalVisible} onClose={onClose}>
      <View style={styles.container}>
        <Pressable style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>X</Text>
        </Pressable>
        <Text style={styles.title}>{categoryName}</Text>
        <View style={styles.buttonList}>
          <Pressable
            style={styles.button}
            onPress={() => console.log("객관식")}
          >
            <Text style={styles.buttonText}>객관식</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => console.log("주관식")}
          >
            <Text style={styles.buttonText}>주관식</Text>
          </Pressable>
        </View>
      </View>
    </BaseModal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BASE_COLOR.MEDIUM,
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 50,
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    color: BASE_COLOR.LIGHT_TEXT,
  },

  closeButton: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  closeText: {
    fontSize: 20,
    color: BASE_COLOR.LIGHT_TEXT,
  },
  buttonList: {
    flexDirection: "row",
    gap: 50,
    marginVertical: 20,

    paddingTop: 50,
  },
  button: {
    backgroundColor: BASE_COLOR.LIGHT,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 20,
  },
});
