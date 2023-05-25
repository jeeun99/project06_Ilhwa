import { LinearGradient } from "expo-linear-gradient";
import { Text, HStack, IconButton } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
export default function CardComponent() {
  const [like, setLike] = useState(false);
  return (
    <LinearGradient
      style={{
        padding: 16,
        alignItems: "center",
        borderRadius: 16,
        justifyContent: "center",
        position: "relative",
      }}
      colors={["#FFAFAA", "#FED2CF"]}
      start={{ x: 1, y: 0.1 }}
      end={{ x: 0.3, y: 0.6 }}
    >
      <Text fontFamily={"KCCChassam"}>안녕하세요</Text>
      <Text fontFamily={"KCCChassam"}>안녕하세요 일어</Text>
      <Text fontFamily={"KCCChassam"}>안녕하세요 일어 발음</Text>
      <HStack>
        <Text fontFamily={"KCCChassam"}>발음듣기</Text>
        <Text fontFamily={"KCCChassam"}>발음듣기 아이콘</Text>
      </HStack>
      <IconButton
        position="absolute"
        right={0}
        top={0}
        onPress={() => setLike(!like)}
        icon={
          like ? (
            <Entypo name="heart" size={20} color="red" />
          ) : (
            <Entypo name="heart-outlined" size={20} color="red" />
          )
        }
      />
    </LinearGradient>
  );
}
