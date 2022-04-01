import React from 'react';
import { TouchableOpacity,Text,StyleSheet } from 'react-native';

//SEND BUTTON
//the send button is recurring on the contact and appointments page
//it takes two possible properties: text and method
//text is the text displayed on the button
//method is the method that will be called when the button is clicked

const Submitbtn = (props) => {
    return (
        <TouchableOpacity style={styles.subBtn} onPress={props.method}>
          <Text>{props.text}</Text>
        </TouchableOpacity>
    );
}


const styles=StyleSheet.create({

    subBtn: {
        borderWidth: 1,
        backgroundColor: "white",
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
        fontSize: 70,
      },
});
export default Submitbtn;
