import { gql, useQuery } from '@apollo/client';

const GET_CUSTOMERS = gql`
  query GET_CUSTOMERS   {
    GetCustomers {
      name
      value {
        email
        name
      }
    }
  }
`;

const GET_ORDERS = gql`
  query GetOrders   {
    GetOrders {
      name
      value {
        Address
        City
        Lat
        Lng
        carrier
        createdAt
        shippingCost
        trackingId
        trackingItems {
          customer {
            email
            name
          }
          customer_id
          items {
            item_id
            name
            price
            quantity
          }
        }
      }
    }
  }
`;
