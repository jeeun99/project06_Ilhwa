import { Box, Center, Text, HStack } from "native-base";
import { useEffect, useState } from "react";
import SwipeCardComponent from "../components/SwipeCardComponent";
import { Entypo } from "@expo/vector-icons";
import datas from "../data.json";
import { ScrollView, View } from "react-native";
import ImageBlurLoading from "react-native-image-blur-loading";
import SlideComponent from "../components/SlideComponent";

export default function AccommodationPage({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: "홈",
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
      headerBackImage: () => (
        <Entypo name="chevron-left" size={24} color="#2C2C2C" />
      ),
    });
    setData(datas.datas);
  }, []);

  if (data.length === 0) {
    return null;
  }

  const accommodation = data.filter((item) => item.category === "숙박");
  //   console.log(accommodation);

  return (
    <ScrollView>
      <Box px={8} flex={1} bgColor="#fff">
        <Box mt={8} height={"150px"}>
          <HStack>
            <Text>대표 어휘</Text>
          </HStack>
          {/* <SlideComponent slideData={accommodation} /> */}
        </Box>
        <Text>필수 어휘</Text>
        {accommodation.map((item, i) => {
          return (
            <Box
              key={i}
              backgroundColor={"#F6F6F6"}
              w={"100%"}
              h="60px"
              overflow={"hidden"}
              borderRadius="10"
              style={{
                marginTop: 12,
              }}
            >
              <SwipeCardComponent item={item} />
            </Box>
          );
        })}
      </Box>
    </ScrollView>
  );
}
