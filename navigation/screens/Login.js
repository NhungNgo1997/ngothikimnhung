/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Alert, View,TouchableOpacity,TextInput,Button,Dimensions, Image} from 'react-native';
import {createAppContainer, withNavigation} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Register from './Register';


 export default class LoginScreen extends Component{
     static navigationOptions = {
         title:'Đăng nhập',
     }
  constructor(props){
	    super(props);
	    this.state={
	      username:"",
	      password:""
	     // checkLogin:0
	    }
	  }
	  _onSubmit=()=>{
	    return fetch('http://quanlythuchi-reactnative.000webhostapp.com/appreact/login.php', { 
	      method: 'POST',
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json',
	      },
	      body: JSON.stringify({
	        username: this.state.username,
	        password: this.state.password,
	      })
	    })
      .then((response) => response.json())
      .then((response) =>{
	   
	        //this.setState({checkLogin:responseJson.success});
	        if(response ==='success'){
	           //console.warn(response);
             // Alert.alert("Thông báo!","Bạn đã đăng nhập thành công!");
            this.props.navigation.navigate('KhoanThu',{username:this.state.username});
	        }
	        else{
	           //.warn(response);
	            Alert.alert("Thông báo!","Đăng nhập không thành công!");
	        }
	    })
	    // .catch((error) =>{
	    //     console.error(error);
	    // });
  }

 
  render(){
	const {navigate}=this.props.navigation;
   
    return(
       
        
        
      <View style={styles.container}>
         
      
        
     <Text style={styles.title}>ĐĂNG NHẬP</Text>
      
	 <View style={styles.inputContainer}>
      <Image style={styles.inputIcon} source={{uri:'https://img.icons8.com/bubbles/50/000000/user.png'}}></Image>
      <TextInput style={styles.inputs} placeholder="Tên tài khoản" 
           placeholderTextColor="black"
           underlineColorAndroid="transparent"
             onChangeText={(username) => this.setState({username:username})}/>
		   </View>
		   <View style={styles.inputContainer}>
			   <Image style={styles.inputIcon} source={{uri:'https://img.icons8.com/bubbles/50/000000/password.png'}}></Image>
        <TextInput placeholder="Mật khẩu" 
            underlineColorAndroid="transparent"
            placeholderTextColor="black"
            secureTextEntry={true}
            style={styles.inputs}  onChangeText={(password) => this.setState({password:password})}
			/>
			</View>
			
			<View>
        <TouchableOpacity onPress={this._onSubmit} style={styles.btnLogin}>
            <Text style={styles.txtLogin}>Đăng Nhập</Text>
        </TouchableOpacity>
		</View>
       
        
		<Text>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity onPress={()=>{navigate('Register')}}>
            <Text style={{color:'red'}}>Đăng ký</Text>
        </TouchableOpacity>
      
        
	
    
     
      </View>
      
    
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
	const DEVICE_HEIGHT = Dimensions.get('window').height;
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor:'#66CC99'
		  },
		  inputContainer: {
			borderBottomColor: '#F5FCFF',
			backgroundColor: '#FFFFFF',
			borderRadius:30,
			borderBottomWidth: 1,
			width:250,
			height:45,
			marginBottom:20,
			flexDirection: 'row',
			alignItems:'center'
		},
		inputs:{
			height:45,
			marginLeft:16,
			borderBottomColor: '#FFFFFF',
			flex:1,
		},
		inputIcon:{
		  width:30,
		  height:30,
		  marginLeft:15,
		  justifyContent: 'center'
		},
		  title:{
			fontSize:30,
			color:'red',
			marginBottom:20
		  },
		  txtInput:{
			backgroundColor: 'rgba(0,0,0, 0.1)',
			width: DEVICE_WIDTH - 60,
			 
			marginHorizontal: 20,
			padding:8,
			borderRadius: 20,
			color: '#000',
			marginTop:20
		  },
		  btnLogin:{
			 width: DEVICE_WIDTH - 60,
			 backgroundColor:'gray',
			padding:12,
			 borderRadius: 30,
			 alignItems:'center',
			 width:250,
			height:45,
		 
		  },
		  txtLogin:{
			color:'#fff',
			textAlign:'center',
			justifyContent: 'center',
			alignItems:'center',
		  }
	  


})