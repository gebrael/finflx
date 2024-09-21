import SelectBox from "@/components/SelectBox";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const options = [
  {
    text: "Less than 3 years",
  },
  {
    text: "3-5 years",
  },
  {
    text: "6-10 years",
  },
  {
    text: "+11 years",
  },
];
const StepTwo = () => {
  const [selected, setSelected] = useState(0);
  return (
    <View style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          For how long do you plan to keep investing for this goal?
        </Text>
        <Text style={styles.desctiption}>
          It’s important to understand the time horizon of your investment to
          provide a suitable portfolio.
        </Text>
      </View>

      <View style={styles.optionsContainer}>
        {options.map((option, i) => {
          return (
            <SelectBox
              key={i}
              active={i === selected}
              text={option.text}
              onPress={() => setSelected(i)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default StepTwo;

const styles = StyleSheet.create({
  root: {
    flex: 1,
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
  optionsContainer: { marginTop: 16, gap: 8 },
});
