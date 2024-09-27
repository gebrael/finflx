import SelectBox from "@/components/SelectBox";
import {
  InvestmentOutcome,
  useInvestmentGoal,
} from "@/providers/InvestmentGoalContext";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const options = [
  {
    text: "Little or no ups and downs in value, lower returns",
    value: InvestmentOutcome.LITTLE,
  },
  {
    text: "Moderate ups and downs in value, slightly higher returns",
    value: InvestmentOutcome.MODERATE,
  },
  {
    text: "Extreme ups and downs in value, high potential returns",
    value: InvestmentOutcome.EXTEREME,
  },
];

const StepFive = () => {
  const { form } = useInvestmentGoal();
  return (
    <View style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Which of the following investment outcomes do you prefer?
        </Text>
        <Text style={styles.desctiption}>
          Different people have different preferences, understanding yours helps
          us provide a more suitable portfolio.
        </Text>
      </View>

      <View style={styles.optionsContainer}>
        {options.map((option, i) => {
          return (
            <SelectBox
              key={i}
              active={form.watch("investment.outcome") === option.value}
              text={option.text}
              onPress={() => form.setValue("investment.outcome", option.value)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default StepFive;

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
