import { Colors } from "@/constants/Colors";
import {
  Image,
  ScrollView,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StatusBar } from "expo-status-bar";
import CarouselComponent from "@/components/PlanDetailsCarousel";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const items = [
    { name: "New goal", icon: "add" },
    { name: "Add fund", icon: "arrow-forward" },
    { name: "Statement", icon: "format-list-bulleted" },
  ];
  type Item = {
    name: string;
    icon: any;
  };

  const savingPlans = [
    {
      title: "Earn daily on your savings!",
      planName: "START SAVING",
      icon: "nfc",
    },
    {
      title: "Invest and put your money to work",
      planName: "START INVESTMENT",
      icon: "auto-graph",
    },
  ];
  type savingPlans = {
    title: string;
    planName: string;
    icon: any;
  };

  const serviceHub = [
    {
      image: require("@/assets/images/car.png"),
      name: "Car Insurance",
    },
    {
      image: require("@/assets/images/health.png"),
      name: "Health Insurance",
    },
    {
      image: require("@/assets/images/tax.png"),
      name: "tax Insurance",
    },
  ];
  type serviceHub = {
    image: ImageSourcePropType;
    name: string;
  };

  const financialAcademy = [
    {
      image: require("@/assets/images/personal.png"),
      title: "How To Create Your Personal Budget",
    },
    {
      image: require("@/assets/images/retirement.png"),
      title: "Planning For Retirement 101",
    },
    {
      image: require("@/assets/images/cryptocurrency.png"),
      title: "Why shouldn’t you invest in cryptocurrency",
    },
  ];
  type financialAcademy = {
    image: ImageSourcePropType;
    title: string;
  };

  return (
    <View
      style={{
        height: Dimensions.get("window").height,
      }}
    >
      <StatusBar style="light" />

      {/* Page Header */}
      <View style={styles.header}>
        {/* header content */}
        <View style={styles.avatarContainer}>
          {/* Avatar View */}
          <View
            style={{
              flex: 1,
              height: 32,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Image
              source={require("@/assets/images/avatar.png")}
              style={styles.avatarImage}
              resizeMode="contain"
            />
          </View>

          {/* Bell View */}
          <View
            style={{
              flex: 1,
              height: 32,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <View style={styles.bell}>
              <MaterialCommunityIcons name="bell" size={16} color="white" />
            </View>
          </View>
        </View>
      </View>

      {/* Page Content */}
      <ScrollView
        style={{
          backgroundColor: colors.light.mainColor,
        }}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        nestedScrollEnabled={true}
      >
        {/* plan details carousel */}
        <CarouselComponent />

        {/* content */}
        <View style={styles.contentContainer}>
          {/* page controler */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 16,
            }}
          >
            {items.map((item: Item, index: number) => (
              <View style={{ alignItems: "center", gap: 6 }} key={index}>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: "#625EEE26",
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 7.5,
                  }}
                >
                  <MaterialIcons
                    name={item.icon}
                    size={28}
                    color={colors.light.mainColor}
                  />
                </View>
                <Text
                  style={{
                    fontFamily: "PublicSansRegular",
                    fontSize: 12,
                    lineHeight: 15,
                    letterSpacing: -0.1,
                  }}
                >
                  {item.name}
                </Text>
              </View>
            ))}
          </View>

          {/* Saving Plans section */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ rowGap: 16, flexGrow: 1 }}
            style={{ backgroundColor: "white" }}
          >
            {savingPlans.map((plan: savingPlans, index: number) => (
              <LinearGradient
                key={index}
                colors={["#F9F7F7", "#F2F1FF"]}
                style={{
                  width: 262.12,
                  maxWidth: 262.12,
                  overflow: "hidden",
                  paddingHorizontal: 12,
                  paddingTop: 12,
                  paddingBottom: 20,
                  borderRadius: 16,
                  gap: 12,
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  borderWidth: 1,
                  borderColor: "#625EEE26",
                  alignSelf: "flex-start",
                  marginRight: index === savingPlans.length - 1 ? 0 : 12,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "PublicSansBold",
                      fontSize: 20,
                      lineHeight: 28,
                      letterSpacing: 0.1,
                      maxWidth: 200,
                    }}
                  >
                    {plan.title}
                  </Text>
                  <MaterialIcons
                    name={plan.icon}
                    size={40}
                    color={colors.light.mainColor}
                    style={{ flexShrink: 0, width: 40 }}
                  />
                </View>
                <Text
                  style={{
                    fontFamily: "PublicSansBold",
                    fontSize: 12,
                    lineHeight: 15,
                    letterSpacing: -0.1,
                    color: colors.light.mainColor,
                  }}
                >
                  {plan.planName}
                </Text>
              </LinearGradient>
            ))}
          </ScrollView>

          {/* service hub section */}
          <View style={{ gap: 17 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: "PublicSansBold",
                  fontSize: 16,
                  lineHeight: 22,
                  letterSpacing: -0.1,
                  color: "#00000080",
                }}
              >
                Service Hub
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={20}
                color="black"
              />
            </View>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ rowGap: 16, flexGrow: 1 }}
              style={{ backgroundColor: "white" }}
            >
              <View
                style={{
                  width: 148,
                  maxWidth: 148,
                  height: 203,
                  overflow: "hidden",
                  paddingHorizontal: 12,
                  paddingTop: 12,
                  paddingBottom: 26.36,
                  borderRadius: 16,
                  gap: 12,
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  borderWidth: 2,
                  borderColor: "#8F8F8F",
                  alignSelf: "flex-start",
                  marginRight: 12,
                }}
              >
                <MaterialIcons
                  name="add"
                  size={32}
                  color={colors.light.mainColor}
                  style={{ flexShrink: 0, width: 40 }}
                />
                <Text
                  style={{
                    fontFamily: "PublicSansBold",
                    fontSize: 14,
                    lineHeight: 22,
                    letterSpacing: -0.1,
                    color: "#636363",
                  }}
                >
                  Cash in advance
                </Text>
                <Text
                  style={{
                    fontFamily: "PublicSansRegular",
                    fontSize: 10,
                    lineHeight: 16,
                    letterSpacing: 0,
                    color: "#636363",
                  }}
                >
                  You can now avail up to{" "}
                  <Text
                    style={{
                      fontFamily: "PublicSansBold",
                    }}
                  >
                    50%
                  </Text>{" "}
                  of your total balance,
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.light.mainColor,
                    borderRadius: 10,
                    paddingVertical: 7.34,
                    paddingHorizontal: 8,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "PublicSansBold",
                      fontSize: 12,
                      lineHeight: 15,
                      letterSpacing: -0.1,
                    }}
                  >
                    Request Cash
                  </Text>
                </TouchableOpacity>
              </View>

              {serviceHub.map((service: serviceHub, index: number) => (
                <LinearGradient
                  key={index}
                  colors={["#F9F7F7", "#F2F1FF"]}
                  style={{
                    width: 148,
                    maxWidth: 148,
                    height: 203,
                    overflow: "hidden",
                    paddingHorizontal: 12,
                    paddingTop: 12,
                    paddingBottom: 26.36,
                    borderRadius: 16,
                    gap: 11,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    borderWidth: 2,
                    borderColor: "#625EEE26",
                    alignSelf: "flex-start",
                    marginRight: index === serviceHub.length - 1 ? 0 : 12,
                  }}
                >
                  <View
                    style={{
                      width: 110,
                      height: 110,
                      overflow: "hidden",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image source={service.image} />
                  </View>

                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderColor: "#202020",
                      borderRadius: 10,
                      paddingVertical: 7.34,
                      paddingHorizontal: 8,
                    }}
                  >
                    <Text
                      style={{
                        color: "#202020",
                        fontFamily: "PublicSansBold",
                        fontSize: 12,
                        lineHeight: 15,
                        letterSpacing: -0.1,
                      }}
                    >
                      {service.name}
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              ))}
              <View
                style={{
                  height: 203,
                  justifyContent: "center",
                  backgroundColor: "white",
                  marginLeft: 12,
                }}
              >
                <Text
                  style={{
                    color: colors.light.mainColor,
                    fontFamily: "PublicSansBold",
                    fontSize: 16,
                    lineHeight: 22,
                    letterSpacing: -0.1,
                  }}
                >
                  See All
                </Text>
              </View>
            </ScrollView>
          </View>

          {/* Financial Academy section */}
          <View style={{ gap: 17 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: "PublicSansBold",
                  fontSize: 16,
                  lineHeight: 22,
                  letterSpacing: -0.1,
                  color: "#00000080",
                }}
              >
                Financial Academy
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={20}
                color="black"
              />
            </View>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ rowGap: 16, flexGrow: 1 }}
              style={{ backgroundColor: "white" }}
            >
              {financialAcademy.map((plan: financialAcademy, index: number) => (
                <View
                  key={index}
                  style={{
                    position: "relative",
                    width: 148,
                    maxWidth: 148,
                    height: 203,
                    overflow: "hidden",
                    borderRadius: 16,
                    gap: 11,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    borderWidth: 2,
                    borderColor: "#625EEE26",
                    alignSelf: "flex-start",
                    marginRight: index === financialAcademy.length - 1 ? 0 : 12,
                    backgroundColor: colors.light.mainColor,
                  }}
                >
                  <LinearGradient
                    key={index}
                    colors={["#00000000", "#000000"]}
                    locations={[0.46, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={{
                      width: 148,
                      maxWidth: 148,
                      height: 203,
                      overflow: "hidden",
                      borderRadius: 16,
                      gap: 11,
                      alignItems: "center",
                      justifyContent: "flex-end",
                      borderWidth: 2,
                      borderColor: "#625EEE26",
                      alignSelf: "center",
                      position: "absolute",
                      zIndex: 1,
                    }}
                  />

                  <View
                    style={{
                      width: 148,
                      height: 203,
                      overflow: "hidden",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image source={plan.image} style={{ width: "100%" }} />
                  </View>
                  <Text
                    style={{
                      position: "absolute",
                      zIndex: 2,
                      color: "white",
                      fontFamily: "PublicSansBold",
                      fontSize: 16,
                      lineHeight: 22,
                      letterSpacing: -0.1,
                      bottom: 10,
                      left: 16,
                    }}
                  >
                    {plan.title}
                  </Text>
                </View>
              ))}

              <View
                style={{
                  height: 203,
                  justifyContent: "center",
                  backgroundColor: "white",
                  marginLeft: 12,
                }}
              >
                <Text
                  style={{
                    color: colors.light.mainColor,
                    fontFamily: "PublicSansBold",
                    fontSize: 16,
                    lineHeight: 22,
                    letterSpacing: -0.1,
                  }}
                >
                  See All
                </Text>
              </View>
            </ScrollView>
          </View>
          <View style={{ height: 50 }} />
        </View>
      </ScrollView>
    </View>
  );
}

const colors = Colors;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light.mainColor,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  header: {
    backgroundColor: colors.light.mainColor,
    height: 100,
    justifyContent: "flex-end",
    paddingBottom: 12.5,
    paddingHorizontal: 24,
  },
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    overflow: "hidden",
    flex: 1,
  },
  avatarImage: {
    width: 32,
    height: 32,
  },
  bell: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    padding: 6,
  },
  contentContainer: {
    backgroundColor: "white",
    paddingVertical: 24,
    paddingHorizontal: 16,
    flex: 1,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    marginTop: -28.16,
    gap: 24,
  },
});
