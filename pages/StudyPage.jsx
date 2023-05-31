import { Box, HStack, Image, Text } from "native-base";
import { useEffect } from "react";
import { TouchableOpacity, ScrollView } from "react-native";

export default function StudyPage({ navigation }) {
  const goQuestion1 = () => {
    navigation.navigate("Question01");
  };
  const goQuestion2 = () => {
    navigation.navigate("Question02");
  };
  const goQuestion3 = () => {
    navigation.navigate("Question03");
  };

  useEffect(() => {
    navigation.setOptions({
      title: "학습",
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
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <Box p={8}>
        <HStack mb={"22px"} justifyContent={"space-between"}>
          <TouchableOpacity onPress={goQuestion1}>
            <Box
              w={"150px"}
              pt={"22px"}
              pb={"18px"}
              px="18px"
              bgColor={"#D7F5DC"}
              borderRadius={"10px"}
            >
              <Image
                source={require("../assets/img/correct.png")}
                alt="correct"
                w={"32px"}
                h={"32px"}
                mb={1.5}
              />
              <Text color={"#71BD7E"} fontFamily={"SUITERegular"} fontSize="12">
                Level 1
              </Text>
              <Text color={"#477B50"} fontFamily={"SUITEBold"} fontSize="16">
                참 잘했어요
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
        </HStack>
        <HStack mb={"22px"} justifyContent={"space-between"}>
          <TouchableOpacity onPress={goQuestion3}>
            <Box
              w={"150px"}
              pt={"22px"}
              pb={"18px"}
              px="18px"
              bgColor={"#D7F5DC"}
              borderRadius={"10px"}
            >
              <Image
                source={require("../assets/img/correct.png")}
                alt="correct"
                w={"32px"}
                h={"32px"}
                mb={1.5}
              />
              <Text color={"#71BD7E"} fontFamily={"SUITERegular"} fontSize="12">
                Level 3
              </Text>
              <Text color={"#477B50"} fontFamily={"SUITEBold"} fontSize="16">
                참 잘했어요
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
          <Box
            w={"150px"}
            pt={"22px"}
            pb={"18px"}
            px="18px"
            bgColor={"#F6F6F6"}
            borderRadius={"10px"}
          >
            <Image
              source={require("../assets/img/unsolve.png")}
              alt="correct"
              w={"32px"}
              h={"32px"}
              mb={1.5}
            />
            <Text color={"#B6B6B6"} fontFamily={"SUITERegular"} fontSize="12">
              Level 4
            </Text>
            <Text color={"#898989"} fontFamily={"SUITEBold"} fontSize="16">
              학습 전이에요
            </Text>
            <Text
              textAlign={"right"}
              color={"#656565"}
              fontFamily={"SUITERegular"}
              fontSize="12"
            ></Text>
          </Box>
        </HStack>
        <HStack mb={"22px"} justifyContent={"space-between"}>
          <Box
            w={"150px"}
            pt={"22px"}
            pb={"18px"}
            px="18px"
            bgColor={"#F6F6F6"}
            borderRadius={"10px"}
          >
            <Image
              source={require("../assets/img/unsolve.png")}
              alt="correct"
              w={"32px"}
              h={"32px"}
              mb={1.5}
            />
            <Text color={"#B6B6B6"} fontFamily={"SUITERegular"} fontSize="12">
              Level 5
            </Text>
            <Text color={"#898989"} fontFamily={"SUITEBold"} fontSize="16">
              학습 전이에요
            </Text>
            <Text
              textAlign={"right"}
              color={"#656565"}
              fontFamily={"SUITERegular"}
              fontSize="12"
            ></Text>
          </Box>
          <Box
            w={"150px"}
            pt={"22px"}
            pb={"18px"}
            px="18px"
            bgColor={"#F6F6F6"}
            borderRadius={"10px"}
          >
            <Image
              source={require("../assets/img/unsolve.png")}
              alt="correct"
              w={"32px"}
              h={"32px"}
              mb={1.5}
            />
            <Text color={"#B6B6B6"} fontFamily={"SUITERegular"} fontSize="12">
              Level 6
            </Text>
            <Text color={"#898989"} fontFamily={"SUITEBold"} fontSize="16">
              학습 전이에요
            </Text>
            <Text
              textAlign={"right"}
              color={"#656565"}
              fontFamily={"SUITERegular"}
              fontSize="12"
            ></Text>
          </Box>
        </HStack>
        <HStack mb={"22px"} justifyContent={"space-between"}>
          <Box
            w={"150px"}
            pt={"22px"}
            pb={"18px"}
            px="18px"
            bgColor={"#F6F6F6"}
            borderRadius={"10px"}
          >
            <Image
              source={require("../assets/img/unsolve.png")}
              alt="correct"
              w={"32px"}
              h={"32px"}
              mb={1.5}
            />
            <Text color={"#B6B6B6"} fontFamily={"SUITERegular"} fontSize="12">
              Level 7
            </Text>
            <Text color={"#898989"} fontFamily={"SUITEBold"} fontSize="16">
              학습 전이에요
            </Text>
            <Text
              textAlign={"right"}
              color={"#656565"}
              fontFamily={"SUITERegular"}
              fontSize="12"
            ></Text>
          </Box>
          <Box
            w={"150px"}
            pt={"22px"}
            pb={"18px"}
            px="18px"
            bgColor={"#F6F6F6"}
            borderRadius={"10px"}
          >
            <Image
              source={require("../assets/img/unsolve.png")}
              alt="correct"
              w={"32px"}
              h={"32px"}
              mb={1.5}
            />
            <Text color={"#B6B6B6"} fontFamily={"SUITERegular"} fontSize="12">
              Level 8
            </Text>
            <Text color={"#898989"} fontFamily={"SUITEBold"} fontSize="16">
              학습 전이에요
            </Text>
            <Text
              textAlign={"right"}
              color={"#656565"}
              fontFamily={"SUITERegular"}
              fontSize="12"
            ></Text>
          </Box>
        </HStack>
        <HStack mb={"22px"} justifyContent={"space-between"}>
          <Box
            w={"150px"}
            pt={"22px"}
            pb={"18px"}
            px="18px"
            bgColor={"#F6F6F6"}
            borderRadius={"10px"}
          >
            <Image
              source={require("../assets/img/unsolve.png")}
              alt="correct"
              w={"32px"}
              h={"32px"}
              mb={1.5}
            />
            <Text color={"#B6B6B6"} fontFamily={"SUITERegular"} fontSize="12">
              Level 9
            </Text>
            <Text color={"#898989"} fontFamily={"SUITEBold"} fontSize="16">
              학습 전이에요
            </Text>
            <Text
              textAlign={"right"}
              color={"#656565"}
              fontFamily={"SUITERegular"}
              fontSize="12"
            ></Text>
          </Box>
          <Box
            w={"150px"}
            pt={"22px"}
            pb={"18px"}
            px="18px"
            bgColor={"#F6F6F6"}
            borderRadius={"10px"}
          >
            <Image
              source={require("../assets/img/unsolve.png")}
              alt="correct"
              w={"32px"}
              h={"32px"}
              mb={1.5}
            />
            <Text color={"#B6B6B6"} fontFamily={"SUITERegular"} fontSize="12">
              Level 10
            </Text>
            <Text color={"#898989"} fontFamily={"SUITEBold"} fontSize="16">
              학습 전이에요
            </Text>
            <Text
              textAlign={"right"}
              color={"#656565"}
              fontFamily={"SUITERegular"}
              fontSize="12"
            ></Text>
          </Box>
        </HStack>
      </Box>
    </ScrollView>
  );
}
