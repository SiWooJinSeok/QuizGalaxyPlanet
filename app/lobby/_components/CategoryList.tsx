import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import React from "react";
import { BASE_COLOR } from "../../../assets/constants/color";
import Category from "./Category";

const mockData = [
  {
    id: 1,
    name: "분야1",
  },
  {
    id: 2,
    name: "분야2",
  },
  {
    id: 3,
    name: "분야3",
  },
  {
    id: 4,
    name: "분야4",
  },
  {
    id: 5,
    name: "분야 5",
  },
  {
    id: 6,
    name: "분야 6",
  },
  {
    id: 7,
    name: "분야 7",
  },
  {
    id: 8,
    name: "분야 8",
  },
  {
    id: 9,
    name: "분야 9",
  },
];

const { width, height } = Dimensions.get("window");

export default function CategoryList() {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollViewContent}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.rows}>
            <View style={styles.row}>
              {mockData.map((item, index) =>
                index % 6 < 3 ? (
                  <Category key={item.id} name={item.name} />
                ) : null
              )}
            </View>
            <View style={styles.row}>
              {mockData.map((item, index) =>
                index % 6 >= 3 ? (
                  <Category key={item.id} name={item.name} />
                ) : null
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  list: {
    width: width,
    height: height / 3,
    backgroundColor: BASE_COLOR.MEDIUM,
    padding: 10,
    paddingHorizontal: 20,
  },
  scrollViewContent: {
    paddingVertical: 10,
  },
  rows: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
    gap: 13,
  },
});
