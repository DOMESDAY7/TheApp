import React from 'react';
import { View, Text, StyleSheet,TextInput,TouchableOpacity,Dimensions } from 'react-native';
import { useState,  } from 'react';
const Contact = () => {
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    return (
        <View style={styles.containerContact}>
            <Text style={styles.titleContact}>Contactez-nous</Text>
            <TextInput value={mail} onChangeText={setMail} style={styles.inputMail} />
            <TextInput value={message} onChangeText={setMessage} style={styles.inputMessage}/>
            <View style={styles.containerSubBtn}>
                <TouchableOpacity sytle={styles.subBtn}>
                    <Text style={styles.textSubBtn}>Envoyer</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Contact;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles=StyleSheet.create({
    containerSubBtn:{
        flex:5,
    },  
    textSubBtn:{
        color:"black",
    },
    subBtn:{
        borderRadius:10,
        backgroundColor:"white",
        paddingVertical:10,
        paddingHorizontal:20,
        flex:1,
    },
    titleContact:{
        fontSize:50,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        flex:2,
        color:"#fff",
    },
    inputMail:{
        borderWidth:1,
        flex:2,
        height:50,
        backgroundColor:"#fff",
        borderRadius:10,
        width:windowWidth*60/100,
        marginBottom:20,
    },
    inputMessage:{
        borderWidth:1,
        flex:5,
        height:50,
        backgroundColor:"#fff",
        borderRadius:10,
        width:windowWidth*80/100,
    },
    containerContact:{
        backgroundColor:"#111111",
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    }
})