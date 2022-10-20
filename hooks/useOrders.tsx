import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_ORDERS } from '../graphql/queries'
const useOrders = () => {
  const { data, loading, error } = useQuery(GET_ORDERS)
  const [orders,setOrders] = useState<Order[]>([])
  useEffect(() =>{
    if(!data) return

    const orders: Order[] = data.GetOrders.map(({value}: OrderResponse) =>({
        carrier:value.carrier,
        Address: value.Address,
        City: value.City,
        Lat: value.Lat,
        Lng: value.Lng,
        createdAt: value.createdAt,
        shippingCost: value.shippingCost,
        trackingId: value.trackingId,
        trackingItems: value.trackingItems
    }))

    setOrders(orders)
  },[data])
   return {orders, loading, error}
}

export default useOrders
