import { Box, Image, Text } from "native-base";
import { ScrollView, TouchableOpacity } from "react-native";
import { useEffect } from "react";

export default function WrongQPage({ navigation }) {
  const goQuestion2 = () => {
    navigation.navigate("Question02");
  };
  useEffect(() => {
    navigation.setOptions({
      title: "틀린 문제",
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
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Box mx={8} my={5}>
        <TouchableOpacity onPress={goQuestion2}>
          <Box
            w={"150px"}
            pt={"22px"}
            pb={"18px"}
            px="18px"
            bgColor={"#FFF0EF"}
            borderRadius={"10px"}
          >
            <Image
              source={require("../assets/img/wrong.png")}
              alt="correct"
              w={"32px"}
              h={"32px"}
              mb={1.5}
            />
            <Text color={"#FF9898"} fontFamily={"SUITERegular"} fontSize="12">
              Level 2
            </Text>
            <Text color={"#FF6A6A"} fontFamily={"SUITEBold"} fontSize="16">
              다시 풀어보세요!
            </Text>
            <Text
              textAlign={"right"}
              color={"#656565"}
              fontFamily={"SUITERegular"}
              fontSize="12"
            >
              2023 / 05 / 31
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </ScrollView>
  );
}
