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

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "black", padding: 60 }}>
        <View
          style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}
        >
          <Text style={{ color: "white", fontSize: 30 }}>Trip Track</Text>
          <Timer />
          <ControlArea />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
