import { useEvaluateRiskProfile } from "@/api/risk-profile";
import Button from "@/components/button";
import StackView from "@/components/StackView";
import { Colors } from "@/constants/Colors";
import {
  TInvestmentGoal,
  useInvestmentGoal,
} from "@/providers/InvestmentGoalContext";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const RistProfileResult = () => {
  const { form } = useInvestmentGoal();
  const evaluateMutation = useEvaluateRiskProfile();
  const handleCreate = async (data: TInvestmentGoal) => {
    try {
      await evaluateMutation.mutateAsync(data);
      router.push("/(stacks)/congrats");
    } catch (error) {
      console.error(error);
    }
  };

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
              router.push("/(stacks)/monthly-topup");
            }}
          >
            <Feather size={24} name="x" />
          </Pressable>
        </View>

        <View style={styles.body}>
          <LinearGradient
            colors={["#D8D7FF", "#F2F1FF"]}
            style={styles.container}
          >
            <TouchableOpacity style={styles.uploadBTN}>
              <EvilIcons
                name="pencil"
                size={24}
                color={Colors.light.mainColor}
              />
            </TouchableOpacity>
            <Text
              style={{
                position: "absolute",
                bottom: 15,
                left: 15,
                color: "white",
                zIndex: 2,
                fontSize: 24,
                fontFamily: "PublicSansSemiBold",
              }}
            >
              {form.getValues().goal}
              sdfsdf
            </Text>
            <View style={styles.bankIconContainer}>
              <Image
                style={styles.image}
                source={{ uri: form.getValues().image }}
              />
            </View>
          </LinearGradient>

          <View style={{ gap: 20 }}>
            <View style={{ gap: 5 }}>
              <Text style={{ marginLeft: 14 }}>Goal Summary</Text>
              <View
                style={{
                  padding: 16,
                  backgroundColor: "#FAF8F7",
                  borderRadius: 15,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>Initial Amount</Text>
                <Text>{form.getValues().investment.initialAmount}</Text>
              </View>
            </View>

            <View style={{ gap: 5 }}>
              <Text style={{ marginLeft: 14 }}>Recurring payment</Text>
              <View
                style={{
                  padding: 16,
                  backgroundColor: "#FAF8F7",
                  borderRadius: 15,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>Monthly Top Up</Text>
                <Text>{form.getValues().investment.monthlyTopUp}</Text>
              </View>
              <View
                style={{
                  padding: 16,
                  backgroundColor: "#FAF8F7",
                  borderRadius: 15,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>On the day</Text>
                <Text>{form.getValues().investment.day}</Text>
              </View>
            </View>
          </View>
          <Button
            onPress={() => {
              // form.handleSubmit(handleCreate);
              handleCreate(form.getValues());
            }}
            style={styles.startButton}
          >
            {evaluateMutation.isPending ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.startButtonText}>Create</Text>
            )}
          </Button>
        </View>
      </View>
    </StackView>
  );
};

export default RistProfileResult;

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
  body: {
    gap: 24,
    flex: 1,
    marginTop: 24,
  },

  startButtonText: {
    color: "white",
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "PublicSansSemiBold",
    letterSpacing: -0.1,
  },
  container: {
    width: "100%",
    height: 132,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  uploadBTN: {
    width: 32,
    height: 32,
    position: "absolute",
    bottom: 15,
    right: 15,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 5,
    zIndex: 1,
  },
  bankIconContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 47.5,
    backgroundColor: "#FFF4D8",
    justifyContent: "center",
    alignItems: "center",
  },
  bankIcon: {
    width: 48,
    height: 58,
  },
  startButton: {
    marginTop: "auto",
  },
});
