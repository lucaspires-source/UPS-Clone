import { TailwindProvider } from 'tailwind-rn'
import utilities from './tailwind.json'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigator/RootNavigator'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://tapes.stepzen.net/api/good-llama/__graphql',
  cache: new InMemoryCache(),
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {/* @ts-ignore - TailwindProvider is missing type definitions */}
        <TailwindProvider utilities={utilities}>
          <RootNavigator />
        </TailwindProvider>
      </NavigationContainer>
    </ApolloProvider>
  )
}
