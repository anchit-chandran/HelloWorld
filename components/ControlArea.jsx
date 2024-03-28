import { useState } from "react";
import { Text, View } from "react-native";
import theme from "../styles/Styles";
import { IconButton, MD3Colors } from 'react-native-paper';

function ControlArea() {
  return (
    <View style={{...theme.containerCenter}}>
     <IconButton 
     icon={"play"}
     mode="contained-tonal"
     size={30}
     containerColor="green"
     iconColor="white"
     onPress={() => console.log('Pressed')}
     />
    </View>
  );
}

export default ControlArea;
