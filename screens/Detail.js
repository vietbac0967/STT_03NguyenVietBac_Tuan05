import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function Detail({navigation}) {
  const [image, setImage] = useState("vs_blue.png");
  const [color, setColor] = useState("blue");
  const [supplier, setSupplier] = useState("Tiki Trading");
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.img}
          source={require(`../assets/${image}`)}
        ></Image>
        <View style={{ paddingLeft: 20 }}>
          <Text style={{ fontSize: 15, fontWeight: 400 }}>
            Điện Thoại Vsmart Joy 3{"\n"} Hàng chính hãng
          </Text>

          <Text style={{ paddingTop: 5 }}>
            Màu: <Text style={{ fontWeight: "bold" }}>{color}</Text>
          </Text>

          <Text style={{ paddingTop: 5 }}>
            Cung cấp bởi <Text style={{ fontWeight: "bold" }}>{supplier}</Text>
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 700,
              marginVertical: 3,
              paddingTop: 5,
            }}
          >
            1.790.000 đ
          </Text>
        </View>
      </View>
      <View style={styles.contain}>
        <View style={{ alignItems: "flex-start" }}>
          <Text style={{ fontSize: 18, fontWeight: 400, paddingLeft: 5 }}>
            Chọn một màu bên dưới:
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Pressable
            onPress={() => {
              setImage("vs_silver.png");
              setColor("silver");
              setSupplier("Tiki Trading One");
            }}
            style={[styles.box, { backgroundColor: "rgba(197, 241, 251, 1)" }]}
          ></Pressable>
          <Pressable
            onPress={() => {
              setImage("vs_red.png");
              setColor("red");
              setSupplier("Tiki Trading Two");
            }}
            style={[styles.box, { backgroundColor: "rgba(243, 13, 13, 1)" }]}
          ></Pressable>
          <Pressable
            onPress={() => {
              setImage("vs_black.png");
              setColor("black");
              setSupplier("Tiki Trading Three");
            }}
            style={[styles.box, { backgroundColor: "rgba(0, 0, 0, 1)" }]}
          ></Pressable>
          <Pressable
            onPress={() => {
              setImage("vs_blue.png");
              setColor("blue");
              setSupplier("Tiki Trading");
            }}
            style={[styles.box, { backgroundColor: "rgba(35, 72, 150, 1)" }]}
          ></Pressable>
        </View>
        <View style={{ alignItems: "center" }}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Home",{image})}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: 700,
                color: "white",
              }}
            >
              XONG
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 112,
    height: 132,
    resizeMode: "contain",
  },
  contain: {
    flex: 1,
    backgroundColor: "rgba(196, 196, 196, 1)",
  },
  box: {
    marginVertical: 5,
    width: 85,
    height: 80,
    resizeMode: "contain",
  },
  button: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(202, 21, 54, 1)",
    width: "80%",
    height: 45,
    justifyContent: "center",
    backgroundColor: "rgba(25, 82, 226, 0.58)",
  },
});
