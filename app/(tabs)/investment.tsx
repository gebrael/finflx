import { StyleSheet, Image, View, Pressable, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Button from "@/components/button";
import TabView from "@/components/TabView";

export default function Investment() {
  const router = useRouter();

  const handleClose = () => {
    router.push("/(tabs)/");
  };
  const handleStart = () => {
    router.push("/(stacks)");
  };

  return (
    <TabView statusbarColor="#E1EDFF" style="dark">
      <View style={styles.root}>
        <Pressable style={styles.closeRoot} onPress={handleClose}>
          <Feather name="x" size={24} color="black" />
        </Pressable>

        <View style={styles.imageRoot}>
          <Image source={require("@/assets/images/money.png")} />
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

          <Button style={styles.startButton} onPress={handleStart}>
            <Text style={styles.startButtonText}>Start Now</Text>
          </Button>
        </View>
      </View>
    </TabView>
  );
}

const styles = StyleSheet.create({
  root: { backgroundColor: "#E1EDFF", flex: 1, paddingHorizontal: 24 },

  closeRoot: {
    position: "absolute",
    top: 0,
    left: 12,
    padding: 16,
  },

  imageRoot: {
    backgroundColor: "#FFF4D8",
    width: 96,
    height: 96,
    borderRadius: 96 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 74,
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

  startButtonText: {
    color: "white",
    fontFamily: "PublicSansSemiBold",
    fontSize: 16,
    lineHeight: 22,
  },

  startButton: {
    marginTop: "auto",
  },
});
