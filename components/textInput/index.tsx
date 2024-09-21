import React from "react";
import { Colors } from "@/constants/Colors";
import { TextInput, StyleSheet } from "react-native";

export type InputProps = React.ComponentProps<typeof TextInput>;

export default function Input({ style, ...rest }: InputProps) {
  return <TextInput style={[styles.input, style]} {...rest} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1.5,
    borderColor: Colors.light.mainColor,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
