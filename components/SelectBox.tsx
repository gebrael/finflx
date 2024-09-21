import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";

export type SelectBoxProps = {
  text: string;
  active: boolean;
  onPress?: () => void;
};
const SelectBox = ({ text, active, onPress }: SelectBoxProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.root,
        {
          backgroundColor: active ? "#625EEE26" : "transparent",
          borderColor: active ? Colors.light.mainColor : "#EDEBE5",
        },
      ]}
    >
      <Text style={styles.text}>{text}</Text>
      {active ? (
        <Animated.View entering={ZoomIn} exiting={ZoomOut}>
          <MaterialIcons
            name="check-circle"
            size={24}
            color={Colors.light.mainColor}
            style={styles.icon}
          />
        </Animated.View>
      ) : (
        <View style={{ height: 24 }} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderWidth: 1,
    borderRadius: 16,
  },
  text: {
    fontSize: 16,
    fontFamily: "PublicSansRegular",
    color: "#202020",
    maxWidth: "90%",
  },
  icon: {
    flexShrink: 0,
  },
});
export default SelectBox;
