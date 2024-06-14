import { Image, Pressable, View } from "react-native";
import { router } from "expo-router";

export default function RightArrowButton() {
  return (
    <View style={{ width: 40, height: 40, marginHorizontal: 8 }}>
      <Pressable onPress={() => router.back()}>
        <Image
          source={require("../assets/images/car/componentsNavBarXButtonsRoundedWhiteAlpha.png")}
          style={{ width: 40, height: 40 }}
        />
      </Pressable>
    </View>
  );
}
