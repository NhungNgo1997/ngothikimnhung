import React from 'react';
import {View, Text, Button} from 'react-native';
export default class DetailScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1, alignContent:'center',justifyContent:'center'}}>
                <Text>This is DetailScreen</Text>
                <Button
                title='Go to User'
                onPress={()=>this.props.navigation.navigate('User')}></Button>
                <Button
                title='Go to HomeScreen'
                onPress={()=>this.props.navigation.navigate('Home')}></Button>
                <Text>{this.props.navigation.getParam('thamso','No value')}</Text>
            </View>
        )
    }
}