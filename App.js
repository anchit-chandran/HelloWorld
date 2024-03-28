import { useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  Button,
  Pressable,

} from "react-native";
import Timer from "./components/Timer";
import ControlArea from "./components/ControlArea";
import { PaperProvider } from 'react-native-paper';

export default function App() {

  const [tripStarted, setTripStarted] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  function handleControlButtonPress(button) {
    if (button === "play") {
      setTripStarted(true);
    } else if (button === "pause") {
      setTripStarted(false);
    } else if (button === "stop") {
      setTripStarted(false);
      setSecondsElapsed(0);
    }
  }

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "black", padding: 60 }}>
        <View
          style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}
        >
          <Text style={{ color: "white", fontSize: 30 }}>Trip Track</Text>
          <Timer tripStarted={tripStarted} secondsElapsed={secondsElapsed} setSecondsElapsed={setSecondsElapsed} />
          <ControlArea tripStarted={tripStarted} setTripStarted={setTripStarted} handleControlButtonPress={handleControlButtonPress} />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
