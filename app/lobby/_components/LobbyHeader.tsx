import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import userStore from "../../../assets/stores/userStore";
import { BASE_COLOR } from "../../../assets/constants/color";
import { Image } from "expo-image";

export default function LobbyHeader() {
  const { user, accessToken } = userStore();

  return (
    <View style={styles.container}>
      <View style={styles.rowFlex}>
        <Text style={styles.text}>Best : 0</Text>
        <View style={styles.profile}>
          <Image
            style={styles.profileImage}
            source={require("../../../assets/img/mainbg.jpg")}
          />
          <Text style={styles.text}>{user.nickname}</Text>
        </View>
      </View>
      <View style={styles.bgBox}>
        <ImageBackground
          source={require("../../../assets/img/mainbg.jpg")}
          style={styles.bgBox}
        ></ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowFlex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 20,
  },
  bgBox: {
    flex: 5,
  },

  text: {
    color: BASE_COLOR.LIGHT_TEXT,
    fontSize: 20,
  },

  profile: {
    gap: 4,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  profileImage: {
    marginTop: 4,
    width: 25,
    height: 25,
    borderRadius: 25,
  },
});
