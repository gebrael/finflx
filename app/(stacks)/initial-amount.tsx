import Button from "@/components/button";
import StackView from "@/components/StackView";
import Input from "@/components/textInput";
import { useInvestmentGoal } from "@/providers/InvestmentGoalContext";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Controller } from "react-hook-form";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import CurrencyInput from "react-native-currency-input";

const InitalAmountScreen = () => {
  const { form } = useInvestmentGoal();
  const router = useRouter();
  return (
    <StackView>
      <View style={styles.root}>
        <View style={styles.headerRoot}>
          <Pressable
            onPress={() => {
              router.push("/(tabs)/");
            }}
          >
            <Feather size={24} name="arrow-left" />
          </Pressable>

          <Pressable
            onPress={() => {
              router.push("/");
            }}
          >
            <Feather size={24} name="x" />
          </Pressable>
        </View>

        <View style={styles.body}>
          <Text style={styles.headerText}>Invest & put your money to work</Text>
          <Text style={styles.bodyText}>
            Get closer to your dream with our fully managed portfolios tailored
            to fit your risk appetite, time horizon, and personal values.
          </Text>

          <Text style={styles.bodyText}>
            Find out the most suitable portfolio for you in minutes.
          </Text>

          <Controller
            control={form.control}
            name="investment.initialAmount"
            render={({ field }) => {
              return (
                <CurrencyInput
                  value={field.value}
                  onChangeValue={field.onChange}
                  prefix="AED "
                  onBlur={field.onBlur}
                  delimiter=","
                  separator=","
                  renderTextInput={(props) => <Input {...props} />}
                  minValue={0}
                  precision={0}
                />
              );
            }}
          />

          <Controller
            control={form.control}
            name="investment.scheduleMonthlyDeposit"
            render={({ field }) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>Schedule a monthly deposit</Text>
                  <Switch value={field.value} onValueChange={field.onChange} />
                </View>
              );
            }}
          />

          <Button
            disabled={form.watch("investment.initialAmount") < 1}
            onPress={() => router.push("/(stacks)/monthly-topup")}
            style={styles.startButton}
          >
            <Text style={styles.startButtonText}>Next</Text>
          </Button>
        </View>
      </View>
    </StackView>
  );
};

export default InitalAmountScreen;

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
  startButtonText: {
    color: "white",
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "PublicSansSemiBold",
    letterSpacing: -0.1,
  },
  startButton: {
    marginTop: "auto",
  },
  body: {
    gap: 24,
    flex: 1,
    paddingBottom: 24,
  },

  headerText: {
    fontSize: 34,
    fontFamily: "PublicSansBold",
    marginTop: 48,
  },

  bodyText: {
    fontSize: 16,
    fontFamily: "PublicSans",
    lineHeight: 16 * 1.8,
  },
});
