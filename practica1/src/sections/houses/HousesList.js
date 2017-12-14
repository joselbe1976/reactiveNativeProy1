import React, { Component } from 'react';
import {  View , Text, FlatList, Button , StyleSheet} from 'react-native';
import { AsynCalls } from '../../commons' 


export default class HousesList extends Component {


    constructor(props){
        super(props)
        this.state = {
            list: [],
            selected: null
        }
    }

    componentWillMount(){
        
        
    }

    render() {
      const nombre = this.state.selected ? this.state.selected.nombre : ''

        return (
            <View>
                <Text style={styles.title}>{nombre}</Text>
                <FlatList
                data={ this.state.list }
                renderItem = {({item, index}) => this.renderItem(item, index)}
                keyExtractor = {(item, index) => item.id}
                extraData = {this.state} //para que se entere del render de la lista
 
            />
            </View>
        )
    }
    //render item cell del FlatList
    renderItem(item, index){

        const cellstyle = this.checkIsselected(item)

        return(
            <View style={[styles.cell, cellstyle]} >
                <Text style={{fontSize: 20}}>{item.nombre}</Text>
                <Button  
                    title={'Hazme Clickg'}
                    onPress={() => this.setState({selected: item})}
                />
            </View>
        )
    }


    checkIsselected(item){
        if ( this.state.selected && this.state.selected.id == item.id ){
            return {backgroundColor: 'blue'}
        }
        else{
            return {backgroundColor: 'grey'}
        }
    }


    checkItemStyle(){
        
    }

    componentDidMount(){
 
        
    }

}    


const styles = StyleSheet.create({
    cell:{
        height: 120, 
        marginVertical: 1
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 20
    }
})