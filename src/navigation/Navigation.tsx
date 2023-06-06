import CharacterProvider from '@/context/CharacterProvider'
import { DetailsScreen, HomeScreen } from '@/screens'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'

const Stack = createNativeStackNavigator()

const Navigation: FC = () => {
  return (
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
  )
}

export default Navigation
