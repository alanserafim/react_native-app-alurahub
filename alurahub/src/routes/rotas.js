import React from 'react';

import Principal from '../screens/Principal';
import Repositorios from '../screens/Repositorios';
import CriarRepositorio from '../screens/CriarRepositorio';
import InfoRepositorio from '../screens/InfoRepositorio';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Principal" options={{ title: "Perfil" }} component={Principal} />
                <Stack.Screen name="Repositorios" component={Repositorios} />
                <Stack.Screen name="CriarRepositorio" options={{ title: "Criar Repositório" }} component={CriarRepositorio} />
                <Stack.Screen name="InfoRepositorio" options={{ title: "Repositório Info" }} component={InfoRepositorio} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}