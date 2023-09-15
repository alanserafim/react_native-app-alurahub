import React from 'react';

import Principal from '../screens/Principal';
import Repositorios from '../screens/Repositorios';
import CriarRepositorio from '../screens/CriarRepositorio';
import InfoRepositorio from '../screens/InfoRepositorio';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Principal" options={{ title: "Perfil" }} component={Principal} />
                <Tab.Screen name="Repositorios" component={Repositorios} />
                <Tab.Screen name="CriarRepositorio" options={{ title: "Criar Repositório" }} component={CriarRepositorio} />
                <Tab.Screen name="InfoRepositorio" options={{ title: "Repositório Info" }} component={InfoRepositorio} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}