import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import First from './First';
import Bill from './Bill';
import Table from './Table';
import Menu from './Menu';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Index = () => {
  var nameTable;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Bill" component={Bill} />
        <Stack.Screen name="Table" component={Table} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;

const styles = StyleSheet.create({});
