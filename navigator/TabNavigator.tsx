import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CustomersScreen from '../screens/CustomersScreen'
import OrdersScreen from '../screens/OrdersScreen'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'

export type TabStackParamsList ={
  Customers:undefined
  Orders:undefined
}



const Tab = createBottomTabNavigator()


const TabNavigator = () => {

  const navigation = useNavigation() 

  useLayoutEffect(() =>{
    navigation.setOptions({
      headerShown:false
    })
  },[])
  return (
    <Tab.Navigator>
      <Tab.Screen name="Customers" component={CustomersScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator
