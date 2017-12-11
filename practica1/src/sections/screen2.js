import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';




export default class screen2 extends React.Component{

  //rederiza la pantalla
   render() {
    return (
      <View>
        <Text>
            Pantalla 2
        </Text>

        <Text>
            {this.props.texto}
        </Text>
      </View>

    );
  }
}

