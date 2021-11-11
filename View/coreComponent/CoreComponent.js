import React from 'react';
import {StyleSheet, Text, View,Image,TextInput } from 'react-native';
import { color } from 'react-native-reanimated';

export default class CoreComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = { text: 'Core component' };
      }
    render(){
        
        return (
            <View style={style.container}>
            <Text style={style.text}>{this.state.text}</Text> 
        <View>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
        </View>
        <View>
        <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      
        </View>
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