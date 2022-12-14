import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ModalScreen from '../screens/ModalScreen';
import OrderScreen from '../screens/OrderScreen';
import TabNavigator from './TabNavigator'


export type RootStackParamList = {
    Main:undefined;
    Modal:{userId: string, name: string};
    Order:{order: Order}
}
const RootStack = createNativeStackNavigator()
const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
      <RootStack.Group screenOptions={{presentation:"modal"}}>
      <RootStack.Screen options={{headerShown:false}} name="Modal" component={ModalScreen} />
      </RootStack.Group>
      <RootStack.Group>
      <RootStack.Screen name="Order" component={OrderScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default RootNavigator
