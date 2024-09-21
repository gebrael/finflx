import React, { useState } from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Colors } from "@/constants/Colors";
export default function UploadImage() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async (): Promise<void> => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [2.47, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <LinearGradient colors={["#D8D7FF", "#F2F1FF"]} style={styles.container}>
      {/* <Button title="Pick an image from gallery" onPress={pickImage} /> */}
      <TouchableOpacity onPress={pickImage} style={styles.uploadBTN}>
        <EvilIcons name="pencil" size={24} color={Colors.light.mainColor} />
      </TouchableOpacity>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={styles.bankIconContainer}>
          <Image
            style={styles.bankIcon}
            source={require("@/assets/images/bank.png")}
          />
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
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
    width: 95,
    height: 95,
    borderRadius: 47.5,
    backgroundColor: "#FFF4D8",
    justifyContent: "center",
    alignItems: "center",
  },
  bankIcon: {
    width: 48,
    height: 58,
  },
});
