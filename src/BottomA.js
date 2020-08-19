import * as React from 'react'
import { Icon } from 'react-native-elements'

import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import TopA from '../src/TopA'
import TopB from '../src/TopB'

function BackAsset () {
  return (
    <Icon
      // raised
      name="keyboard-arrow-left"
      size={50}
      color="white"
      style={{
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 4,
        shadowOpacity: 1,
      }}
    />
  )
}

const HomeStack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()

function TabPage () {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TopA"
        options={{
          title: 'TopA',
        }}
        component={TopA}
      />
      <Tab.Screen
        name="TopB"
        options={{
          title: 'TopB',
        }}
        component={TopB}
      />
    </Tab.Navigator>
  )
}

export default function BottomA () {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TabPage"
        component={TabPage}

        options={{
          title: '',
          headerStatusBarHeight: 0,
          headerStyle: {
            // backgroundColor: '#ff0000',
            shadowColor: 'transparent'
          },

        }}
      />
    </HomeStack.Navigator>

  )
}
