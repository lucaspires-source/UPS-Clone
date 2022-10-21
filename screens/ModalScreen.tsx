import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { useTailwind } from 'tailwind-rn/dist'
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabStackParamsList } from '../navigator/TabNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigator/RootNavigator'
import useCustomersOrders from '../hooks/useCustomerOrders'
import DeliveryCard from '../components/DeliveryCard'

export type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamsList, 'Modal'>,
  NativeStackNavigationProp<RootStackParamList>
>

type ModalScreenRouteProp = RouteProp<RootStackParamList, 'Modal'>

const ModalScreen = () => {
  const tw = useTailwind()
  const navigation = useNavigation()

  const {
    params: { name, userId },
  } = useRoute<ModalScreenRouteProp>()

  const { loading, error, orders } = useCustomersOrders(userId)

  return (
    <View>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={tw('absolute right-5 top-5 z-10')}
      >
        <Icon name="closecircle" type="antdesign" />
      </TouchableOpacity>
      <View style={tw('mt-2.5')}>
        <View style={tw('py-5 border-b border-[#59c1cc]')}>
          <Text style={tw('text-center text-xl font-bold text-[#59c1cc]')}>
            {name}
          </Text>
          <Text style={tw("text-center italic text-sm texte-sm")}>Deliveries</Text>
        </View>
      </View>
      <FlatList
        contentContainerStyle={tw("pb-50")}
        data={orders}
        keyExtractor={(order) => order.trackingId}
        renderItem={({ item: order }) => <DeliveryCard order={order} />}
      />
    </View>
  )
}

export default ModalScreen
