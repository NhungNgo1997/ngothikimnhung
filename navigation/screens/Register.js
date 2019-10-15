/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Alert, View,TouchableOpacity,TextInput,Image,Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


export default class RegisterScreen extends Component{
    static navigationOptions = {
        title:'Đăng ký',
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
          if(this.state.username===""){
              Alert.alert(title="Không được bỏ trống tên tài khoản");
          }
          else{
              if(this.state.password===""){
                  Alert.alert(title="Không được bỏ trống mật khẩu");
              }
              else{
                if(this.state.password!==this.state.reset){
                    Alert.alert(title="Mật khẩu không trùng khớp!");
                }
                else{
                    return fetch('http://quanlythuchi-reactnative.000webhostapp.com/appreact/register.php', { 
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
	           // console.warn(response);
              Alert.alert("Thông báo!","Bạn đã đăng ký thành công!");
             this.props.navigation.navigate('Login');
	        }
	        else{
	           console.warn(response);
	            Alert.alert("Thông báo!"," Đăng ký không thành công!");
	        }
	    })
	    .catch((error) =>{
	        console.error(error);
	    });
            }         
                }
              }
          }
	    

 
  render(){
   
    return(
      <View style={styles.container}>
       
       <Text style={styles.title}>ĐĂNG KÝ</Text>
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
			<View style={styles.inputContainer}>
			<Image style={styles.inputIcon} source={{uri:'https://img.icons8.com/bubbles/50/000000/password.png'}}></Image>
             <TextInput placeholder="Nhập lại mật khẩu" 
            underlineColorAndroid="transparent"
            placeholderTextColor="black"
            secureTextEntry={true}
            style={styles.inputs}  onChangeText={(reset) => this.setState({reset:reset})}/>
			</View>
			<View>
        <TouchableOpacity onPress={this._onSubmit} style={styles.btnLogin}>
            <Text style={styles.txtLogin}>Đăng Ký</Text>
        </TouchableOpacity>
		</View>
       

	
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
		 
		 width:250,
		height:45,
	 
	  },
	  txtLogin:{
	    color:'#fff',
	    textAlign:'center'
	  }
  


})