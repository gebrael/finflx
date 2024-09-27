import Button from "@/components/button";
import StackView from "@/components/StackView";
import { Colors } from "@/constants/Colors";
import { steps } from "@/features/risk-profile/steps";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type AnimatedBarProps = {
  progress: SharedValue<number>;
};
const AnimatedBar = ({ progress }: AnimatedBarProps) => {
  const [width, setWidth] = useState(0);
  const animatedStyles = useAnimatedStyle(() => ({
    width: withTiming(interpolate(progress.value, [0, 100], [0, width])),
  }));
  return (
    <View
      style={styles.animatedBarRoot}
      onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
    >
      <Animated.View style={[styles.animatedBarProgress, animatedStyles]} />
    </View>
  );
};
const RiskProfile = () => {
  const progress = useSharedValue(100 / steps.length);
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();
  return (
    <StackView statusbarColor="white" style="dark">
      <View style={styles.root}>
        {currentStep + 1 < 6 && (
          <View style={styles.headerRoot}>
            <Pressable
              onPress={() => {
                const newCurrentStep = currentStep - 1;
                if (newCurrentStep < 0) {
                  router.push("/(tabs)/");
                }
                setCurrentStep(newCurrentStep);
                progress.value = (newCurrentStep + 1) * (100 / steps.length);
              }}
            >
              <Feather size={24} name="arrow-left" />
            </Pressable>

            <Pressable
              onPress={() => {
                router.push("/(stacks)/monthly-topup");
              }}
            >
              <Feather size={24} name="x" />
            </Pressable>
          </View>
        )}
        {currentStep + 1 < 6 && <AnimatedBar progress={progress} />}
        {steps.map((Step, i) => {
          return (
            currentStep === i && (
              <Animated.View
                key={i}
                style={{ flex: 1 }}
                entering={FadeIn}
                exiting={FadeOut}
              >
                <Step />
              </Animated.View>
            )
          );
        })}
        {currentStep + 1 < 6 && (
          <Button
            onPress={() => {
              const newCurrentStep = currentStep + 1;
              if (newCurrentStep >= steps.length) {
                return router.push("/(stacks)/risk-profile-result");
              }
              setCurrentStep(newCurrentStep);
              progress.value = (newCurrentStep + 1) * (100 / steps.length);
            }}
          >
            <Text style={styles.startButtonText}>{`${
              currentStep + 1 === 1
                ? "Let's start"
                : currentStep + 1 < 5
                ? "Next Step"
                : "Finish"
            }`}</Text>
          </Button>
        )}
      </View>
    </StackView>
  );
};

export default RiskProfile;
const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 24,
    flex: 1,
  },
  headerRoot: {
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 1,
  },
  animatedBarRoot: {
    backgroundColor: "#625EEE26",
    height: 6,
    borderRadius: 3,
    overflow: "hidden",
    marginVertical: 16,
  },
  animatedBarProgress: {
    backgroundColor: Colors.light.mainColor,
    alignSelf: "flex-start",
    width: "25%",
    height: 6,
  },
  startButtonText: {
    color: "white",
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "PublicSansSemiBold",
    letterSpacing: -0.1,
  },
});
