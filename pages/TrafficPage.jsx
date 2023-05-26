import { Box, Center, Text } from "native-base";
import { useEffect, useState } from "react";
import SwipeCardComponent from "../components/SwipeCardComponent";
import { Entypo } from "@expo/vector-icons";
import datas from "../data.json";
import { ScrollView } from "react-native";

export default function TrafficPage({ navigation }) {
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

  const traffic = data.filter((item) => item.category === "교통");
  //   console.log(accommodation);
  return (
    <ScrollView>
      <Box px={8} flex={1} bgColor="#fff">
        <Text>필수 어휘</Text>
        {traffic.map((item, i) => {
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
