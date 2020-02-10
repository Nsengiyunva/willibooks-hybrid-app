import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import Listing from '../screens/Listing';
import Chapters from '../screens/Chapters';
import SubChapters from '../screens/SubChapters'
import Preface from '../screens/SubChapters/Preface'

const navigator = createStackNavigator(
    {
        HomeScreen,
        Listing,
        Chapters,
        SubChapters,
        Preface
    },
    {
        defaultNavigationOptions: {
            initialRouteName: 'HomeScreen',
            headerShown: false
        }
    }
)

export default createAppContainer(navigator)