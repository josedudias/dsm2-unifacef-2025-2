import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ImagePickerScreen from './screens/ImagePickerScreen';
import CameraScreen from './screens/CameraScreen';
import AtividadePraticaScreen from './screens/AtividadePraticaScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#6200ee',
            tabBarInactiveTintColor: 'gray',
            headerStyle: {
              backgroundColor: '#6200ee',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Tab.Screen
            name="Galeria"
            component={ImagePickerScreen}
            options={{
              tabBarLabel: 'Galeria',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="image" color={color} size={size} />
              ),
              headerTitle: 'Parte 2: Image Picker',
            }}
          />
          <Tab.Screen
            name="Camera"
            component={CameraScreen}
            options={{
              tabBarLabel: 'Câmera',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="camera" color={color} size={size} />
              ),
              headerTitle: 'Parte 3: Camera',
            }}
          />
          <Tab.Screen
            name="Atividade"
            component={AtividadePraticaScreen}
            options={{
              tabBarLabel: 'Atividade',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="application" color={color} size={size} />
              ),
              headerTitle: 'Atividade Prática',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
