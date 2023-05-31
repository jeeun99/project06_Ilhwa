import { Box, Text, HStack } from "native-base";
import { useEffect, useState } from "react";
import SwipeCardComponent from "../components/SwipeCardComponent";
import { Entypo } from "@expo/vector-icons";
import datas from "../data.json";
import { ScrollView } from "react-native";
import SlideComponent from "../components/SlideComponent";

export default function TrafficPage({ navigation, route }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: "교통",
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
        <Box mt={8}>
          <HStack>
            <Text mb={"10px"}>대표 어휘</Text>
          </HStack>
          <Box w={"100%"} h={120}>
            <SlideComponent data={traffic} bgname={"traffic"} />
          </Box>
        </Box>
        <Box my={4}>
          <Text>필수 어휘</Text>
          {traffic.map((item, i) => {
            if (i % 4 === 0) {
              return (
                <Box
                  key={i}
                  backgroundColor={"#F6F6F6"}
                  w={"100%"}
                  overflow={"hidden"}
                  borderRadius="10"
                  style={{
                    marginTop: 12,
                  }}
                >
                  <SwipeCardComponent
                    route={route}
                    navigation={navigation}
                    num={"0"}
                    item={item}
                  />
                </Box>
              );
            } else if (i % 4 === 1) {
              return (
                <Box
                  key={i}
                  backgroundColor={"#F6F6F6"}
                  w={"100%"}
                  overflow={"hidden"}
                  borderRadius="10"
                  style={{
                    marginTop: 12,
                  }}
                >
                  <SwipeCardComponent
                    route={route}
                    navigation={navigation}
                    num={"1"}
                    item={item}
                  />
                </Box>
              );
            } else if (i % 4 === 2) {
              return (
                <Box
                  key={i}
                  backgroundColor={"#F6F6F6"}
                  w={"100%"}
                  overflow={"hidden"}
                  borderRadius="10"
                  style={{
                    marginTop: 12,
                  }}
                >
                  <SwipeCardComponent
                    route={route}
                    navigation={navigation}
                    num={"2"}
                    item={item}
                  />
                </Box>
              );
            } else if (i % 4 === 3) {
              return (
                <Box
                  key={i}
                  backgroundColor={"#F6F6F6"}
                  w={"100%"}
                  overflow={"hidden"}
                  borderRadius="10"
                  style={{
                    marginTop: 12,
                  }}
                >
                  <SwipeCardComponent
                    route={route}
                    navigation={navigation}
                    num={"3"}
                    item={item}
                  />
                </Box>
              );
            }
          })}
        </Box>
      </Box>
    </ScrollView>
  );
}
