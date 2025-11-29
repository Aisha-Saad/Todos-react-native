import { Text, TouchableOpacity, View ,StyleSheet} from "react-native";
import useTheme,{ColorScheme} from "@/hooks/useTheme";
import {useMutation, useQuery}from "convex/react"
import { api } from "@/convex/_generated/api";




export default function Index() {
  const {toggleDarkMode,colors}=useTheme()

  const styles=createStyles(colors)

 
  return (
    <View  style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle the mode</Text>
      </TouchableOpacity>
     
    </View>
  );
}

const createStyles=(colors:ColorScheme)=>{
  const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    gap:10,
    backgroundColor:colors.bg
  }
 })

 return styles
}
