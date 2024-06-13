import { ThemedText } from "@/components/ThemedText";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Form() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/car/elementsServiceIconsCharger.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
}

//create styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  imageContainer: {
    marginTop: 30,
    width: 120,
    height: 120,
  },
  image: {
    width: 120,
    height: 120,
  },
});
