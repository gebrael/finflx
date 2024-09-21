import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import StatusBar from "./StatusBar";
import { StatusBar as OriginalStatusBar } from "expo-status-bar";

const TabView = ({
  children,
  statusbarColor,
  style,
}: PropsWithChildren<{
  statusbarColor?: string;
  style?: React.ComponentProps<typeof OriginalStatusBar>["style"];
}>) => {
  return (
    <View style={[styles.root, { backgroundColor: statusbarColor }]}>
      <StatusBar backgroundColor={statusbarColor} style={style} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default TabView;
