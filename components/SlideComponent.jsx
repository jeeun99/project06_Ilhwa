import React from "react";
import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Image, Box, IconButton } from "native-base";
import Swiper from "react-native-swiper";
import ImageBlurLoading from "react-native-image-blur-loading";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
const accommodationBg = require("../assets/img/accommodationBg.png");
const trafficBg = require("../assets/img/trafficBg.png");
const shoppingBg = require("../assets/img/shoppingBg.png");
const foodBg = require("../assets/img/foodBg.png");

export default function SlideComponent({ data, bgname }) {
  const [acco, setAcco] = useState([]);
  const [like, setLike] = useState(false);
  const [bg, setBg] = useState("");
  useEffect(() => {
    const tempAcco = [];
    for (let i = 0; i < 5; i++) {
      tempAcco.push(data[i]);
    }
    setAcco(tempAcco);
    if (bgname === "accommodation") {
      setBg(accommodationBg);
    } else if (bgname === "traffic") {
      setBg(trafficBg);
    } else if (bgname === "shopping") {
      setBg(shoppingBg);
    } else if (bgname === "food") {
      setBg(foodBg);
    }
  }, [bgname, data]);
  if (acco.length === 0) {
    return null;
  }
  //   console.log("acc", acco);
  console.log(bgname);
  return (
    <Swiper
      loop
      autoplay
      autoplayTimeout={5}
      autoplayDirection
      showsPagination={false}
    >
      {acco.map((item, index) => (
        <View key={index} style={styles.slide}>
          {/* 스와이퍼 아이템 컨텐츠 */}
          <ImageBlurLoading
            source={bg}
            style={{
              width: "100%",
              height: "100%",
              zIndex: 5,
            }}
          />
          <Box
            position={"absolute"}
            w="100%"
            h="100%"
            backgroundColor={"#0000006c"}
            top={0}
            left={0}
            zIndex={10}
          />
          <Box p={4} position={"absolute"} top={0} zIndex={20}>
            <Text pb={4} color={"#fff"} fontFamily={"SUITEBold"} fontSize="12">
              {item.translation}
            </Text>
            <Text color={"#fff"} fontFamily={"KCCChassam"} fontSize="12">
              {item.descko}
            </Text>
            <Text color={"#fff"} fontFamily={"SUITERegular"} fontSize="12">
              {item.descjp}
            </Text>
          </Box>
          <LinearGradient
            colors={["#FED2CF", "#CDDBF5"]}
            start={{ x: 0.1, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{
              width: 28,
              height: 28,
              borderRadius: 32,
              justifyContent: "center",
              alignItems: "center",
              zIndex: 30,
              position: "absolute",
              right: 16,
              bottom: 20,
            }}
          >
            <Entypo name="controller-play" size={22} color="white" />
          </LinearGradient>
          <IconButton
            position="absolute"
            right={1}
            top={0}
            zIndex={30}
            onPress={() => setLike(!like)}
            icon={
              like ? (
                <Entypo name="heart" size={24} color="red" />
              ) : (
                <Entypo name="heart-outlined" size={24} color="red" />
              )
            }
          />
        </View>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  slide: {
    width: "90%",
    height: "100%",
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
    marginHorizontal: 16,
    // 슬라이드 컨텐츠 스타일
  },
});
