import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';
import FourthScreen from './src/screens/FourthScreen';
import FifthScreen from './src/screens/FifthScreen';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
const navigator = createMaterialTopTabNavigator({
  First: {
    screen: FirstScreen
  },
  Second: {
    screen: SecondScreen
  },
  Third: {
    screen: ThirdScreen
  },
  Fourth: {
    screen: FourthScreen
  },
  Fifth: {
    screen: FifthScreen
  }
})
//   {
//     First: FirstScreen,
//     Second: SecondScreen,
//     Third: ThirdScreen,
//     Fourth: FourthScreen,
//     Fifth: FifthScreen,
//   },
//   {
//     initialRouteName: 'First',
//     defaultNavigationOptions: {
//       title: 'Task-6',
//     },
//   }
// );


export default createAppContainer(navigator);