import { Box } from "native-base";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import SwipeCardComponent from "../components/SwipeCardComponent";
import datas from "../data.json";

export default function LikeSentencePage({ navigation, route }) {
  const data = datas.datas;
  const [allData, setAllData] = useState([]);
  const accoData = data.filter((item) => item.category === "숙박");
  const foodData = data.filter((item) => item.category === "음식");
  const trafficData = data.filter((item) => item.category === "교통");
  const shoppingData = data.filter((item) => item.category === "쇼핑");
  useEffect(() => {
    navigation.setOptions({
      title: "담은 문장",
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
    const tempData = [];
    for (let i = 0; i < 3; i++) {
      tempData.push(accoData[i]);
      tempData.push(foodData[i]);
      tempData.push(trafficData[i]);
      tempData.push(shoppingData[i]);
    }
    setAllData(tempData);
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Box mx={8} my={5}>
        {allData.map((item, i) => {
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
