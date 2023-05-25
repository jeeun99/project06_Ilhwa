import React from "react";
//설치한 스택 네비게이션 라이브러리를 가져옵니다
import { createStackNavigator } from "@react-navigation/stack";
//페이지로 만든 컴포넌트들을 불러옵니다
import Intro from "../pages/Intro";
import TabNavigator from "./TabNavigator";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import SearchDetailPage from "../pages/SearchDetailPage";
import AccommodationPage from "../pages/AccommodationPage";
//스택 네비게이션 라이브러리가 제공해주는 여러 기능이 담겨있는 객체를 사용합니다
//항상 상단에 선언하고 시작하는게 규칙
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    // 페이지 기능이 들어갈 곳
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // headerShown: false,
      }}
    >
      <Stack.Screen name="SignInPage" component={SignInPage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="SearchDetailPage" component={SearchDetailPage} />
      <Stack.Screen name="AccommodationPage" component={AccommodationPage} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
