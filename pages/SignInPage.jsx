import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Center,
  Text,
  Box,
  Button,
  FormControl,
  HStack,
  Link,
  IconButton,
  VStack,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";

import Intro from "./Intro";
import SignInInput from "../components/SignInInput";

const bgImg = require("../assets/img/signInbg.png");
const logo = require("../assets/img/logo.png");
const kakao = require("../assets/img/kakao.png");

export default function SignInPage({ navigation }) {
  const [ready, setReady] = useState(false);

  const goSignUp = () => {
    navigation.navigate("SignUpPage");
  };
  const goHome = () => {
    navigation.navigate("TabNavigator");
  };

  useEffect(() => {
    setTimeout(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, 10);
    setTimeout(() => {
      setReady(true);
    }, 1500);
  }, []);

  return ready ? (
    <View style={styles.container}>
      {/* <Box safeAreaTop /> */}

      <ImageBackground source={bgImg} style={styles.bgImage}>
        <Image source={logo} style={styles.logoImg} />
        <FormControl w={"100%"} mt="30px" px={8} pb={4}>
          <SignInInput title={"ID를 입력해주세요."} />
          <SignInInput title={"PASSWORD를 입력해주세요."} />

          <TouchableOpacity onPress={goHome}>
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
                // fontFamily={"SUITERegular"}
                // fontWeight="bold"
              >
                로그인
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <HStack mt={4} w={"100%"} justifyContent="space-between">
            <TouchableOpacity>
              <Text fontSize={12} fontFamily={"SUITEBold"} color={"white"}>
                아이디 찾기
              </Text>
            </TouchableOpacity>
            <Box style={styles.lineboxCon}>
              <Box style={styles.linebox}></Box>
            </Box>
            <TouchableOpacity justifyContent="center">
              <Text fontSize={12} fontFamily={"SUITEBold"} color={"white"}>
                비밀번호 찾기
              </Text>
            </TouchableOpacity>
            <Box>
              <Box style={styles.linebox}></Box>
            </Box>
            <TouchableOpacity onPress={goSignUp}>
              <Text fontSize={12} fontFamily={"SUITEBold"} color={"white"}>
                회원가입
              </Text>
            </TouchableOpacity>
          </HStack>

          <Box mt={"35px"}>
            <Text
              color={"white"}
              textAlign={"center"}
              fontSize={12}
              fontFamily={"SUITEBold"}
            >
              간편로그인
            </Text>
            <HStack
              mt={4}
              w={"80%"}
              justifyContent="space-around"
              alignSelf={"center"}
            >
              <TouchableOpacity style={styles.snsIcons}>
                <Image
                  source={kakao}
                  style={{ width: 30, height: 30 }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.snsIcons}>
                <AntDesign name="google" size={28} color="#3a3a3a" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.snsIcons}>
                <FontAwesome5 name="facebook" size={28} color="#3a3a3a" />
              </TouchableOpacity>
            </HStack>
          </Box>
          <TouchableOpacity onPress={goHome}>
            <HStack mt={"40px"} alignItems="center" justifyContent="center">
              <Text
                fontSize={12}
                fontFamily={"SUITEBold"}
                color={"white"}
                pr={2}
              >
                비회원으로 시작하기
              </Text>
              <Entypo name="chevron-right" size={18} color="white" />
            </HStack>
          </TouchableOpacity>
        </FormControl>
      </ImageBackground>
    </View>
  ) : (
    <Intro />
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  bgImage: {
    justifyContent: "flex-start",
    flex: 1,
    width: "100%",
    objectFit: "cover",
    alignItems: "center",
  },
  logoImg: {
    width: 120,
    height: 100,
    objectFit: "contain",
    marginTop: 100,
  },
  btnLogIn: {
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 50,
  },
  lineboxCon: {
    position: "relative",
  },
  linebox: {
    borderColor: "white",
    borderRightWidth: 1,
    height: 12,
    position: "absolute",
    top: "25%",
  },
  snsIcons: {
    width: 48,
    height: 48,
    backgroundColor: "rgba(250, 250, 250, 0.75)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
