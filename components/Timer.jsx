import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import theme from "../styles/Styles";
import SubstanceEmoji from "./SubstanceEmoji";

const formatNumber = (number) => `0${number}`.slice(-2);

const getRemaining = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return {
    hours: formatNumber(hours),
    minutes: formatNumber(minutes),
    seconds: formatNumber(seconds),
  };
};

function Timer({ tripStarted, secondsElapsed, setSecondsElapsed }) {
  const letterSpacingValue = 9;

  

  useEffect(() => {
    let interval;
    if (tripStarted) {
      interval = setInterval(() => {
        setSecondsElapsed((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => interval && clearInterval(interval);
  }, [tripStarted]);

  const { hours, minutes, seconds } = getRemaining(secondsElapsed);

  return (
    <View style={{ ...theme.containerCenter, flex: 1 }}>
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
        {hours} : {minutes} : {seconds}
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
