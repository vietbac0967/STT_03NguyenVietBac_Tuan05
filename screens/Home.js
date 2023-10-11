import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home({ navigation, route }) {
  const data = route.params;
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", flex: 3 }}>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={require(`../assets/${
            data?.image ? data.image : "vs_blue.png"
          }`)}
        ></Image>
      </View>
      <View style={styles.content}>
        <Text style={[styles.text, { paddingLeft: 27 }]}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style={styles.rating}>
          <View style={styles.stars}>
            <Image
              style={styles.star}
              source={require("../assets/star.png")}
            ></Image>
            <Image
              style={styles.star}
              source={require("../assets/star.png")}
            ></Image>
            <Image
              style={styles.star}
              source={require("../assets/star.png")}
            ></Image>
            <Image
              style={styles.star}
              source={require("../assets/star.png")}
            ></Image>
          </View>

          <View style={{ paddingLeft: 50 }}>
            <Text style={styles.text}>(Xem 828 đánh giá)</Text>
          </View>
        </View>
        <View style={styles.price}>
          <View style={{ justifyContent: "flex-start" }}>
            <Text style={{ fontSize: 18, fontWeight: 700, paddingLeft: 26 }}>
              1.790.000 đ
            </Text>
          </View>
          <View style={{ paddingLeft: 100, justifyContent: "flex-end" }}>
            <Text style={styles.textDiscount}>1.790.000 đ</Text>
          </View>
        </View>
        <View style={[styles.rating, { paddingLeft: 26 }]}>
          <View style={{ justifyContent: "flex-start" }}>
            <Text style={styles.message}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          </View>
          <View style={{ justifyContent: "flex-end", paddingLeft: 15 }}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../assets/group.png")}
            ></Image>
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Detail");
          }}
        >
          <Text style={{ textAlign: "center" }}>4 MÀU-CHỌN MÀU</Text>
          <Image
            style={{
              width: 11.5,
              height: 14,
              marginLeft: 30,
            }}
            source={require("../assets/Vector.png")}
          ></Image>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          flex: 1,
        }}
      >
        <TouchableOpacity style={[styles.button, styles.buttonPrice]}>
          <Text style={{ fontSize: 20, fontWeight: 700, color: "white" }}>
            CHỌN MUA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 301,
    height: 361,
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 24,
  },
  rating: {
    flexDirection: "row",
    marginVertical: 5,
  },
  star: {
    width: 23,
    height: 25,
    marginHorizontal: 4,
  },
  stars: {
    flexDirection: "row",
    paddingLeft: 25,
  },
  textDiscount: {
    fontSize: 15,
    fontWeight: 700,
    textDecorationLine: "line-through",
  },
  price: {
    flexDirection: "row",
    marginVertical: 5,
  },
  message: {
    fontSize: 12,
    fontWeight: 700,
    color: "rgba(250, 0, 0, 1)",
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(0, 0, 0, 0.46)",
    width: "80%",
    height: 34,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPrice: {
    marginTop: 15,
    backgroundColor: "transparent",
    backgroundImage:
      "linear-gradient(0deg, #CA1536, #CA1536),linear-gradient(0deg, #EE0A0A, #EE0A0A)",
    borderColor: "rgba(202, 21, 54, 1)",
  },
});
