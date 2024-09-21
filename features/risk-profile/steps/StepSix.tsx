import Button from "@/components/button";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StepSix = () => {
  const router = useRouter();

  const handleClose = () => {
    router.push("/(tabs)/");
  };

  return (
    <View style={styles.container}>
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

export default StepSix;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
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
