/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  //constructor de la clase, para pasar las props y inicializar estados.
  constructor(props){
    super(props)

    //declaramos los estados
    this.state = {
      title: 'titulo inicial',
      texto: 'hola mundo'
    }
  }



  //rederiza la pantalla
   render() {

    console.log('render execution')

    const title = 'Hola gente!!!!'
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        {this.state.title}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js 
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }


//Eventos....

// Aqui ñlegan las propiedad antes de que lleguen, sabiendo que cambia. Momento para cambiar de estados de componentes
componentWillReceiveProps(nextProps){

}

//nos indica siguente estados y propiedades. devielvemos true o false (true == se hace el render)
componentWillUpdate(nextProps, nextState){

}

//antes de que se ejecute el render
componentWillMount(){
}

// despues del render
componentDidMount(){
  setTimeout(() => {
    this.setState({
      title: 'jaaarrrrr'
    })
  }, 2000);
  

}


componentDidUpdate(nextProps, nextState){
  //Despues de que esten actualizadas
}

componentWillUnmount(){
  //destruir componente, para los listener etc.
}


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: Platform.OS === 'ios' ? 'blue': 'black',
    marginBottom: 5,
  },
});
