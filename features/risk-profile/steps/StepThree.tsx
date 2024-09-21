import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const StepThree = () => {
  return (
    <View style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>All good things in life take time!</Text>
        <Text style={styles.desctiption}>
          Based on the time horizon you selected, we recommend you invest in our
          flexible savings account.
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/investing/Plant.png")}
          resizeMode="contain"
        />
        <Text style={[styles.desctiption, { textAlign: "center" }]}>
          Investments require longer time horizons to materialize gains. Usually
          longer than 3 years.
        </Text>
      </View>
    </View>
  );
};

export default StepThree;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    gap: 28,
  },
  textContainer: {
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: "PublicSansBold",
    lineHeight: 28,
    color: "#202020",
    letterSpacing: 0.4,
  },
  desctiption: {
    fontSize: 16,
    fontFamily: "PublicSansLight",
    lineHeight: 22,
    color: "#202020",
    letterSpacing: 0,
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    flex: 1,
    gap: 32.3,
  },
});
