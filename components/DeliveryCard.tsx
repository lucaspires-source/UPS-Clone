import { View, Text } from 'react-native'
import React from 'react'
import { Card, Icon } from '@rneui/themed'
import { useTailwind } from 'tailwind-rn/dist'
import { Divider } from '@rneui/base'

type Props = {
  order: Order
}

const DeliveryCard = ({ order }: Props) => {
  const tw = useTailwind()
  console.log(order)
  return (
    <Card
      containerStyle={[
        tw('rounded-lg my-2 p-0 pt-4 opacity-90 bg-[#59c1cc]'),
        {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
      ]}
    >
      <View>
        <Icon name="box" type="entypo" color="white" size={50} />
        <View>
          <Text
            style={tw(
              'text-xs text-center uppercase font-bold uppercase text-white font-bold',
            )}
          >
            {order.carrier} - {order.trackingId}
          </Text>
          <Text style={tw('text-white font-bold text-center text-lg')}>
            Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}
          </Text>
          <Divider color="white" />
        </View>
        <View style={tw('mx-auto')}>
          <Text style={tw(' text-base text-white font-bold text-center mt-5')}>
            Address
          </Text>
          <Text style={tw(' text-sm text-white text-center')}>
            {order.Address}, {order.City}{' '}
          </Text>
          <Text style={tw('text-white italic text-center text-sm ')}>
            Shipping Cost: ${order.shippingCost}
          </Text>
        </View>
      </View>
      <Divider color="white" />
      <View style={tw("p-5")}>
        {order.trackingItems.items.map((item) => (
          <View style={tw('flex-row justify-between items-center')}>
            <Text style={tw('text-sm italic text-white')}>{item.name}</Text>
            <Text style={tw('text-xl text-white')}>x{item.quantity}</Text>
          </View>
        ))}
      </View>
    </Card>
  )
}

export default DeliveryCard
