import * as React from 'react';
import Contact from './contact';
import Informations from "./informations";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function APropos(){
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Informations" component={Informations}/>
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default APropos;