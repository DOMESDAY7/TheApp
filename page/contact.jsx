import React from 'react';
import { View, Text, StyleSheet,TextInput,TouchableOpacity,Dimensions } from 'react-native';
import { useState,  } from 'react';
import Submitbtn from '../components/submitBtn';
const Contact = () => {
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    function handleSubmit(){
        console.log("sub")
    }
    return (
        <View style={styles.containerContact}>
            <Text style={styles.titleContact}>Contactez-nous</Text>
            <TextInput value={mail} onChangeText={setMail} style={styles.inputMail} />
            <TextInput value={message} onChangeText={setMessage} style={styles.inputMessage}/>
            <View style={styles.containerSubBtn}>
                <Submitbtn text="Envoyer" method={()=>{handleSubmit()}} />
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
        color:"white",
    },
    subBtn:{
        borderRadius:10,
        backgroundColor:"white",
        // paddingVertical:10,
        // paddingHorizontal:20,
        // flex:1,
        width:windowWidth/2,
        height:windowHeight/10,
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