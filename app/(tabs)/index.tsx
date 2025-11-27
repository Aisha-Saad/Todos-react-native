import { Text, TouchableOpacity, View } from "react-native";
import useTheme from "@/hooks/useTheme";




export default function Index() {
  const {toggleDarkMode}=useTheme()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle the mode</Text>
      </TouchableOpacity>
    </View>
  );
}
