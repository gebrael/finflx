import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar as OriginalStatusBar } from "expo-status-bar";
export type StatusBarProps = {
  backgroundColor?: string;
  style?: React.ComponentProps<typeof OriginalStatusBar>["style"];
};
const StatusBar = ({ backgroundColor, style }: StatusBarProps) => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <OriginalStatusBar style={style} />
      <View
        style={{
          height: insets.top,
          backgroundColor: backgroundColor ? backgroundColor : "transparent",
        }}
      />
    </>
  );
};

export default StatusBar;
