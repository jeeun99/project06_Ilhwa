import {
  Box,
  Text,
  HStack,
  Input,
  Flex,
  IconButton,
  Center,
} from "native-base";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import CardComponent from "../components/CardComponent";

export default function SearchDetailPage({ route, navigation }) {
  //   console.log(route);
  const input = route.params.input;

  return (
    <Box style={styles.container}>
      {/* <Box safeAreaTop /> */}
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
          // variant={"filled"}
        />
        <TouchableOpacity style={styles.search}>
          <Entypo name="magnifying-glass" size={24} color="black" />
        </TouchableOpacity>
      </HStack>
      <Flex px={8} py={4} flexDirection={"row"}>
        <CardComponent />
      </Flex>
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
