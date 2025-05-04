import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeFeed from 'screens/HomeFeed';
import WeatherDetails from 'screens/WeatherDetails';
import {navigationRef} from 'navigation/rootNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="HomeFeed">
        <Stack.Screen
          name="HomeFeed"
          component={HomeFeed}
          options={{
            title: 'WeatherNow',
          }}
        />
        <Stack.Screen name="WeatherDetails" component={WeatherDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
