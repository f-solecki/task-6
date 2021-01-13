import { createAppContainer } from 'react-navigation';
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
}, {
  initialRouteName: 'First',
  animationEnabled: true,
  tabBarOptions: {
    showIcon: false,
    showLabel: false,
    style: { height: 0 }
  }
}
)



export default createAppContainer(navigator);