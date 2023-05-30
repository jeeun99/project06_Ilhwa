import { Box, Text } from "native-base";
import { TouchableOpacity } from "react-native";

export default function StudyPage({ navigation }) {
  const goQuestion1 = () => {
    navigation.navigate("Question01");
  };
  const goQuestion2 = () => {
    navigation.navigate("Question02");
  };
  const goQuestion3 = () => {
    navigation.navigate("Question03");
  };
  return (
    <Box>
      <Text>StudyPage</Text>
      <TouchableOpacity onPress={goQuestion1}>
        <Text>문제1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goQuestion2}>
        <Text>문제2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goQuestion3}>
        <Text>문제3</Text>
      </TouchableOpacity>
    </Box>
  );
}
