import { Image, Pressable, View } from "react-native";
import { Link } from "expo-router";

export default function LeftArrowButton() {
  return (
    <View style={{ width: 40, height: 40, marginHorizontal: 8 }}>
      <Link href="/ticket" asChild>
       <Pressable>
       <Image
          source={require("../assets/images/car/componentsNavBarXButtonsRoundedBlack.png")}
          style={{ width: 40, height: 40 }}
        />
       </Pressable>
      </Link>
    </View>
  );
}
