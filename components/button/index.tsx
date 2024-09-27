import { Colors } from "@/constants/Colors";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export type ButtonProps = React.ComponentProps<typeof TouchableOpacity>;

export default function Button({
  children,
  style,
  disabled,
  ...rest
}: ButtonProps) {
  let buttonStyles = [styles.button, style];
  if (disabled) {
    buttonStyles.push(styles.disabled);
  }
  return (
    <TouchableOpacity style={buttonStyles} disabled={disabled} {...rest}>
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
  disabled: {
    backgroundColor: "#E9E9E9",
  },
});
