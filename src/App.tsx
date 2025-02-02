import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { Products } from '.';
import Details from '../screens/Details';
`   `
export type RootStackParamList = {
  Home : undefined;
  Details: {product: Products}
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})