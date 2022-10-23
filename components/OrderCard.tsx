import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Icon } from '@rneui/themed'
import { useTailwind } from 'tailwind-rn/dist'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabStackParamsList } from '../navigator/TabNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigator/RootNavigator'


export type OrderCardNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamsList, 'Orders'>,
  NativeStackNavigationProp<RootStackParamList>
>
type Props = {
  item: Order
}
const OrderCard = ({ item }: Props) => {
  const tw = useTailwind()
  const navigation = useNavigation<OrderCardNavigationProp>()
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Order" ,{order:item})}>
      <Card containerStyle={tw('px-5 rounded-lg')}>
        <View style={tw('flex-row justify-between items-center')}>
          <View>
            <Icon
              name="truck-delivery"
              color={'#eb6a7c'}
              type="material-community"
            />
            <Text style={{ fontSize: 10 }}>
              {new Date(item.createdAt).toDateString()}
            </Text>
          </View>
            <View>
                <Text style={tw("text-gray-400 text-xs")}>{item.carrier}-{item.trackingId}</Text>
                <Text style={tw("text-gray-500 text-xl")}>{item.trackingItems.customer.name}</Text>
            </View>
          <View style={tw("flex-row items-center")}>
            <Text style={tw("text-sm text-[#eb6a7c]")} >{item.trackingItems.items.length}</Text>
            <Icon style={tw('ml-2')} name="box" type="feather" />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  )
}

export default OrderCard
