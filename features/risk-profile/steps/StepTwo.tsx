import SelectBox from "@/components/SelectBox";
import {
  InvestmentDuration,
  useInvestmentGoal,
} from "@/providers/InvestmentGoalContext";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const options = [
  {
    label: "Less than 3 years",
    value: InvestmentDuration.LESS_THAN_3_YEAR,
  },
  {
    label: "3-5 years",
    value: InvestmentDuration.BETWEEN_3_AND_5_YEARS,
  },
  {
    label: "6-10 years",
    value: InvestmentDuration.BETWEEN_6_AND_10_YEARS,
  },
  {
    label: "+11 years",
    value: InvestmentDuration.MORE_THAN_11_YEARS,
  },
];
const StepTwo = () => {
  const { form } = useInvestmentGoal();
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
              active={option.value === form.watch("investment.duration")}
              text={option.label}
              onPress={() => form.setValue("investment.duration", option.value)}
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
