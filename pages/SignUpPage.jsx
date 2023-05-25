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
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import SignUpInput from "../components/SignUpInput";

const bgImg = require("../assets/img/signupbg.png");

export default function SignUpPage({ navigation }) {
  const [service, setService] = useState("");
  const goSignIn = () => {
    navigation.navigate("SignInPage");
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
              <SignUpInput w={"68%"} title={"닉네임"} />
              <TouchableOpacity style={styles.btnj}>
                <Text color={"black"} fontFamily={"SUITERegular"} fontSize={12}>
                  중복확인
                </Text>
              </TouchableOpacity>
            </HStack>
          </Box>
          <Box mt={8}>
            <Text style={styles.titleText}>이메일</Text>
            <HStack justifyContent="space-between" alignItems="center">
              <SignUpInput w={"47%"} title={"이메일"} />
              <Text>@</Text>
              <Box w={"47%"}>
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
          </Box>
          <Box mt={8}>
            <Text style={styles.titleText}>비밀번호</Text>
            <VStack justifyContent="space-between" alignItems="center">
              <SignUpInput w={"100%"} title={"비밀번호"} />
              <SignUpInput w={"100%"} title={"비밀번호 확인"} />
            </VStack>
          </Box>
          <TouchableOpacity onPress={goSignIn}>
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
    marginTop: 32,
    paddingVertical: 12,
    borderRadius: 50,
  },
});
