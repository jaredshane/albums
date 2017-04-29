//import a library to help create a component
import React, { Component } from 'react'
import { Text, AppRegistry } from 'react-native'

//create a Component

const App = () => <Text>Hello</Text>

//render to the device
AppRegistry.registerComponent('albums', () => App)
