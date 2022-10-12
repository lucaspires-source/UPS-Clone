import { TailwindProvider } from 'tailwind-rn'
import CustomersScreen from './screens/CustomersScreen'
import utilities from './tailwind.json'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
export default function App() {
  return (
    <NavigationContainer>
      {/* @ts-ignore - TailwindProvider is missing type definitions */}
      <TailwindProvider utilities={utilities}>
        <Stack.Navigator>
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  )
}
