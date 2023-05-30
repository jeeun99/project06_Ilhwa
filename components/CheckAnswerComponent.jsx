import { Box, HStack, Text } from "native-base";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

export default function CheckAnswerComponent({ num, text }) {
  const [ansBg, setAnsBg] = useState("#CDDBF5");
  const [ansNum, setAnsNum] = useState("#2c2c2c");
  const [ansText, setAnsText] = useState("#2c2c2c");
  const [answer, setAnswer] = useState(false);

  useEffect(() => {
    if (answer) {
      setAnsBg("#79A8FF");
      setAnsNum("#fafafa");
      setAnsText("#79A8FF");
    } else {
      setAnsBg("#CDDBF5");
      setAnsNum("#2c2c2c");
      setAnsText("#2c2c2c");
    }
  }, [answer]);

  return (
    <TouchableOpacity
      onPress={() => {
        setAnswer(!answer);
      }}
    >
      <HStack mb={4}>
        <Box
          w="20px"
          h="20px"
          borderRadius={"30px"}
          backgroundColor={ansBg}
          alignItems={"center"}
          justifyContent="center"
          mr={2}
        >
          <Text color={ansNum} fontFamily={"SUITERegular"} fontSize="14">
            {num}
          </Text>
        </Box>
        <Text fontFamily={"SUITERegular"} fontSize="16" color={ansText}>
          {text}
        </Text>
      </HStack>
    </TouchableOpacity>
  );
}
