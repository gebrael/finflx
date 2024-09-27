import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";

const AnimatedMeter: React.FC = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(rotateAnim, {
      toValue: -1,
      tension: 100,
      friction: 1,
      useNativeDriver: true,
    }).start();

    return () => rotateAnim.stopAnimation();
  }, []);

  const rotate = rotateAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: ["-45deg", "45deg"],
  });

  const translateY = Dimensions.get("window").width * 0.07;

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
        <Animated.View
          style={[
            styles.meterIndicatorContainer,
            {
              transform: [
                { translateY },
                { rotate },
                { translateY: -translateY },
              ],
            },
          ]}
        >
          <Image
            source={require("@/assets/images/meterIndecator1.png")}
            style={styles.meterIndicator}
            resizeMode="contain"
          />
        </Animated.View>
        <Text style={styles.meterText}>
          Find the suitable portfolio for you
        </Text>
      </View>
    </View>
  );
};

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
  meterIndicatorContainer: {
    position: "absolute",
    bottom: "37%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  meterIndicator: {
    width: "100%",
    height: 65,
  },
  meterText: {
    fontSize: 24,
    fontFamily: "PublicSansBold",
    color: "#202020",
    lineHeight: 28,
    letterSpacing: 0.4,
    maxWidth: "70%",
    position: "absolute",
    bottom: "20%",
    textAlign: "center",
  },
});

export default AnimatedMeter;
