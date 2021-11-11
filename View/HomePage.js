import React from 'react';
import {StyleSheet, Text, View,Button } from 'react-native';
import { color } from 'react-native-reanimated';

export default class HomePage extends React.Component{
    render(){
        return (
            <View style={[style.container, {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "column"
              }]}>
           
            <Button  title="Class component" onPress={()=>this.props.navigation.navigate('ClassComponent',{data:"This is class component"})}>Core component</Button>
            <View style={style.button}>
            <Button  title="Core Component" onPress={()=>this.props.navigation.navigate('Core')}>Core component</Button>
            </View>
            </View>
            
        );
        
    }
    
   
}
const style = StyleSheet.create({
    container: {
     alignItems:"center"
    },
    text:{
        direction:"inherit"
    },
    button:{
        marginTop:3,
    }
  });