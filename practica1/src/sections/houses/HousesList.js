import React, { Component } from 'react';
import {  View , Text, FlatList, Button } from 'react-native';

import axios from 'axios'

export default class HousesList extends Component {


    constructor(props){
        super(props)
        this.state = {
            list: [],
            selected: null
        }
    }

    componentWillMount(){
        
        //consumimos el web service
        axios.get('http://146.185.137.85/got/web/casas')
        .then((response)  => {
          console.log(response.data.records);
          //asignamos los valores de la lista  
          this.setState({ list: response.data && response.data.records ? response.data.records : []})
        })
        .catch((error) => {
          console.log(error);
        });
        
    }

    render() {
      const nombre = this.state.selected ? this.state.selected.nombre : ''

        return (
            <View>
                <Text>{nombre}</Text>
                <FlatList
                data={ this.state.list }
                renderItem = {({item}) => this.renderItem(item)}

                
            />
            </View>
        )
    }
    //render item cell del FlatList
    renderItem(item){
        return(
            <View style={{height: 120, backgroundColor: 'blue', marginVertical: 1}}>
                <Text>{item.nombre}</Text>
                <Button  
                    title={'Hazme Click'}
                    onPress={() => this.setState({selected: item})}
                />
                
            </View>

        )
           
        
    }

    componentDidMount(){
 
        
    }

}    