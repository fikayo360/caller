import { StatusBar } from 'expo-status-bar';
import Allcontacts from './allcontacts';
import Dialer from './dialer';
import Recents from './recents';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
        <Tab.Navigator 
         initialRouteName="Dialer"
        screenOptions={({route}) => ({
          tabBarIcon : ({focused,size,color}) => {}
          
        })}>
        <Tab.Screen name="Dialer" component={Dialer} />
        <Tab.Screen name="Recents" component={Recents} />
        <Tab.Screen name="Allcontacts" component={Allcontacts} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

