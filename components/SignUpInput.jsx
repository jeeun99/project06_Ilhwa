import React from "react";
import { Input, Box } from "native-base";
import { StyleSheet } from "react-native";

export default function SignUpInput({ w, title }) {
  return (
    <Box mt={2} width={w} borderRadius="10" overflow={"hidden"}>
      <Input
        variant="filled"
        placeholderTextColor="#656565"
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
    backgroundColor: "#F6F6F6",
  },
});
