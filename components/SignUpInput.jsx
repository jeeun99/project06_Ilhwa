import React from "react";
import { Input, Box, Text } from "native-base";
import { StyleSheet } from "react-native";

export default function SignUpInput({ w, title, type, setFunc, error }) {
  return (
    <Box mt={2} width={w} borderRadius="10" overflow={"hidden"}>
      <Input
        variant="filled"
        placeholderTextColor="#656565"
        placeholder={title}
        style={styles.inputStyle}
        type={type}
        onChangeText={(text) => {
          text = text.trim();
          setFunc(text);
        }}
      />
      <Text
        fontFamily={"SUITERegular"}
        fontSize="14"
        mt={1}
        ml={1}
        style={{ color: "#FF6A6A" }}
      >
        {error}
      </Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    fontFamily: "KCCChassam",
    fontSize: 14,
    backgroundColor: "#F6F6F6",
  },
});
