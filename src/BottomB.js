import React, { Component } from 'react'
import { SearchBar, Text } from 'react-native-elements'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'
import { setSearchText } from './redux/action'

class BottomBContent extends Component {
  constructor (props) {
    super(props)
  }

  updateSearch = (search) => {
    //Redux
    this.props.setSearchText(search)
  }

  render () {
    return (
      <View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={this.props.searchText}
        />
        <Text>検索文字</Text>
        <Text>{this.props.searchText}</Text>
      </View>
    )
  }
}

const HomeStack = createStackNavigator()

export default function BottomBNavigator ({ badgeNumber,setBadgeNumber}) {

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen

        options={{ title: 'BottomB' }}
        name="BottomBContents"
        component={main}
        badgeNumber={badgeNumber}
        setBadgeNumber={setBadgeNumber}

      />


    </HomeStack.Navigator>
  )
}

const mapStateToProps = state => ({
  searchText: state.searchText
})

const mapDispatchToProps = {
  setSearchText
}

const main = connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomBContent)
