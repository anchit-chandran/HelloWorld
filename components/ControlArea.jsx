import { useState } from "react";
import { Text, View } from "react-native";
import theme from "../styles/Styles";
import { IconButton, MD3Colors } from "react-native-paper";

function ControlArea({
  tripStarted,
  setTripStarted,
  handleControlButtonPress,
}) {
  const buttonSize = 40;

  return (
    <View style={{ ...theme.containerCenter, flexDirection: "row" }}>
      <IconButton
        icon={tripStarted ? "pause" : "play"}
        mode="contained-tonal"
        size={buttonSize}
        containerColor="green"
        iconColor="white"
        onPress={() => handleControlButtonPress(tripStarted ? "pause" : "play")}
      />
      {tripStarted && (
        <IconButton
          icon={"stop"}
          mode="contained-tonal"
          size={buttonSize}
          containerColor="red"
          iconColor="white"
          onPress={() => handleControlButtonPress("stop")}
        />
      )}
    </View>
  );
}

export default ControlArea;
