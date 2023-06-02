import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
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

import SignInInput from "../components/SignInInput";

import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const bgImg = require("../assets/img/signInbg.png");
const logo = require("../assets/img/logo.png");
const kakao = require("../assets/img/kakao.png");

export default function SignInPage({ navigation }) {
  const [ready, setReady] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const goSignUp = () => {
    navigation.navigate("SignUpPage");
  };
  const goHome = () => {
    navigation.navigate("TabNavigator");
  };

  const setEmailFunc = (itemInputEmail) => {
    // 이메일 상태값 관리 함수
    setEmail(itemInputEmail);
  };
  const setPasswordFunc = (itemInputPassword) => {
    // 패스워드 상태값 관리 함수
    setPassword(itemInputPassword);
  };
  // beforeRemove 뒤로가기 방지 기능
  useEffect(() => {
    setTimeout(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, 10);
    // navigation.addListener("beforeRemove", (e) => {
    //   e.preventDefault();
    //   Alert.alert("경고", "로그인페이지에서는 뒤로갈 수 없습니다.");
    // });

    // 로딩화면 보여줄 때 session 값 확인해서 메인페이지로 이동
    setTimeout(() => {
      AsyncStorage.getItem("session", (err, result) => {
        console.log("로그인페이지 저장통", result);
        if (result) {
          // 가입정보가 있다면 바로 메인페이지로 이동
          navigation.navigate("TabNavigator");
        } else {
          // 가입 정보가 없다면 로그인 페이지를 보여줌
          setReady(false);
        }
      });
      setReady(false);
    }, 1000);
  }, []);

  const doSignIn = () => {
    // 로그인 버튼 클릭시 실행되는 함수
    if (email === "") {
      setEmailError("이메일을 입력해주세요.");
    } else {
      setEmailError("");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    } else {
      setPasswordError("");
    }

    // 로그인 처리
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("로그인성공", user.email);

        // AsyncStorage에 로그인 성공한 이메일을 저장
        AsyncStorage.setItem("session", email);

        // navigation.navigate("TabNavigator");

        // 새로운 페이지 히스토리를 남기라는 의미
        navigation.push("TabNavigator");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("로그인실패", errorCode, errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      {/* <Box safeAreaTop /> */}

      <ImageBackground source={bgImg} style={styles.bgImage}>
        <Image source={logo} style={styles.logoImg} />
        <FormControl w={"100%"} mt="30px" px={8} pb={4}>
          <SignInInput
            error={emailError}
            setFunc={setEmailFunc}
            type={"email"}
            title={"EMAIL을 입력해주세요."}
          />
          <SignInInput
            error={passwordError}
            setFunc={setPasswordFunc}
            type={"password"}
            title={"PASSWORD를 입력해주세요."}
          />

          <TouchableOpacity onPress={doSignIn}>
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
