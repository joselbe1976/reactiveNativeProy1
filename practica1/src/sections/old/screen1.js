import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Actions } from 'react-native-router-flux'


export default class screen1 extends React.Component {


    _goScreen2(){
        Actions.screen2({texto: 'Texto de prueba' , title: 'Titulo de prueba'});
    }


  //rederiza la pantalla
   render() {
    return (
      <View>
        <Text>
            Pantalla 1
        </Text>
        <Button
            title= 'Ir a pantalla 2 chato'
            onPress={()=> this._goScreen2()}
        />
        
    
      </View>

    );
  }
}

