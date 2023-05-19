import react from "react";
import { Platform, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MyPage from "../pages/MyPage";
import MainPage from "../pages/MainPage";
import SearchPage from "../pages/SearchPage";
import StudyPage from "../pages/StudyPage";

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      // route에서 screen name을 가져와 해당하는 아이콘을 띄워줌
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused }) => {
            // console.log(route.name);
            //현재 이 앱을 구동하고 있는 디바이스가 뭔지 Platform.OS 을 통해 확인 할 수 있음
            let iconName = Platform.OS === "ios" ? "ios-" : "md-";
            if (route.name === "MainPage") {
              iconName += "home-outline";
            } else if (route.name === "StudyPage") {
              iconName += "book-outline";
            } else if (route.name === "MyPage") {
              iconName += "person-outline";
            } else if (route.name === "SearchPage") {
              iconName += "search";
            }
            return (
              <Ionicons
                name={iconName}
                color={focused ? "tomato" : "#2C2C2C"}
                // style={focused ? styles.focus : null}
                size={27}
              />
            );
          },
          tabBarLabel: ({ focused }) => {
            let labelName = "";
            if (route.name === "MainPage") {
              labelName += "홈";
            } else if (route.name === "StudyPage") {
              labelName += "학습";
            } else if (route.name === "MyPage") {
              labelName += "마이페이지";
            } else if (route.name === "SearchPage") {
              labelName += "검색";
            }
            return (
              <Text
                style={{
                  color: focused ? "tomato" : "#2C2C2C",
                  fontFamily: "SUITERegular",
                  fontSize: 12,
                  paddingBottom: 8,
                }}
              >
                {labelName}
              </Text>
            );
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          // Screen name 텍스트 안보이게 하기
          // tabBarShowLabel: false,
          tabBarStyle: [
            {
              height: 70,
              display: "flex",
            },
          ],

          headerShown: false,
        })
        // tabnavigator에서 제공하는 tabBarIcon기능
        // 모든 페이지에 동시 적용되는 기능
      }
    >
      <Tabs.Screen name="MainPage" component={MainPage} />
      <Tabs.Screen name="StudyPage" component={StudyPage} />
      <Tabs.Screen name="MyPage" component={MyPage} />
      <Tabs.Screen name="SearchPage" component={SearchPage} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
