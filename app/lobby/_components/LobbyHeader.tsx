import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import userStore from "../../../assets/stores/userStore";
import { BASE_COLOR } from "../../../assets/constants/color";
import { Image } from "expo-image";
import { containerStyle } from "../../../assets/styles/common";

export default function LobbyHeader() {
  const { user, accessToken } = userStore();

  return (
    <View style={containerStyle.flex_1}>
      <View style={styles.rowFlex}>
        <Text style={styles.text}>Best : 0</Text>
        <View style={styles.profile}>
          <Image
            style={styles.profileImage}
            source={require("../../../assets/img/logo.jpg")}
            contentFit="cover"
          />
          <Text style={styles.text}>{user.nickname}</Text>
        </View>
      </View>
      <View style={styles.bgBox}>
        <ImageBackground
          source={require("../../../assets/img/mainbg.jpg")}
          style={styles.bgBox}
        >
          <View style={styles.title}>
            <Image
              style={styles.logo}
              source={require("../../../assets/img/logo.jpg")}
              contentFit="cover"
            />
            <Text style={styles.titleText}>Quiz Galaxy Planet</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  title: {
    flex: 1,
    gap: 20,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
    color: BASE_COLOR.MEDIUM,
  },
  text: {
    color: BASE_COLOR.LIGHT_TEXT,
    fontSize: 20,
  },
  logo: {
    flex: 1,
    width: "50%",
    marginTop: 30,
    borderRadius: 15,
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
