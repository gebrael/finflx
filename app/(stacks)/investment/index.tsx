import React from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Button from "@/components/button";
import { useKeyboardVisible } from "@/hooks/useKeyboardVisible";
import StackView from "@/components/StackView";
import Input from "@/components/textInput";
import { Colors } from "@/constants/Colors";
import UploadImage from "@/components/uploadImage";

const index = () => {
  const router = useRouter();
  const visible = useKeyboardVisible();
  const handleClose = () => {
    router.push("/(tabs)/");
  };

  const handleStart = () => {
    router.push("/(stacks)/risk-profile");
  };

  return (
    <StackView statusbarColor="white" style="dark">
      <KeyboardAvoidingView behavior="padding" style={styles.root}>
        <Pressable style={styles.closeRoot} onPress={handleClose}>
          <Feather name="x" size={24} color="black" />
        </Pressable>

        <View style={styles.body}>
          <Text style={styles.headerText}>Create a Goal</Text>
          <Text style={styles.bodyText}>
            Write the name of the item or experience you’re saving for.
          </Text>
          <UploadImage />
          <Input
            placeholder="Goal Name"
            placeholderTextColor={Colors.light.mainColor}
          />
          <Button
            style={[styles.startButton, { marginBottom: visible ? 12 : 0 }]}
            onPress={handleStart}
          >
            <Text style={styles.startButtonText}>Start Now</Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </StackView>
  );
};

export default index;

const styles = StyleSheet.create({
  root: { backgroundColor: "white", flex: 1, paddingHorizontal: 24 },
  closeRoot: {
    position: "absolute",
    top: 0,
    left: 12,
    padding: 16,
    zIndex: 1,
  },
  body: {
    gap: 10,
    flex: 1,
  },

  headerText: {
    fontSize: 34,
    fontFamily: "PublicSansBold",
    marginTop: 48,
  },

  bodyText: {
    fontSize: 16,
    fontFamily: "PublicSansLight",
    lineHeight: 22,
    color: "#202020",
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
