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
import HousesList from './sections/houses/HousesList'

export default class App extends Component {

  //rederiza la pantalla
   render() {
    return (
      <Router>
      <Scene key="root">
       
        <Scene 
          initial
          key={'HousesList'}
          component={HousesList} 
        />
        
        
      </Scene>
   </Router>
    );
  }
}

const styles = StyleSheet.create({
 
});




