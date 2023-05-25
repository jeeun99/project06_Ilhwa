import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigations/StackNavigator";
// expo-font 라이브러리를 사용하여 폰트를 로드합니다.
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import { NativeBaseProvider, extendTheme } from "native-base";
import Intro from "./pages/Intro";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const [ready, setReady] = useState(false);
  const loadFont = () => {
    setTimeout(async () => {
      await Font.loadAsync({
        // 디바이스 기종별, OS 별로 해당 폰트가 지원되지 않을 수도 있습니다.
        SUITEExtraBold: require("./assets/Fonts/SUITEExtraBold.ttf"),
        SUITEHeavy: require("./assets/Fonts/SUITEHeavy.ttf"),
        SUITELight: require("./assets/Fonts/SUITELight.ttf"),
        SUITESemiBold: require("./assets/Fonts/SUITESemiBold.ttf"),
        //
        SUITEMedium: require("./assets/Fonts/SUITEMedium.ttf"),
        SUITERegular: require("./assets/Fonts/SUITERegular.ttf"),
        SUITEBold: require("./assets/Fonts/SUITEBold.ttf"),
        KCCChassam: require("./assets/Fonts/KCCChassam.ttf"),
        ...Ionicons.font,
      });
      setReady(true);
    }, 1000);
  };
  useEffect(() => {
    loadFont();
  }, []);
  return ready ? (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <StackNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  ) : (
    <NativeBaseProvider>
      <NavigationContainer>
        <Intro />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
