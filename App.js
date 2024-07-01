import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, Platform, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {promptForEnableLocationIfNeeded} from 'react-native-android-location-enabler';
import Home from './src/screens/Home';
import Settings from './src/screens/Settings';
import About from './src/screens/About';
import SelectRoute from './src/screens/SelectRoute';
import Splash from './src/screens/Splash';
import {AppProvider} from './src/common/context';
import {colors} from './src/common/utils';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isSplash, setSplash] = useState(true);

  useEffect(() => {
    requestLocationPermission();
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);

  async function requestLocationPermission() {
    if (Platform.OS == 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Rapido',
            message: 'Rapido access to your location ',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the location');
          const enableResult = await promptForEnableLocationIfNeeded();
          console.log('enableResult', enableResult);
        } else {
          console.log('location permission denied');
        }
      } catch (err) {
        // console.warn(err);
      }
    }
  }

  return (
    <AppProvider>
      <SafeAreaProvider>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              contentStyle: {backgroundColor: colors.white},
            }}>
            {isSplash && <Stack.Screen name="Splash" component={Splash} />}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="SelectRoute" component={SelectRoute} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AppProvider>
  );
}
