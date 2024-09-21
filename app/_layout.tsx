import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    PublicSansThin: require("../assets/fonts/PublicSans-Thin.ttf"),
    PublicSansExtraLight: require("../assets/fonts/PublicSans-ExtraLight.ttf"),
    PublicSansLight: require("../assets/fonts/PublicSans-Light.ttf"),
    PublicSansRegular: require("../assets/fonts/PublicSans-Regular.ttf"),
    PublicSansMedium: require("../assets/fonts/PublicSans-Medium.ttf"),
    PublicSansSemiBold: require("../assets/fonts/PublicSans-SemiBold.ttf"),
    PublicSansBold: require("../assets/fonts/PublicSans-Bold.ttf"),
    PublicSansBlack: require("../assets/fonts/PublicSans-Black.ttf"),
    PublicSansExtraBold: require("../assets/fonts/PublicSans-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <ThemeProvider value={DefaultTheme}>
      <StatusBar style="light" />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(stacks)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
