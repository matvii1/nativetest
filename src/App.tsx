import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import CharacterProvider from './context/CharacterProvider'
import DetailsScreen from './screens/DetailsScreen'
import HomeScreen from './screens/HomeScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />

      <CharacterProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: {
                backgroundColor: '#fff',
              },
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="Character Details"
              component={DetailsScreen}
              options={{
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CharacterProvider>
    </SafeAreaView>
  )
}

export default App
