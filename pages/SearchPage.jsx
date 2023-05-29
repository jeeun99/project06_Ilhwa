import {
  Box,
  Text,
  Image,
  HStack,
  VStack,
  IconButton,
  Flex,
  Input,
} from "native-base";
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import HeaderComponent from "../components/HeaderComponent";

const pagelogo = require("../assets/img/pagelogo.png");

export default function SearchPage({ navigation }) {
  const [input, setInput] = useState("");
  const goSDetail = () => {
    navigation.navigate("SearchDetailPage", { input: input });
  };
  return (
    <Box style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <HStack
        alignItems={"center"}
        justifyContent="space-between"
        mt={8}
        px={8}
      >
        <Input
          width={"80%"}
          borderWidth={1}
          borderStyle="dashed"
          borderColor={"#000"}
          borderRadius={10}
          bgColor="#F6F6F6"
          value={input}
          fontFamily={"KCCChassam"}
          placeholderTextColor={"#656565"}
          placeholder="검색어를 입력하세요"
          // variant={"filled"}
        />
        <LinearGradient
          style={styles.search}
          colors={["#FED2CF", "#CDDBF5"]}
          start={{ x: 0.1, y: 1 }}
          end={{ x: 1, y: 0 }}
        >
          <TouchableOpacity onPress={goSDetail}>
            <Entypo name="magnifying-glass" size={24} color="white" />
          </TouchableOpacity>
        </LinearGradient>
      </HStack>
      <Box my={8} px={8}>
        <Text mb={4} fontFamily="SUITERegular" fontSize="16" color={"#656565"}>
          최근 검색
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.searchbtn}
            onPress={() => setInput("메뉴판")}
          >
            <Text fontFamily={"KCCChassam"} fontSize={12}>
              메뉴판
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.searchbtn}
            onPress={() => setInput("숙소")}
          >
            <Text fontFamily={"KCCChassam"} fontSize={12}>
              숙소
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.searchbtn}
            onPress={() => setInput("가격")}
          >
            <Text fontFamily={"KCCChassam"} fontSize={12}>
              가격
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.searchbtn}
            onPress={() => setInput("시간")}
          >
            <Text fontFamily={"KCCChassam"} fontSize={12}>
              시간
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.searchbtn}
            onPress={() => setInput("지하철")}
          >
            <Text fontFamily={"KCCChassam"} fontSize={12}>
              지하철
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.searchbtn}
            onPress={() => setInput("결제")}
          >
            <Text fontFamily={"KCCChassam"} fontSize={12}>
              결제
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </Box>
      <Box my={4} px={8}>
        <Text mb={4} fontFamily="SUITERegular" fontSize="16" color={"#656565"}>
          인기 검색어
        </Text>
        <Box>
          <HStack>
            <TouchableOpacity
              style={[styles.searchbtn, { backgroundColor: "#FF6A6A" }]}
              onPress={() => setInput("메뉴판")}
            >
              <Text color={"#fff"} fontFamily={"KCCChassam"} fontSize={12}>
                메뉴판
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.searchbtn, { backgroundColor: "#FF8A8A" }]}
              onPress={() => setInput("음식주문")}
            >
              <Text color={"#fff"} fontFamily={"KCCChassam"} fontSize={12}>
                음식주문
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.searchbtn, { backgroundColor: "#FED2CF" }]}
              onPress={() => setInput("택시")}
            >
              <Text color={"#fff"} fontFamily={"KCCChassam"} fontSize={12}>
                택시
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.searchbtn}
              onPress={() => setInput("구매")}
            >
              <Text fontFamily={"KCCChassam"} fontSize={12}>
                구매
              </Text>
            </TouchableOpacity>
          </HStack>
          <HStack my={4}>
            <TouchableOpacity
              style={styles.searchbtn}
              onPress={() => setInput("세금")}
            >
              <Text fontFamily={"KCCChassam"} fontSize={12}>
                세금
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.searchbtn}
              onPress={() => setInput("영수증")}
            >
              <Text fontFamily={"KCCChassam"} fontSize={12}>
                영수증
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.searchbtn}
              onPress={() => setInput("지하철")}
            >
              <Text fontFamily={"KCCChassam"} fontSize={12}>
                지하철
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.searchbtn}
              onPress={() => setInput("옷")}
            >
              <Text fontFamily={"KCCChassam"} fontSize={12}>
                옷
              </Text>
            </TouchableOpacity>
          </HStack>
          <HStack>
            <TouchableOpacity
              style={styles.searchbtn}
              onPress={() => setInput("매표소")}
            >
              <Text fontFamily={"KCCChassam"} fontSize={12}>
                매표소
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.searchbtn}
              onPress={() => setInput("음식")}
            >
              <Text fontFamily={"KCCChassam"} fontSize={12}>
                음식
              </Text>
            </TouchableOpacity>
          </HStack>
        </Box>
        {/* <Box borderRadius={20} overflow="hidden">
          <LinearGradient
            style={styles.btnLogIn}
            colors={["#FED2CF", "#FEECD2"]}
            start={{ x: 0.3, y: 0.3 }}
            end={{ x: 1, y: 1 }}
          >
            <Box px={4} py={8}>
              <Text pb={4} fontFamily="KCCChassam" fontSize={12}>
                1. 메뉴판 달라고 할 때
              </Text>
              <Text pb={4} fontFamily="KCCChassam" fontSize={12}>
                2. 버스탈 때
              </Text>
              <Text pb={4} fontFamily="KCCChassam" fontSize={12}>
                3. 영업시간이 몇시까지인지 물어볼 때
              </Text>
              <Text pb={4} fontFamily="KCCChassam" fontSize={12}>
                4. 카드 결제
              </Text>
              <Text fontFamily="KCCChassam" fontSize={12}>
                5. 예약할 때
              </Text>
            </Box>
          </LinearGradient>
        </Box> */}
      </Box>
    </Box>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
  },
  searchbtn: {
    backgroundColor: "#F6F6F6",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 16,
    borderRadius: 16,
  },
  search: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
