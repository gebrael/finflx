import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import StatusBar from "./StatusBar";
import { StatusBar as OriginalStatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PageView = ({
  children,
  statusbarColor,
  style,
}: PropsWithChildren<{
  statusbarColor?: string;
  style?: React.ComponentProps<typeof OriginalStatusBar>["style"];
}>) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.root,
        { paddingBottom: insets.bottom, backgroundColor: statusbarColor },
      ]}
    >
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

export default PageView;
