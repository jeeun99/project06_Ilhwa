import { Box, Text, Image, HStack, VStack } from "native-base";
import { TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const bgImg = require("../assets/img/signupbg.png");
const pagelogo = require("../assets/img/pagelogo.png");
const mypageImage = require("../assets/img/mypageimg.png");

export default function MyPage({ navigation, route }) {
  // console.log(route);

  const goLogin = () => {
    navigation.navigate("SignInPage");
  };
  const [login, setLogin] = useState(true);

  return (
    <Box style={styles.container}>
      <Box safeAreaTop />
      <Image source={bgImg} alt="bg" style={styles.bgImage} />
      <Box
        pl={4}
        h={"85px"}
        borderBottomWidth={0.3}
        borderBottomColor={"#656565"}
        justifyContent="center"
      >
        <Image
          style={{ width: 100 }}
          resizeMode="contain"
          source={pagelogo}
          alt="logo"
        />
      </Box>
      {login ? (
        <Box px={8}>
          <Box mt={8}>
            <HStack>
              <Box
                borderWidth={1}
                h={16}
                w={16}
                justifyContent="center"
                alignItems="center"
                borderRadius="64"
              >
                <Ionicons name="person" size={30} color="black" />
              </Box>
              <VStack pl={4} justifyContent="space-evenly">
                <Text fontSize={16} color="#2c2c2c" fontFamily={"SUITEBold"}>
                  000님
                </Text>
                <TouchableOpacity onPress={goLogin}>
                  <HStack alignItems="center" justifyContent="center">
                    <Text
                      fontSize={14}
                      color="#2c2c2c"
                      fontFamily={"SUITERegular"}
                      pr={1}
                    >
                      로그아웃
                    </Text>
                    <Entypo name="chevron-right" size={16} color="#2c2c2c" />
                  </HStack>
                </TouchableOpacity>
              </VStack>
            </HStack>
          </Box>

          <Box
            mt="22"
            bgColor={"#f6f6f6"}
            w={"100%"}
            px={4}
            py={"14"}
            borderRadius={"20"}
          >
            <HStack justifyContent="space-between" alignItems="center">
              <Text>내 프로필</Text>
              <Entypo name="chevron-right" size={16} color="#2c2c2c" />
            </HStack>
          </Box>
          <Box
            mt="22"
            bgColor={"#f6f6f6"}
            w={"100%"}
            px={4}
            py={"14"}
            borderRadius={"20"}
          >
            <HStack
              pb={"14"}
              borderBottomColor={"#656565"}
              borderBottomWidth={0.3}
              justifyContent="space-between"
              alignItems="center"
            >
              <HStack>
                <Text>담은 문장</Text>
                <Box
                  ml={4}
                  py={0.2}
                  px={2}
                  borderRadius={10}
                  backgroundColor={"#cddbf5"}
                >
                  <Text color={"#fafafa"}>30</Text>
                </Box>
              </HStack>
              <Entypo name="chevron-right" size={16} color="#2c2c2c" />
            </HStack>
            <HStack
              pt={"14"}
              justifyContent="space-between"
              alignItems="center"
            >
              <HStack>
                <Text>틀린 문제</Text>
                <Box
                  ml={4}
                  py={0.2}
                  px={2}
                  borderRadius={10}
                  backgroundColor={"#cddbf5"}
                >
                  <Text color={"#fafafa"}>5</Text>
                </Box>
              </HStack>
              <Entypo name="chevron-right" size={16} color="#2c2c2c" />
            </HStack>
          </Box>
        </Box>
      ) : (
        <Box px={8}>
          <Box mt={8} alignItems="center">
            <Text fontFamily={"SUITERegular"} fontSize={"14"}>
              현재 비회원 상태입니다.
            </Text>
            <Text mt={8} fontFamily={"SUITERegular"} fontSize={"14"}>
              마이페이지를 이용하려면
            </Text>
            <Text mt={2} mb={13} fontFamily={"SUITERegular"} fontSize={"14"}>
              로그인 해주세요.
            </Text>
          </Box>
          <TouchableOpacity onPress={goLogin}>
            <LinearGradient
              style={styles.btnLogIn}
              colors={["#FED2CF", "#CDDBF5"]}
              start={{ x: 0.1, y: 1 }}
              end={{ x: 1, y: 0 }}
            >
              <Text
                color={"#2C2C2C"}
                textAlign="center"
                stroke="purple"
                fontFamily={"SUITEBold"}
                py={1}
              >
                로그인
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </Box>
      )}
    </Box>
  );
}

const styles = StyleSheet.create({
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
  btnLogIn: {
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 50,
  },
  bgImage: {
    justifyContent: "flex-start",
    flex: 1,
    width: "100%",
    objectFit: "contain",
    alignItems: "center",
    backgroundColor: "white",
    position: "absolute",
    top: -50,
    left: 0,
  },
  container: {
    position: "relative",
    flex: 1,
  },
});
