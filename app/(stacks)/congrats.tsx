import Button from "@/components/button";
import { useInvestmentGoal } from "@/providers/InvestmentGoalContext";
import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const Congrats = () => {
  const router = useRouter();
  const { form } = useInvestmentGoal();

  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  const handleClose = () => {
    router.push("/(tabs)/");
    form.reset();
  };

  return (
    <View style={styles.container}>
      {/* Lottie animation */}
      <View style={styles.lottieContainer}>
        <LottieView
          ref={animationRef}
          source={require("@/assets/confetti.json")}
          autoPlay
          loop={false}
          style={styles.lottie}
          speed={0.7}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>🎉 Congratulations! 🎉</Text>
        <Text style={styles.message}>
          You have successfully completed the process!
        </Text>
      </View>
      <Button onPress={handleClose} style={styles.homeButton}>
        <Text style={styles.homeButtonText}>Go Home</Text>
      </Button>
    </View>
  );
};

export default Congrats;

const styles = StyleSheet.create({
  lottieContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  lottie: {
    width: "100%",
    height: "60%",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
  },
  homeButton: {
    width: "100%",
    marginTop: "auto",
  },
  homeButtonText: {
    color: "white",
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "PublicSansSemiBold",
    letterSpacing: -0.1,
  },
});
