import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Colors } from "@/constants/Colors";

const { width } = Dimensions.get("window");
const colors = Colors;

interface CardItem {
  title: string;
  amount: string;
  currency: string;
}

const data: CardItem[] = [
  { title: "Gratuity Plan", amount: "10,984", currency: "AED" },
  { title: "Savings Plan", amount: "5,200", currency: "AED" },
  { title: "Gratuity Plan", amount: "10,984", currency: "AED" },
  { title: "Savings Plan", amount: "5,200", currency: "AED" },
];

const Card = ({ item }: { item: CardItem }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.priceContainer}>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{item.amount}</Text>
          <Text style={styles.currency}>{item.currency}</Text>
        </View>
        <Text style={styles.viewMore}>View More</Text>
      </View>
    </View>
  );
};

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View
      style={{
        backgroundColor: colors.light.mainColor,
        paddingBottom: 28.16,
        height: 200,
      }}
    >
      <Carousel
        loop
        width={width}
        height={134}
        autoPlay={false}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ item }) => <Card item={item} />}
      />

      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === currentIndex && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light.mainColor,
    padding: 20,
    width: width,
    height: 134,
    justifyContent: "space-between",
    gap: 20,
  },
  title: {
    color: "white",
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.1,
    fontFamily: "PublicSansMedium",
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  amount: {
    fontSize: 56,
    color: "white",
    lineHeight: 72,
    letterSpacing: -1,
    fontFamily: "PublicSansBold",
  },
  currency: {
    fontSize: 16,
    color: "white",
    fontFamily: "PublicSansLight",
    lineHeight: 22,
    letterSpacing: 0,
  },
  viewMore: {
    fontSize: 12,
    color: "white",
    fontFamily: "PublicSansRegular",
    lineHeight: 15,
    letterSpacing: -0.1,
    alignSelf: "flex-end",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16.49,
    paddingBottom: 28.16,
    paddingTop: 16.5,
  },
  dot: {
    width: 8,
    height: 3.59,
    borderRadius: 2,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    marginHorizontal: 4,
  },
  activeDot: {
    width: 20,
    height: 3.59,
    borderRadius: 2,
    backgroundColor: "white",
  },
});

export default CarouselComponent;
