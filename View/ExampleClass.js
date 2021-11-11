import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';

export default class ExampleClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:''
        }
    }
   componentDidMount(){
    const data = this.props.navigation.getParam('data','default data');
    this.setState({
        data
        });
   }
    render(){
        
        return (
            <View style={style.container}>
            <Text style={style.text}>{this.state.data}</Text>
            </View>
        )
    }
    
}
const style = StyleSheet.create({
    container: {
     alignItems:"center"
    },
    text:{
        color:"red"
    }
  });