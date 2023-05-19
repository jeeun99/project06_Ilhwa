import React from "react";
import { Input, Box } from "native-base";
import { StyleSheet } from "react-native";

export default function SignInInput({ title }) {
  return (
    <Box mt="20px">
      <Input
        placeholderTextColor="white"
        variant="underlined"
        placeholder={title}
        style={styles.inputStyle}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    fontFamily: "KCCChassam",
    fontSize: 14,
  },
});
