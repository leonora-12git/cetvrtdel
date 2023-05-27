import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import HomeScreen from './screens/HomeScreen';
import Register from './screens/Register';
import LogIn from './screens/LogIn';
import Events from './screens/Events/Events'
import Message from './screens/Message/Message'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import CreateEventScreen from './screens/CreateEvent/CreateEvent';
import ProfileScreen from './screens/Profile/Profile';



const TabNavigator = () => {
  return (
 
      <Tab.Navigator>
        <Tab.Screen name="Events" component={Events} />
        <Tab.Screen name="Create Event" component={CreateEventScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />

      </Tab.Navigator>
 

  );
};



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    // Your Firebase code that depends on initialization, such as setting up listeners or initializing other Firebase services
  }, []);

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}> 
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="Register" component={Register} /> 
    <Stack.Screen name="LogIn" component={LogIn} /> 
    <Stack.Screen name="MainPage" component={TabNavigator} />
    <Stack.Screen name="Message" component={Message} /> 
  </Stack.Navigator>
   </NavigationContainer>
  );
};

export default App;
