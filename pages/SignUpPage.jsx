import { useEffect, useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  Box,
  Text,
  FormControl,
  HStack,
  VStack,
  Select,
  CheckIcon,
} from "native-base";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import SignUpInput from "../components/SignUpInput";
import AsyncStorage from "@react-native-async-storage/async-storage";

const bgImg = require("../assets/img/signupbg.png");

// 회원 인증을 통한 가입
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
// fireStore에 데이터 저장
import { db } from "../config/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

export default function SignUpPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [firstEmail, setFirstEmail] = useState("");
  const [firstEmailError, setFirstEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nickName, setnickName] = useState("");
  const [nickNameError, setNickNameError] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const [service, setService] = useState("");

  const setFirstEmailFunc = (itemInputEmail) => {
    // 이메일 상태값 관리 함수
    setFirstEmail(itemInputEmail);
  };
  const setPasswordFunc = (itemInputPassword) => {
    // 패스워드 상태값 관리 함수
    setPassword(itemInputPassword);
  };
  const setNickNameFunc = (itemInputNickName) => {
    // 닉네임 상태값 관리 함수
    setnickName(itemInputNickName);
  };
  const setPasswordConfirmFunc = (itemInputPasswordConfirm) => {
    // 비밀번호 확인 상태값 관리 함수
    setPasswordConfirm(itemInputPasswordConfirm);
  };

  // useEffect(() => {
  //   console.log("service", service);
  //   setEmail(firstEmail + "@" + service);
  // }, [firstEmail, service]);

  console.log("email---", email);
  const goSignIn = () => {
    navigation.navigate("SignInPage");
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

  const doSignUp = () => {
    if (nickName === "") {
      setNickNameError("닉네임을 입력해주세요.");
      return false;
    } else {
      setNickNameError("");
    }
    if (firstEmail === "") {
      setFirstEmailError("이메일을 입력해주세요.");
      return false;
    } else {
      setEmail(firstEmail + "@" + service);
      setFirstEmailError("");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
      return false;
    } else {
      setPasswordError("");
    }
    if (passwordConfirm === "") {
      setPasswordConfirmError("비밀번호 확인을 입력해주세요.");
      return false;
    } else {
      setPasswordConfirmError("");
    }
    if (password !== passwordConfirm) {
      setPasswordConfirmError("비밀번호가 일치하지 않습니다.");
      return false;
    } else {
      setPasswordConfirmError("");
    }

    // 회원가입 처리
    createUserWithEmailAndPassword(auth, email, password, nickName)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("가입성공", user);

        // AsyncStorage에 사용자 정보 저장
        AsyncStorage.setItem("session", email);

        // 사용자 정보 firestore에 저장
        const userRef = doc(db, "users", user.uid);
        setDoc(userRef, {
          uid: user.uid, // Authentication - uid
          email: user.email, // Authentication - email
          nickName: nickName, // NickName
        });

        // goSignin();
        // navigation.navigate("SignInPage");
        // 뒤로가기 막기
        navigation.push("SignInPage");
        // navigation.push("TabNavigator");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("가입실패", errorCode, errorMessage);
      });
  };

  useEffect(() => {
    navigation.setOptions({
      title: "회원가입",
      headerShown: true,
      headerStyle: {
        backgroundColor: "#fff",
        height: 85,
        shadowColor: "transparent",
        borderBottomWidth: 0.3,
        borderBottomColor: "#656565",
      },
      headerTitleStyle: {
        fontSize: 16,
        fontFamily: "SUITEBold",
        justifyContent: "center",
      },
      headerTintColor: "#2C2C2C",
      headerTitleAlign: "center",
      headerBackImage: () => (
        <Entypo name="chevron-left" size={24} color="#2C2C2C" />
      ),
    });
  }, []);

  return (
    <ImageBackground source={bgImg} style={styles.bgImage}>
      <Box mt={8} px={8} style={styles.container}>
        <FormControl w={"100%"}>
          <Box>
            <Text style={styles.titleText}>닉네임</Text>
            <HStack justifyContent="space-between" alignItems="center">
              <SignUpInput
                w={"68%"}
                title={"닉네임"}
                type={"test"}
                setFunc={setNickNameFunc}
                error={nickNameError}
              />
              <TouchableOpacity style={styles.btnj} onPress={duplicateCheck}>
                <Text color={"black"} fontFamily={"SUITERegular"} fontSize={12}>
                  중복확인
                </Text>
              </TouchableOpacity>
            </HStack>
          </Box>
          <Box mt={2}>
            <Text style={styles.titleText}>이메일</Text>
            <HStack justifyContent="space-between" alignItems="center">
              <SignUpInput
                w={"47%"}
                title={"이메일"}
                type={"text"}
                setFunc={setFirstEmailFunc}
                error={firstEmailError}
              />
              <Text fontSize={"14"} pb={4}>
                @
              </Text>
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
                  <Select.Item label="naver.com" value="naver.com" />
                  <Select.Item label="gmail.com" value="gmail.com" />
                  <Select.Item label="nate.com" value="nate.com" />
                  <Select.Item label="hanmail.net" value="hanmail.net" />
                  <Select.Item label="daum.net" value="daum.net" />
                </Select>
              </Box>
            </HStack>
          </Box>
          <Box mt={2}>
            <Text style={styles.titleText}>비밀번호</Text>
            <VStack justifyContent="space-between" alignItems="center">
              <SignUpInput
                w={"100%"}
                title={"비밀번호"}
                type={"password"}
                setFunc={setPasswordFunc}
                error={passwordError}
              />
              <SignUpInput
                w={"100%"}
                title={"비밀번호 확인"}
                type={"password"}
                setFunc={setPasswordConfirmFunc}
                error={passwordConfirmError}
              />
            </VStack>
          </Box>
          <TouchableOpacity onPress={doSignUp}>
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
                회원가입
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
