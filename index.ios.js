//import a library to help create a component
import React from 'react'
import { AppRegistry, View } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

//create a Component

const App = () => (
  //need the flex: 1 here for scroll view to work properly
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
)

//render to the device
AppRegistry.registerComponent('albums', () => App)
