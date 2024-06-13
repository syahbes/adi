import { Image, View } from "react-native";

export default function LeftArrowButton() {
  return (
    <View style={{ width: 40, height: 40, marginHorizontal: 8 }}>
      <Image
        source={require("../assets/images/car/componentsNavBarXButtonsRoundedBlack.png")}
        style={{ width: 40, height: 40 }}
      />
    </View>
  );
}
