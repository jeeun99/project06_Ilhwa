import {
  Box,
  Text,
  HStack,
  Input,
  Flex,
  IconButton,
  Center,
} from "native-base";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import HeaderComponent from "../components/HeaderComponent";
import SwipeCardComponent from "../components/SwipeCardComponent";
import data from "../data.json";

export default function SearchDetailPage({ route, navigation }) {
  const sentence = data.datas;
  const [item, setItem] = useState([]);
  //   console.log(route);
  const input = route.params.input;
  useEffect(() => {
    setItem(sentence.filter((item) => item.title.includes(input)));
  }, [input]);
  // console.log(item);
  const goSDetail = () => {
    navigation.navigate("SearchDetailPage", { input: input });
  };

  return (
    <ScrollView style={styles.container}>
      {/* <Box safeAreaTop /> */}
      <HeaderComponent pgName={"검색"} navigation={navigation} />
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
          placeholder={input}
          placeholderTextColor="#2c2c2c"
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
      <Box px={8} py={4}>
        <Text
          pb={"10px"}
          fontFamily="SUITERegular"
          fontSize="16"
          color={"#2c2c2c"}
        >
          검색결과
        </Text>
        {item.map((item, i) => {
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
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
  },
  searchbtn: {
    backgroundColor: "#FED2CF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 16,
    borderRadius: 16,
  },
  search: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#fed2cf",
    alignItems: "center",
    justifyContent: "center",
  },
});
