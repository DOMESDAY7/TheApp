import * as React from 'react';
import Contact from './contact';
import Informations from "./informations";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function APropos(props){
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Informations" >
        {(props) => <Informations {...props} urlAPi={props.urlApi} />}
        </Stack.Screen>
        <Stack.Screen name="Contact" >
        {(props) => <Contact {...props} urlAPi={props.urlApi} />}
        </Stack.Screen>
      </Stack.Navigator>
  );
};

export default APropos;