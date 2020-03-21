import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import Listing from '../screens/Listing';
import Chapters from '../screens/Chapters';
import SubChapters from '../screens/SubChapters'
import Preface from '../screens/SubChapters/Preface'
import Content from '../screens/Content'

const navigator = createStackNavigator(
    {
        HomeScreen,
        Listing,
        Chapters,
        SubChapters,
        Preface,
        Content
    },
    {
        defaultNavigationOptions: {
            initialRouteName: 'HomeScreen',
            headerShown: false
        }
    }
)

export default createAppContainer(navigator)