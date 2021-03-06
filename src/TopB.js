import React, { Component } from 'react'
import { SearchBar, Text } from 'react-native-elements'
import { FlatList, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'
import { setSearchText } from './redux/action'

class TopBContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list_raw: [
        {
          id: '00001',
          title: 'Apple Map'
        },
        {
          id: '00002',
          title: 'GitHub'
        },
        {
          id: '00003',
          title: 'Google Photo'
        },
        {
          id: '00004',
          title: 'Amazon Music'
        },

      ],
      list_show: []
    }
    //配列をコピーする
    this.state.list_show = this.state.list_raw.concat()

    //バインドしておく
    this.updateSearch = this.updateSearch.bind(this)
  }


  //この画面がフォーカスされたら、updateSearchを実行する
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      //この画面がフォーカスされたら実行されます
      this.updateSearch(this.props.searchText)
    });
  }

  RenderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  )

  updateSearch = (search) => {
    //Reduxのstateを更新する
    this.props.setSearchText(search)

    //何も入力されていなければ処理しない
    if(search) {
      //検索バーに入力された文字を部分一致で検索
      const result = this.state.list_raw.filter(item => {
        return item.title.toString().includes(search)
      })

      this.setState({ list_show: result })
      return
    }
    this.setState({ list_show: this.state.list_raw})
  }

  render () {
    return (
      <View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={this.props.searchText}
        />

        <FlatList
          data={this.state.list_show}
          renderItem={this.RenderItem}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

const TopBStack = createStackNavigator()

export default function TopBNavigator ({ badgeNumber,setBadgeNumber}) {
  return (
    <TopBStack.Navigator>
      <TopBStack.Screen
        name="TopB"
        options={{
          title: '',
        }}
        component={main}
        badgeNumber={badgeNumber}
        setBadgeNumber={setBadgeNumber}
      />
    </TopBStack.Navigator>
  )
}

//Reduxで使いたいstate
const mapStateToProps = state => ({
  searchText: state.searchText
})

//Reduxで使いたいaction
const mapDispatchToProps = {
  setSearchText
}

//コネクトしていい感じにReduxのActionを実行できるようにして、Stateにアクセスができる
const main = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopBContent)
