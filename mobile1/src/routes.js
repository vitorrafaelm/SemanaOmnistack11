import React from 'react';
//É necessário para conter as rotas
import { NavigationContainer } from '@react-navigation/native'
import {  createStackNavigator } from '@react-navigation/stack'; 

const AppStack = createStackNavigator(); 
import Incidents from './pages/Incidents/index';
import Detail from './pages/Detail/index';

/**
 * Cada tag AppStack.Screen precisa ter um name e apontar para alguem componente
 * A tag AppStack.Navigator tem que englobar aas screen enquando a navigation 
 * container tem que conter todas as rotas
 */
export default function Routes(){
    return(
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}
