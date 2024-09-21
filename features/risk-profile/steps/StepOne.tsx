import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const StepOne = () => {
  return (
    <View style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Understanding your risk profile</Text>
        <Text style={styles.desctiption}>
          Answer 6 easy questions to help us recommend an investment portfolio
          suitable for you.
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/meter.png")}
          style={styles.meter}
          resizeMode="contain"
        />
        <Image
          source={require("@/assets/images/meterIndecator.png")}
          style={styles.meterIndecator}
          resizeMode="contain"
        />
        <Text style={styles.meterText}>
          Find the suitable portfolio for you
        </Text>
      </View>
    </View>
  );
};

export default StepOne;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 16,
  },
  textContainer: {
    gap: 10,
  },
  title: {
    fontSize: 34,
    fontFamily: "PublicSansBold",
    lineHeight: 40,
    color: "#202020",
    letterSpacing: 0.2,
  },
  desctiption: {
    fontSize: 16,
    fontFamily: "PublicSansLight",
    lineHeight: 22,
    color: "#202020",
    letterSpacing: 0,
  },
  imageContainer: {
    flex: 1,
    marginTop: -200,
    alignItems: "center",
    justifyContent: "center",
  },
  meter: {
    width: "100%",
  },
  meterIndecator: {
    width: "100%",
    height: 65,
    position: "absolute",
    bottom: "37%",
    left: -10,
  },
  meterText: {
    fontSize: 24,
    fontFamily: "PublicSansBold",
    color: "#202020",
    lineHeight: 28,
    letterSpacing: 0.4,
    maxWidth: "70%",
    position: "absolute",
    bottom: "25%",
    textAlign: "center",
  },
});
