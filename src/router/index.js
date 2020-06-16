import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  Login,
  Register,
  Home,
  History,
  Account,
  DetailPangkalan,
  DetailPesanan,
  DetailHistory,
  EditProfile,
  Help,
  Privacy,
  HomeSeller,
  InputStok,
  Pesanan,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const MainAppSeller = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={HomeSeller} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPangkalan"
        component={DetailPangkalan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPesanan"
        component={DetailPesanan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailHistory"
        component={DetailHistory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Help"
        component={Help}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainAppSeller"
        component={MainAppSeller}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InputStok"
        component={InputStok}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pesanan"
        component={Pesanan}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
