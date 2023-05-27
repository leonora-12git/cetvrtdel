import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
            return <AntDesign name={iconName} size={size} color={color} />;
          } else if (route.name === 'Create Event') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
            return <AntDesign name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Create Event" component={CreateEventScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
