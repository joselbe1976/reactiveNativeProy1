import React, { Component } from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

import { Actions } from 'react-native-router-flux'


export default class screen2 extends React.Component{

  //rederiza la pantalla
   render() {

    console.log("this.props)",this.props)
    return (
      <View>
        <Text>
            Pantalla 2
        </Text>

        <Text>
            {this.props.texto}
        </Text>

        <Button
        title= 'Volver'
        onPress={ () => Actions.pop() }  // hacemos pop para volver
    />
      </View>

    );
  }
}

