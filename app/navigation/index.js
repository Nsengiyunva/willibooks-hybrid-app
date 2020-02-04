import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import Listing from '../screens/Listing'

const navigator = createStackNavigator(
    {
        HomeScreen,
        Listing
    },
    {
        defaultNavigationOptions: {
            initialRouteName: 'HomeScreen',
            headerShown: false
        }
    }
)

export default createAppContainer(navigator)