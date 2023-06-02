import {
  Box,
  Text,
  Switch,
  Image,
  HStack,
  VStack,
  Modal,
  Button,
} from "native-base";
import { TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { auth, db } from "../config/firebase";
import { deleteUser, signOut } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const bgImg = require("../assets/img/signupbg.png");
const pagelogo = require("../assets/img/pagelogo.png");
const mypageImage = require("../assets/img/mypageimg.png");

export default function MyPage({ navigation, route }) {
  // console.log(route);
  const [showModal, setShowModal] = useState(false);
  const [login, setLogin] = useState(true);

  const goLogin = () => {
    navigation.navigate("SignInPage");
  };
  const goChangeMyInfo = () => {
    navigation.navigate("ChangeMyInfo");
  };
  const deleteUserInfo = async () => {
    const uid = auth.currentUser.uid;
    await deleteDoc(doc(db, "users", uid));
    deleteUser(auth.currentUser)
      .then(() => {
        AsyncStorage.removeItem("session");
        navigation.push("SignInPage");
      })
      .catch((error) => console.log("delete error", error));
  };

  // 로그아웃 기능 함수
  const logoutFunc = () => {
    signOut(auth)
      .then(() => {
        console.log("로그아웃");
        AsyncStorage.removeItem("session");
        navigation.push("SignInPage");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    AsyncStorage.getItem("session", (err, result) => {
      console.log("마이페이지 저장통", result);
      if (result) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    });
  }, []);

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
                <TouchableOpacity onPress={logoutFunc}>
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
          <TouchableOpacity onPress={goChangeMyInfo}>
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
          </TouchableOpacity>
          <Box
            mt="22"
            bgColor={"#f6f6f6"}
            w={"100%"}
            px={4}
            borderRadius={"20"}
          >
            <HStack
              borderBottomColor={"#656565"}
              borderBottomWidth={0.3}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text>알림받기</Text>
              <Switch defaultIsChecked onTrackColor="#FED2CF" size={"sm"} />
            </HStack>
            <HStack justifyContent="space-between" alignItems="center">
              <Text>다크모드</Text>
              <Switch onTrackColor="#FED2CF" size={"sm"} />
            </HStack>
          </Box>
          <Box mt="22">
            <TouchableOpacity
              style={{
                backgroundColor: "#FF6A6A",
                paddingVertical: 10,
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setShowModal(true)}
            >
              <Text fontFamily={"SUITEBold"} fontSize={14} color={"#fafafa"}>
                계정삭제
              </Text>
            </TouchableOpacity>
          </Box>
          {/* modal */}
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="350" maxH="212">
              <Modal.Header>
                <Text
                  fontFamily={"SUITEBold"}
                  fontSize={16}
                  textAlign={"center"}
                >
                  계정 삭제
                </Text>
              </Modal.Header>
              <Modal.Body>
                <Text
                  fontFamily={"SUITERegular"}
                  fontSize={16}
                  textAlign={"center"}
                >
                  삭제한 계정은 복구할 수 없습니다.
                </Text>
                <Text
                  fontFamily={"SUITERegular"}
                  fontSize={16}
                  textAlign={"center"}
                >
                  정말 삭제하시겠습니까?
                </Text>
              </Modal.Body>
              <Modal.Footer>
                <Button.Group space={2}>
                  <Button
                    variant="ghost"
                    colorScheme="blueGray"
                    onPress={() => {
                      setShowModal(false);
                    }}
                  >
                    취소
                  </Button>
                  <TouchableOpacity
                    onPress={() => {
                      setShowModal(false);
                      setTimeout(() => {
                        deleteUserInfo();
                      }, 500);
                    }}
                    style={{
                      backgroundColor: "#FF6A6A",
                      justifyContent: "center",
                      paddingHorizontal: 24,
                      borderRadius: 8,
                    }}
                  >
                    <Text color={"#fafafa"}>삭제</Text>
                  </TouchableOpacity>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
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
