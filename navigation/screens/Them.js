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


export default class ThemScreen extends Component{
    static navigationOptions = {
        title:'Thêm Khoản Thu',
    }
  constructor(props){
	    super(props);
	    this.state={
          tenkhoanthu:'',
          username:'',
          sotienthu:'',
          loaithu:'',
          ngaythangthu:'',

	     // checkLogin:0
	    }
      }
      componentWillMount(){
          var that=this;
          var date=new Date().getDate();
          //date
          var month=new Date().getMonth()+1;
          //month
          var year=new Date().getFullYear();
          //year
          that.setState({
              date:year+'/'+month+'/'+date,
          });
      }
	  _onSubmit=()=>{
        return fetch('http://quanlythuchi-reactnative.000webhostapp.com/appreact/themkhoanthu.php', { 
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              tenkhoanthu: this.state.tenkhoanthu,
              username: this.props.navigation.getParam('username'),
              sotienthu:this.state.sotienthu,
              loaithu:this.state.loaithu,
              ngaythangthu:this.state.date
            })
          })
        .then((response) => response.json())
        .then((response) =>{
         
              //this.setState({checkLogin:responseJson.success});
              if(response ==='success'){
                 // console.warn(response);
                Alert.alert("Thêm thành công!");
               this.props.navigation.navigate('KhoanThu');
              }
              else{
                // console.warn(response);
                  Alert.alert("Thêm không thành công!");
              }
          })
          .catch((error) =>{
             // console.error(error);
    });
}
	    

 
  render(){
   
    return(
      <View style={styles.container}>
       
       <Text style={styles.title}>THÊM KHOẢN THU</Text>
	   <View style={styles.inputContainer}>
     
      <TextInput style={styles.inputs} placeholder="Nhập tên khoản thu" 
           placeholderTextColor="black"
           underlineColorAndroid="transparent"
             onChangeText={(tenkhoanthu) => this.setState({tenkhoanthu:tenkhoanthu})}/>
		   </View>
		   <View style={styles.inputContainer}>
			  
        <TextInput placeholder="Nhập số tiền thu" 
            underlineColorAndroid="transparent"
            placeholderTextColor="black"
           
            style={styles.inputs}  onChangeText={(sotienthu) => this.setState({sotienthu:sotienthu})}
			/>
			</View>
			<View style={styles.inputContainer}>
			
             <TextInput placeholder="Nhập Loại Thu" 
            underlineColorAndroid="transparent"
            placeholderTextColor="black"
            
            style={styles.inputs}  onChangeText={(loaithu) => this.setState({loaithu:loaithu})}/>
			</View>
            <View style={styles.inputContainer}>
			
             <TextInput placeholder="Nhập ngày thàng thu" 
            underlineColorAndroid="transparent"
            placeholderTextColor="black"

            
            style={styles.inputs}>
                {this.state.date}
                </TextInput>
			</View>
			<View>
        <TouchableOpacity onPress={this._onSubmit} style={styles.btnLogin}>
            <Text style={styles.txtLogin}>Thêm Khoản Thu</Text>
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