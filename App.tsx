import { TailwindProvider } from 'tailwind-rn'
import utilities from './tailwind.json'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigator/RootNavigator'
export default function App() {
  return (
    <NavigationContainer>
      {/* @ts-ignore - TailwindProvider is missing type definitions */}
      <TailwindProvider utilities={utilities}>
        <RootNavigator />
      </TailwindProvider>
    </NavigationContainer>
  )
}
