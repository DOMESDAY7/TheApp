import react from "react";
import { Button, StyleSheet, View, Dimensions } from "react-native";

const Navbar = ({ navigation }) => {
    return (
        <View styles={styles.contain_nav}>
        <Button
          title="Accueil"
          onPress={() =>
            navigation.navigate('accueil')
          }
        />
        <Button
          title="RDV"
          onPress={() =>
            navigation.navigate('rdv')
          }
        />
        </View>
    );
  };
  
const windowW = Dimensions.get("window").width;
const styles = StyleSheet.create({
    contain_nav: {
        flex:2,
        alignItems: "center",
        justifyContent: "center",
        width:windowW,
        backgroundColor:"#000"
    }
})
export default Navbar;