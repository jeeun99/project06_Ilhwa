import { Box, Text, Flex, IconButton } from "native-base";
import { Entypo } from "@expo/vector-icons";

export default function HeaderComponent({ pgName, navigation }) {
  return (
    <>
      <Box safeAreaTop />
      <Flex
        px={4}
        flexDirection={"row"}
        h={"75px"}
        borderBottomWidth={0.3}
        borderBottomColor={"#656565"}
        justifyContent="space-between"
        alignItems={"center"}
        backgroundColor="transparent"
      >
        <IconButton
          onPress={() => navigation.goBack()}
          icon={<Entypo name="chevron-left" size={24} color="#2C2C2C" />}
        />
        <Text fontFamily={"SUITEBold"} fontSize={"16"} color="#656565">
          {pgName}
        </Text>
        <Entypo name="chevron-left" size={24} color="transparent" />
      </Flex>
    </>
  );
}
