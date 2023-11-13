import React from "react";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import Login from "./Login";
import SignIn from "./SignIn";
import SignalDO from "./SignalDO";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export default function Page() {

  return (
      <NavigationContainer independent={true} style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name="SignalDO" component={SignalDO} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
