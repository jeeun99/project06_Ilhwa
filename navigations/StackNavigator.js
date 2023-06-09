import React from "react";
//설치한 스택 네비게이션 라이브러리를 가져옵니다
import { createStackNavigator } from "@react-navigation/stack";
//페이지로 만든 컴포넌트들을 불러옵니다
import TabNavigator from "./TabNavigator";

import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

import SearchDetailPage from "../pages/SearchDetailPage";

import AccommodationPage from "../pages/AccommodationPage";
import FoodPage from "../pages/FoodPage";
import ShoppingPage from "../pages/ShoppingPage";
import TrafficPage from "../pages/TrafficPage";

import ChangeMyInfo from "../pages/ChangeMyInfo";

import Question01 from "../pages/Question01";
import Question02 from "../pages/Question02";
import Question03 from "../pages/Question03";
import LikeSentencePage from "../pages/LikeSentencePage";
import WrongQPage from "../pages/WrongQPage";
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
      <Stack.Screen name="FoodPage" component={FoodPage} />
      <Stack.Screen name="ShoppingPage" component={ShoppingPage} />
      <Stack.Screen name="TrafficPage" component={TrafficPage} />
      <Stack.Screen name="ChangeMyInfo" component={ChangeMyInfo} />
      <Stack.Screen name="Question01" component={Question01} />
      <Stack.Screen name="Question02" component={Question02} />
      <Stack.Screen name="Question03" component={Question03} />
      <Stack.Screen name="LikeSentencePage" component={LikeSentencePage} />
      <Stack.Screen name="WrongQPage" component={WrongQPage} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
