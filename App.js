import React from 'react'
import { Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { Ionicons } from '@expo/vector-icons'
import BottomA from './src/BottomA'
import BottomB from './src/BottomB'

import { Provider } from 'react-redux'
import store from './src/redux/store'

const Tab = createBottomTabNavigator()
const RootStack = createStackNavigator()

function IconWithBadge ({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name={name} size={size} color={color}/>
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  )
}

function HomeIconWithBadge (props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={0}/>
}

function MainTabScreen () {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'タブA') {
            return (
              <HomeIconWithBadge
                name={focused ? 'ios-home' : 'ios-home'}
                size={size}
                color={color}
              />
            )
          } else if (route.name === 'タブB') {
            return (
              <Ionicons
                name={focused ? 'ios-car' : 'ios-car'}
                size={size}
                color={color}
              />
            )
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="タブA"
        component={BottomA}
      />
      <Tab.Screen
        name="タブB"
        component={BottomB}
      />
    </Tab.Navigator>
  )
}

export default function App () {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="MainTabScreen"
            component={MainTabScreen}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
