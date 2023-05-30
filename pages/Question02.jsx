import { Box, Flex, HStack, Input, Text } from "native-base";
import { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import HeaderComponent from "../components/HeaderComponent";
import CheckAnswerComponent from "../components/CheckAnswerComponent";

export default function Question02({ navigation }) {
  return (
    <Box flex={1}>
      <LinearGradient
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
        }}
        colors={["#FFF2F2", "rgba(194, 213, 250, 0.3)", "#FFF2F2"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <HeaderComponent pgName={""} navigation={navigation} />
        <Box mt={8} px={8}>
          <Flex alignItems="flex-end">
            <Box
              w="30px"
              h="30px"
              borderRadius={"30px"}
              backgroundColor="#D3D3D3"
              alignItems={"center"}
              justifyContent="center"
              mb={"22px"}
            >
              <Text color={"#2c2c2c"} fontFamily={"SUITERegular"} fontSize="14">
                ?
              </Text>
            </Box>
          </Flex>
          <Text mb={4} fontFamily={"SUITERegular"} fontSize="14">
            Q. 다음 문장의 일본어 발음으로 올바른 것을 고르세요.
          </Text>
          <Box
            bgColor={"#fafafa"}
            borderRadius="20px"
            w={"100%"}
            h={"120px"}
            justifyContent="center"
            alignItems="center"
          >
            <Text
              mb={1}
              fontFamily="SUITERegular"
              fontSize={"16px"}
              color="#2c2c2c"
            >
              이것은 얼마입니까?
            </Text>
            <Text fontFamily="SUITERegular" fontSize={"14px"} color="#656565">
              ( これはいくらですか ? )
            </Text>
          </Box>
          <Box mt={8}>
            <Input
              backgroundColor={"#CDDBF5"}
              py={2}
              variant="rounded"
              InputLeftElement={
                <Text px={2} pl={6} borderRightWidth={0.5}>
                  정답
                </Text>
              }
            />
          </Box>
          <HStack justifyContent={"space-between"} mt={8}>
            <TouchableOpacity style={[styles.btn, styles.hint]}>
              <Text fontFamily={"SUITERegular"} fontSize="16" color={"#fff"}>
                힌트보기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.send]}>
              <Text fontFamily={"SUITERegular"} fontSize="16" color={"#2c2c2c"}>
                제출하기
              </Text>
            </TouchableOpacity>
          </HStack>
        </Box>
      </LinearGradient>
    </Box>
  );
}
const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 48,
    borderRadius: 50,
  },
  hint: {
    backgroundColor: "#D3D3D3",
  },
  send: {
    backgroundColor: "#FED2CF",
  },
});
