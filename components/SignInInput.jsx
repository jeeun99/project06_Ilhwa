import React from "react";
import { Input, Box } from "native-base";
import { StyleSheet } from "react-native";

export default function SignInInput({ title, type, setFunc, error }) {
  return (
    <Box mt="20px">
      <Input
        placeholderTextColor="white"
        variant="underlined"
        placeholder={title}
        style={styles.inputStyle}
        type={type}
        onChangeText={(text) => {
          text = text.trim();
          setFunc(text);
        }}
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
