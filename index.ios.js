//import a library to help create a component
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import Header from './src/components/header'

//create a Component

const App = () => <Header />

//render to the device
AppRegistry.registerComponent('albums', () => App)
