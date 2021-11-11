import React from 'react';
import { Text, View } from 'react-native';

export default function Hello({title}){
    return (
        <View>
        <Text>{title}</Text>
        </View>
    )
}