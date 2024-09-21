import { Colors } from "@/constants/Colors";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export type ButtonProps = React.ComponentProps<typeof TouchableOpacity>;

export default function Button({ children, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      {children}
    </TouchableOpacity>
  );
}
const colors = Colors;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.light.mainColor,
    borderRadius: 10,
    paddingVertical: 13,
    justifyContent: "center",
    alignItems: "center",
  },
});
