import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Center } from "native-base";

const introImg = require("../assets/img/introImg.png");
import introLogo from "../assets/img/introLogo.png";

export default function Intro() {
  return (
    <Center style={styles.container}>
      <Image source={introImg} style={styles.introimg} resizeMode="cover" />

      <Image source={introLogo} alt={"introLogo"} style={styles.logoimg} />
    </Center>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    position: "relative",
  },
  introimg: {
    flex: 1,
    width: "100%",
    position: "absolute",
  },

  logoimg: {
    position: "absolute",
    objectFit: "contain",
    width: 130,
    height: 150,
    top: 50,
    left: 48,
  },
});
