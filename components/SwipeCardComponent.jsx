import React, { useRef, useState } from "react";
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { HStack, VStack, Image, Text, IconButton, Box } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { useEffect } from "react";

function SwipeCardComponent({ item }) {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     setData(item);
  //   }, []);
  //   console.log(data);
  console.log("날라가냐", item);
  const swipeAnimation = useRef(new Animated.Value(0)).current;
  const [like, setLike] = useState(false);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      //   onPanResponderMove: (event, gestureState) => {
      //     if (gestureState.dx < -50) {
      //       swipeAnimation.setValue(gestureState.dx);
      //       setShowHeart(true);
      //     } else if (gestureState.dx < 0) {
      //       swipeAnimation.setValue(gestureState.dx);
      //       setShowHeart(false);
      //     }
      //   },
      onPanResponderRelease: (event, gestureState) => {
        // if (gestureState.dx > 50) {
        //   // 오른쪽으로 스와이프했을 때의 동작
        //   Animated.timing(swipeAnimation, {
        //     toValue: 50,
        //     duration: 300,
        //     useNativeDriver: true,
        //   }).start();
        // } else
        if (gestureState.dx < -70) {
          // 왼쪽으로 스와이프했을 때의 동작
          Animated.timing(swipeAnimation, {
            toValue: -70,
            duration: 300,
            useNativeDriver: true,
          }).start();
        } else {
          // 원래 위치로 돌아가는 동작
          Animated.spring(swipeAnimation, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.card,
          {
            transform: [{ translateX: swipeAnimation }],
          },
        ]}
        {...panResponder.panHandlers}
      >
        <HStack w={"100%"}>
          <HStack w={"60%"} pl={3} alignItems={"center"} bgColor="#FFF0EF">
            <TouchableOpacity style={{ height: 32, width: 32 }}>
              <LinearGradient
                colors={["#FED2CF", "#CDDBF5"]}
                start={{ x: 0.1, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 32,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo name="controller-play" size={24} color="white" />
              </LinearGradient>
            </TouchableOpacity>
            <VStack pl={4}>
              <Text fontFamily="SUITERegular" fontSize="9" color={"#656565"}>
                {/* {item.descjp} */}
              </Text>
              <Text fontFamily="SUITERegular" fontSize="12" color={"#2c2c2c"}>
                {/* {item.translation} */}
              </Text>
            </VStack>
          </HStack>
          <Box
            borderTopRightRadius={10}
            borderBottomRightRadius={10}
            w={"40%"}
            bgColor="#FED2CF"
            justifyContent={"center"}
            alignItems="center"
          >
            <Text fontFamily="KCCChassam" fontSize="12" color={"#2c2c2c"}>
              {/* {item.descko} */}
            </Text>
          </Box>
        </HStack>
      </Animated.View>
      <IconButton
        position="absolute"
        right={2}
        top={1}
        onPress={() => setLike(!like)}
        icon={
          like ? (
            <Entypo name="heart" size={30} color="red" />
          ) : (
            <Entypo name="heart-outlined" size={30} color="red" />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  card: {
    flex: 1,
    flexDirection: "row",
    height: 60,
    zIndex: 10,
  },
  heartContainer: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  heart: {
    fontSize: 32,
    position: "absolute",
    right: 0,
  },
});

export default SwipeCardComponent;
