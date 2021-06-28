import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import firebase from 'firebase/app'
import 'firebase/auth'
import { theme } from './src/core/theme'
import {
  AuthLoadingScreen,
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard
} from './src/screens'
import AddCredit from './src/screens/AddCredit'
import ReservationHistory from './src/screens/ReservationHistory'
import FindParkings from './src/screens/FindParkings'
import PaymentSheet from './src/screens/PaymentSheet'
import { FIREBASE_CONFIG } from './src/core/config'
import ParkingDetails from './src/screens/ParkingDetails'
import MakeReservation from './src/screens/MakeReservation'
import ReservationMade from './src/screens/ReservationMade'
import ownAmount from './src/screens/ownAmount'
import AddCreditSuccess from './src/screens/AddCreditSuccess'

const Stack = createStackNavigator()
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
}

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AuthLoadingScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="AuthLoadingScreen"
            component={AuthLoadingScreen}
          />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="AddCredit" component={AddCredit} />
          <Stack.Screen name="ReservationHistory" component={ReservationHistory} />
          <Stack.Screen name="FindParkings" component={FindParkings} />
          <Stack.Screen name="PaymentSheet" component={PaymentSheet} />
          <Stack.Screen name="ParkingDetails" component={ParkingDetails} />
          <Stack.Screen name="MakeReservation" component={MakeReservation} />
          <Stack.Screen name="ReservationMade" component={ReservationMade} />
          <Stack.Screen name="ownAmount" component={ownAmount} />
          <Stack.Screen name="AddCreditSuccess" component={AddCreditSuccess} />
          
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
