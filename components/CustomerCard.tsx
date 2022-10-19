import { View, Text, TouchableOpacity } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import useCustomersOrders from '../hooks/useCustomerOrders'
import { useNavigation } from '@react-navigation/native'
import { CustomerScreenNavigationProp } from '../screens/CustomersScreen'
import { Card, Icon } from '@rneui/themed'
type Props = {
  userId: string
  name: string
  email: string
}

const CustomerCard = ({ email, name, userId }: Props) => {
  const { loading, error, orders } = useCustomersOrders(userId)
  const tw = useTailwind()
  const navigation = useNavigation<CustomerScreenNavigationProp>()
  return (
    <TouchableOpacity>
      <Card containerStyle={tw('p-5 rounded-lg')}>
        <View>
          <Text>{name}</Text>
          <Text>ID: {userId}</Text>
          <View>
            <Text>{loading ? '...loading' : `${orders.length} x`}</Text>
            <Icon
              style={tw('mb-5 ml-auto')}
              name="box"
              type="entypo"
              color="#59c1cc"
              size={50}
            />
          </View>
        </View>
        <Card.Divider/>
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  )
}

export default CustomerCard
