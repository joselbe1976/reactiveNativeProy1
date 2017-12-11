/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

//añadimos flux para navegacion
import { Actions, Scene, Router } from 'react-native-router-flux';

//importamos las pantallas
import Screen1 from './sections/screen1'
import Screen2 from './sections/screen2'

export default class App extends Component {

  //rederiza la pantalla
   render() {
    return (
      <Router>
      <Scene key="root">
        <Scene 
          initial
          key={'screen1'}
          component={Screen1} 
        />
        <Scene 
          key={'screen2'}
          component={Screen2} 
      />
        
      </Scene>
   </Router>
    );
  }
}

const styles = StyleSheet.create({
 
});




