import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Beginner from '../screenComponent/Beginner';
import { Ionicons } from '@expo/vector-icons';
import Intermediate from '../screenComponent/Intermediate';
import Advance from '../screenComponent/Advance';

const Tabs = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Beginner,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Ionicons name="ios-home" color={tintColor} size={22} />
            <Text style={{ color: tintColor }}>Home</Text>
          </View>
        ),
      },
    },
    Profile: {
      screen: Intermediate,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Ionicons name="ios-person" color={tintColor} size={22} />
            <Text style={{ color: tintColor }}>Profile</Text>
          </View>
        ),
      },
    },
    Settings: {
      screen: Advance,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Ionicons name="ios-settings" color={tintColor} size={22} />
            <Text style={{ color: tintColor }}>Settings</Text>
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Beginner',
    lazyLoad: true,
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        height: 70,
        backgroundColor: '#40404c',
        paddingBottom: 3,
        paddingTop: 3,
      },
      indicatorStyle: {
        backgroundColor: '#fff',
        elevation: 10,
      },
      activeTintColor: '#fff',
      inactiveTintColor: 'gray',
    },
  }
);

const MainScreenNavigator = createStackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      title: 'My App',
      headerStyle: {
        backgroundColor: '#2b2b39',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    },
  },
});

export default createAppContainer(MainScreenNavigator);

const styles = StyleSheet.create({
  iconCOntainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
