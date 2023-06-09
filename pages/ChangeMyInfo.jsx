import { useEffect, useState } from "react";
import { StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import {
  Box,
  Text,
  FormControl,
  HStack,
  VStack,
  Select,
  CheckIcon,
} from "native-base";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import SignUpInput from "../components/SignUpInput";

const bgImg = require("../assets/img/signupbg.png");

import { auth, db } from "../config/firebase";
import { where, getDocs, collection, query } from "firebase/firestore";

export default function ChangeMyInfo({ navigation }) {
  const [service, setService] = useState("");
  const goMyPage = () => {
    navigation.navigate("TabNavigator");
  };
  const duplicateCheck = async () => {
    const q = query(collection(db, "users"), where("nickName", "==", nickName));
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      Alert.alert("중복확인", "사용가능한 이름입니다.");
    } else {
      setNickNameError("이미 존재하는 닉네임입니다.");
      return false;
    }
  };

  // const uid = auth.currentUser.uid;
  // const changeInfo = async () => {
  //   console.log(uid);
  //   const docSnap = await getDoc(doc(db, "users", uid));
  //   const userData = docSnap.data();
  // };
  return (
    <ImageBackground source={bgImg} style={styles.bgImage}>
      <Box mt={8} px={8} style={styles.container}>
        <Box my={8}>
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
              <TouchableOpacity>
                <HStack alignItems="center" justifyContent="center">
                  <Text
                    fontSize={14}
                    color="#2c2c2c"
                    fontFamily={"SUITERegular"}
                    pr={1}
                  >
                    프로필 사진 수정
                  </Text>
                  <Entypo name="chevron-right" size={16} color="#2c2c2c" />
                </HStack>
              </TouchableOpacity>
            </VStack>
          </HStack>
        </Box>
        <FormControl w={"100%"}>
          <Box>
            <Text style={styles.titleText}>닉네임</Text>
            <HStack justifyContent="space-between" alignItems="center">
              <SignUpInput w={"68%"} title={"닉네임"} />
              <TouchableOpacity style={styles.btnj} onPress={duplicateCheck}>
                <Text color={"black"} fontFamily={"SUITERegular"} fontSize={12}>
                  중복확인
                </Text>
              </TouchableOpacity>
            </HStack>
          </Box>
          {/* <Box mt={2}>
            <Text style={styles.titleText}>이메일</Text>
            <HStack justifyContent="space-between" alignItems="center">
              <SignUpInput w={"47%"} title={"이메일"} />
              <Text mt={-4}>@</Text>
              <Box mt={-4} w={"47%"}>
                <Select
                  selectedValue={service}
                  accessibilityLabel="Choose"
                  placeholder="선택"
                  placeholderTextColor="#656565"
                  fontFamily={"KCCChassam"}
                  backgroundColor={"#F6F6F6"}
                  borderWidth={0}
                  borderRadius={10}
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="1" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setService(itemValue)}
                >
                  <Select.Item label="naver.com" value="naver" />
                  <Select.Item label="gmail.com" value="gmail" />
                  <Select.Item label="nate.com" value="nate" />
                  <Select.Item label="hanmail.net" value="hanmail" />
                  <Select.Item label="daum.net" value="daum" />
                </Select>
              </Box>
            </HStack>
          </Box> */}
          <Box mt={2}>
            <Text style={styles.titleText}>비밀번호</Text>
            <VStack justifyContent="space-between" alignItems="center">
              <SignUpInput w={"100%"} title={"비밀번호"} />
              <SignUpInput w={"100%"} title={"비밀번호 확인"} />
            </VStack>
          </Box>
          <TouchableOpacity onPress={goMyPage}>
            <LinearGradient
              style={styles.btnSignUp}
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
                수정하기
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </FormControl>
      </Box>
    </ImageBackground>
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
    objectFit: "contain",
    alignItems: "center",
    backgroundColor: "white",
  },
  titleText: {
    fontFamily: "SUITERegular",
    fontSize: 14,
    color: "black",
  },
  btnj: {
    backgroundColor: "#D3D3D3",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 50,
  },
  btnSignUp: {
    marginTop: 16,
    paddingVertical: 12,
    borderRadius: 50,
  },
});
