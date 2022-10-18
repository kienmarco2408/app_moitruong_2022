import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, SafeAreaView, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Feather, Ionicons } from '@expo/vector-icons';

import Home from './src/component/screens/Home';
import Maps from './src/component/screens/Maps';
import Mission from './src/component/screens/Mission';
import SignIn from './src/component/screens/SignIn';
import SignUp from './src/component/screens/SignUp';
import Detail from './src/component/screens/Detail';
import Learn from './src/component/screens/Learn';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const slides = [
  {
    key: 's1',
    title: 'Ready for take-off',
    desc: 'Welcome to Adventure Travel, a React Native project for Mobile Apps',
    image: require('./src/component/storage/images/flatcharacter_01.png'),
    backgroundColor: '#00A651',
  },
  {
    key: 's2',
    title: 'Ready for take-off',
    desc: 'Welcome to Adventure Travel, a React Native project for Mobile Apps',
    image: require('./src/component/storage/images/flatcharacter_02.png'),
    backgroundColor: '#00A651',
  },
  {
    key: 's3',
    title: 'Ready for take-off',
    desc: 'Welcome to Adventure Travel, a React Native project for Mobile Apps',
    image: require('./src/component/storage/images/flatcharacter_03.png'),
    backgroundColor: '#00A651',
  },
];

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#006838',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopColor: 'rgba(0, 0, 0, .2)',
          height: 85,
          shadowOpacity: 0.25,
        },

        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
            size = focused ? size : size;
          } else if (route.name === 'Maps') {
            iconName = focused ? 'map' : 'map';
          } else if (route.name === 'Mission') {
            iconName = focused ? 'crosshair' : 'crosshair';
          } else if (route.name === 'User') {
            iconName = focused ? 'user' : 'user';
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Maps" component={Maps} />
      <Tab.Screen name="Mission" component={Mission} />
      <Tab.Screen name="Learn" component={Learn} />
    </Tab.Navigator>
  );
};

function App() {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };
  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
        }}
      >
        <Image
          style={{
            marginTop: 120,
            marginHorizontal: 16,
          }}
          source={item.image}
        />
        <Text
          style={{
            marginTop: 33,
            fontSize: 32,
            fontWeight: '700',
            color: '#FFFFFF',
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            marginTop: 16,
            fontSize: 16,
            marginHorizontal: 42,
            textAlign: 'center',
            fontWeight: '500',
            color: '#FFFFFF',
          }}
        >
          {item.desc}
        </Text>
      </View>
    );
  };
  return (
    <>
      {showRealApp ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Signin" component={SignIn} />
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Bottom" component={BottomTabScreen} />
        </Stack.Navigator>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
