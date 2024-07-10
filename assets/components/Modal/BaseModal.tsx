import { View, Text, Modal, StyleSheet } from "react-native";
import React from "react";
import { containerStyle } from "../../styles/common";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function BaseModal({
  isOpen,
  onClose,
  children,
}: BaseModalProps) {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={onClose}
      >
        <View style={styles.overlay}>{children}</View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});
