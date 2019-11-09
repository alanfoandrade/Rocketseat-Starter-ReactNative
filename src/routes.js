import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Product from './pages/Product';

export default createAppContainer(
  createStackNavigator(
    {
      Main,
      Product,
    },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#DA552F',
        },
        headerTintColor: '#FFF',
      },
    },
  ),
);
