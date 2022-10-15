import { ActivityIndicator, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useTailwind } from 'tailwind-rn'
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native'
import { TabStackParamsList } from '../navigator/TabNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { RootStackParamList } from '../navigator/RootNavigator'
import { Input, Image } from '@rneui/themed'

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamsList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList>
>

const CustomersScreen = () => {
  const tw = useTailwind()
  const navigation = useNavigation<CustomerScreenNavigationProp>()
  const [input, setInput] = useState<string>('')
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Customers',
      headerShown: false,
    })
  }, [])
  return (
    <ScrollView style={{ backgroundColor: '#59c1cc' }}>
      <Image
        source={{ uri: 'https://links.papareact.com/3jc' }}
        containerStyle={tw('w-full h-64')}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Input
        placeholder="Search by Customer"
        value={input}
        onChangeText={(text) => setInput(text)}
        containerStyle={tw('bg-white pt-5 pb-0 px-10')}
      />
    </ScrollView>
  )
}

export default CustomersScreen
