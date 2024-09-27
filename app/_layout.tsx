import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { StatusBar } from "expo-status-bar";
import { InvestmentGoalProvider } from "@/providers/InvestmentGoalContext";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();
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
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        <InvestmentGoalProvider>
          <BottomSheetModalProvider>
            <ThemeProvider value={DefaultTheme}>
              <StatusBar style="light" />

              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="(stacks)" />
              </Stack>
            </ThemeProvider>
          </BottomSheetModalProvider>
        </InvestmentGoalProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
