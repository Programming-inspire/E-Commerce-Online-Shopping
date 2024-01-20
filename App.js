import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductScreen from './src/screens/ProductScreen';
import AccountScreen from './src/screens/AccountScreen';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Header } from './src/components/Header';
import SearchProduct from './src/screens/SearchProduct';
import ProductDetailPage from './src/screens/ProductDetailPage';
import CartScreen from './src/screens/CartScreen';
import {CartProvider} from './src/components/CartContext';
import AuthScreen from './src/screens/AuthScreen';
import { UserProvider } from './src/components/UserContext';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  function BottomTab(){
    return(
      <Tab.Navigator>
         <Tab.Screen name='Home' component={HomeScreen}
         options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "#008E97" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#008E97" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
        }}
        />
         <Tab.Screen name='Product' component={ProductScreen}
         options={{
          tabBarLabel: "Product",
          tabBarLabelStyle: { color: "#008E97" },
          headerShown:false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="projector-screen" size={24} color="#008E97" />
            ) : (
              <MaterialCommunityIcons name="projector-screen-outline" size={24} color="black" />
            ),
        }}
        />
         <Tab.Screen name='Account' component={AccountScreen}
         options={{
          tabBarLabel: "Account",
          tabBarLabelStyle: { color: "#008E97" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="account-reactivate" size={24} color="#008E97" />
            ) : (
              <MaterialCommunityIcons name="account-reactivate-outline" size={24} color="black" />
            ),
        }}/>
      </Tab.Navigator>
    )
  }
  return (

   <UserProvider>
    <NavigationContainer>
      <CartProvider>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Auth' component={AuthScreen} options={{headerShown: false}}/>
        <Stack.Screen name='BottomTab' component={BottomTab} options={{headerShown:false}}/>
        <Stack.Screen name='SearchScreen' component={SearchProduct} options={{title: ''}}/>
        <Stack.Screen name='PDP' component={ProductDetailPage} options={{title: ''}}/>
        <Stack.Screen name='Cart' component={CartScreen} options={{title: ''}}/>
      </Stack.Navigator>
      </CartProvider>
    </NavigationContainer>
    </UserProvider>
  
  );
}

const styles = StyleSheet.create();
