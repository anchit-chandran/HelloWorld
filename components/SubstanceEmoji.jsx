import { Text, View } from "react-native";

function SubstanceEmoji({ emojiFontSize = 40, substanceEmoji }) {
  const size = emojiFontSize + 20 + 20; // emoji size + padding + margin
  return (
    <View
      style={{
        borderColor: "white",
        borderRadius: size / 2,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        width: size,
        height: size,
      }}
    >
      <Text
        style={{
          fontSize: emojiFontSize,
          padding: 10,
          margin: 10,
        }}
      >
        {substanceEmoji}
      </Text>
    </View>
  );
}

export default SubstanceEmoji;
