import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigations/StackNavigator";
// expo-font 라이브러리를 사용하여 폰트를 로드합니다.
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import { NativeBaseProvider, extendTheme } from "native-base";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const loadFont = () => {
    setTimeout(async () => {
      await Font.loadAsync({
        // 디바이스 기종별, OS 별로 해당 폰트가 지원되지 않을 수도 있습니다.
        SUITEExtraBold: require("native-base/Fonts/SUITEExtraBold.ttf"),
        SUITEHeavy: require("native-base/Fonts/SUITEHeavy.ttf"),
        SUITELight: require("native-base/Fonts/SUITELight.ttf"),
        SUITESemiBold: require("native-base/Fonts/SUITESemiBold.ttf"),
        //
        SUITEMedium: require("native-base/Fonts/SUITEMedium.ttf"),
        SUITERegular: require("native-base/Fonts/SUITERegular.ttf"),
        SUITEBold: require("native-base/Fonts/SUITEBold.ttf"),
        KCCChassam: require("native-base/Fonts/KCCChassam.ttf"),
        ...Ionicons.font,
      });
    }, 1000);
  };
  useEffect(() => {
    loadFont();
  }, []);
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
