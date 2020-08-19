# Overview
Expo × React Native × React Navigation v5 × Redux

React Navigation v5 を使ってReduxを使いたくていろいろ調べましたが、

日本語の文献がほとんどないので、簡易的なサンプルコード

## Demo
別々のスクリーンでReduxのStateを保持して変更検知ができます。

今回は検索バーに入力された文字をReduxで管理します。

![18b330fd4832154a7068c263756ef3be](https://user-images.githubusercontent.com/32351460/90604643-1feea180-e238-11ea-9e83-289394eee49e.gif)

# Install
`git clone`が完了したらこのプロジェクトに移動してください
```
$ cd project_name
```

```
$ npm install 
```

Expoが管理するプロジェクトなので、依存関係をインストールする必要があります

```
$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

# Run
```
$ expo start --web
```
