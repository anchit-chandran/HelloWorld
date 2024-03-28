import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import theme from "../styles/Styles";
import SubstanceEmoji from "./SubstanceEmoji";

function Timer() {
  const letterSpacingValue = 9;
  return (
    <View style={{ ...theme.containerCenter, marginBottom: 200 }}>
      <SubstanceEmoji substanceEmoji="💊" />
      <Text
        style={{
          ...theme.textMuted,
          fontSize: 19,
          letterSpacing: letterSpacingValue,
          paddingTop: 20,
          textAlign: "center",
        }}
      >
        hh : mm : ss
      </Text>
      <Text
        style={{
          ...theme.text,
          ...timeFontStyle.time,
          textAlign: "center",
        }}
      >
        00 : 00 : 00
      </Text>
      <Text
        style={{
          ...theme.text,
          ...theme.textMuted,
          fontSize: 24,
          paddingTop: 20,
        }}
      >
        Come up
      </Text>
    </View>
  );
}

const timeFontStyle = StyleSheet.create({
  time: {
    fontSize: 50,
  },
});

export default Timer;
