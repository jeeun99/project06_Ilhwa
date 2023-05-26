import { Box, Text, Image, HStack, Slider, Center } from "native-base";
import { useEffect } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import SwipeCardComponent from "../components/SwipeCardComponent";

const mypageImage = require("../assets/img/mypageimg.png");

export default function MainPage({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      title: "홈",
      headerShown: true,
      headerStyle: {
        backgroundColor: "#fff",
        height: 85,
        shadowColor: "transparent",
        borderBottomWidth: 0.3,
        borderBottomColor: "#2c2c2c",
      },
      headerTitleStyle: {
        fontSize: 16,
        fontFamily: "SUITEBold",
        justifyContent: "center",
      },
      headerTintColor: "#2C2C2C",
      headerTitleAlign: "center",
    });
  }, []);
  const goAccommodation = () => {
    navigation.navigate("AccommodationPage");
  };
  const goFoood = () => {
    navigation.navigate("FoodPage");
  };
  const goShopping = () => {
    navigation.navigate("ShoppingPage");
  };
  const goTraffic = () => {
    navigation.navigate("TrafficPage");
  };

  return (
    <Box px={8} style={styles.container}>
      <Box mt={8} style={styles.imgcon} borderRadius={20} overflow={"hidden"}>
        <Image style={styles.imgs} source={mypageImage} alt="img" />
        <Box px={"22px"} py={4} w={"100%"} h={"100%"}>
          <Text color={"#656565"} fontFamily={"SUITEBold"} fontSize="14" pb={1}>
            내 학습 진도
          </Text>
          <Box>
            <HStack>
              <TouchableOpacity>
                <HStack mr={8} alignItems={"center"}>
                  <Box
                    justifyContent={"center"}
                    alignItems="center"
                    bgColor={"#79A8FF"}
                    w="16px"
                    h="16px"
                    borderRadius={"20px"}
                    mr={1}
                  >
                    <Text
                      fontFamily={"SUITERegular"}
                      fontSize="10"
                      color={"#FAFAFA"}
                    >
                      5
                    </Text>
                  </Box>
                  <Text color={"#656565"}>틀린문제</Text>
                  <Entypo
                    name="chevron-small-right"
                    size={18}
                    color="#656565"
                  />
                </HStack>
              </TouchableOpacity>
              <TouchableOpacity>
                <HStack alignItems={"center"}>
                  <Box
                    justifyContent={"center"}
                    alignItems="center"
                    bgColor={"#79A8FF"}
                    w="20px"
                    h="16px"
                    borderRadius={"20px"}
                    mr={1}
                  >
                    <Text
                      fontFamily={"SUITERegular"}
                      fontSize="10"
                      color={"#FAFAFA"}
                    >
                      30
                    </Text>
                  </Box>
                  <Text color={"#656565"}>담은 문장</Text>
                  <Entypo
                    name="chevron-small-right"
                    size={18}
                    color="#656565"
                  />
                </HStack>
              </TouchableOpacity>
            </HStack>
          </Box>
          <Box>
            <Text
              color={"#656565"}
              fontFamily={"SUITEBold"}
              fontSize="14"
              pt={2}
              pb={1}
            >
              현재 진도
            </Text>
            <Box w="100%">
              <Slider
                w="3/4"
                maxW="300"
                defaultValue={70}
                minValue={0}
                maxValue={100}
                accessibilityLabel="hello world"
                step={10}
              >
                <Slider.Track>
                  <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
              </Slider>
            </Box>
            ;
            <HStack>
              <Text
                color={"#656565"}
                fontFamily={"SUITERegular"}
                fontSize="14"
                pr={2}
              >
                3단계 완료
              </Text>
              <Entypo name="chevron-small-right" size={18} color="#656565" />
              <Text
                color={"#656565"}
                fontFamily={"SUITERegular"}
                fontSize="14"
                px={2}
              >
                4단계 진행중
              </Text>
            </HStack>
          </Box>
        </Box>
      </Box>
      <Box mt={8}>
        <Text
          textAlign={"center"}
          color={"#2c2c2c"}
          fontFamily={"SUITEBold"}
          fontSize="14"
        >
          카테고리
        </Text>
        <Text
          textAlign={"center"}
          color={"#656565"}
          fontFamily={"KCCChassam"}
          fontSize="12"
        >
          상황별로 필요한 어휘를 만나보세요!
        </Text>
        <HStack pt={4} justifyContent={"space-around"}>
          <TouchableOpacity
            onPress={goAccommodation}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Box
              w={"135px"}
              h="135px"
              borderRadius={"135px"}
              backgroundColor="#f6f6f6"
              justifyContent={"center"}
              alignItems="center"
            >
              <Image
                w={"70px"}
                resizeMode="contain"
                source={require("../assets/img/accommodation.png")}
                alt="accommodation"
              />
            </Box>
            <Text>숙박</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goFoood}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              w={"135px"}
              h="135px"
              borderRadius={"135px"}
              backgroundColor="#f6f6f6"
              justifyContent={"center"}
              alignItems="center"
            >
              <Image
                w={"70px"}
                resizeMode="contain"
                source={require("../assets/img/food.png")}
                alt="food"
              />
            </Box>
            <Text>외식</Text>
          </TouchableOpacity>
        </HStack>
        <HStack pt={4} justifyContent={"space-around"}>
          <TouchableOpacity
            onPress={goShopping}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Box
              w={"135px"}
              h="135px"
              borderRadius={"135px"}
              backgroundColor="#f6f6f6"
              justifyContent={"center"}
              alignItems="center"
            >
              <Image
                w={"70px"}
                resizeMode="contain"
                source={require("../assets/img/shopping.png")}
                alt="food"
              />
            </Box>
            <Text>쇼핑</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goTraffic}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              w={"135px"}
              h="135px"
              borderRadius={"135px"}
              backgroundColor="#f6f6f6"
              justifyContent={"center"}
              alignItems="center"
            >
              <Image
                w={"70px"}
                resizeMode="contain"
                source={require("../assets/img/traffic.png")}
                alt="traffic"
              />
            </Box>
            <Text>교통</Text>
          </TouchableOpacity>
        </HStack>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  imgcon: {
    position: "relative",
    height: 130,
  },
  imgs: {
    width: "100%",
    height: 130,
    resizeMode: "stretch",
    position: "absolute",
    top: 0,
    left: 0,
  },
  goStudy: {
    backgroundColor: "#fafafa",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
});
