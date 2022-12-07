import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Home/Home';
import Details from '../Details/Details';
import {NavigationContainer} from '@react-navigation/native';

const {Navigator, Screen} = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
}
