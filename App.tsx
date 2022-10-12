import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { TailwindProvider, useTailwind } from 'tailwind-rn'
import utilities from './tailwind.json'
export default function App() {
const tailwind = useTailwind()
  return (
    // @ts-ignore - TailwindProvider is missing type definitions
    <TailwindProvider utilities={utilities}>
      <View >
        <Text style={tailwind('text-blue-600')}>Hello World</Text>
      </View>
    </TailwindProvider>
  )
}

