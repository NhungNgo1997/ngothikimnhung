import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet,TouchableHighlight,Image,Alert ,Dimensions, TouchableOpacity } from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {createAppContainer, TabNavigator} from 'react-navigation';
 import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
 import {createStackNavigator} from 'react-navigation-stack';


 import KhoanChiScreen from './KhoanChi';
import ThongKeScreen from './ThongKe';

class KhoanThuScreen extends React.Component {
  static navigationOptions = {
    title:'Khoản Thu',
    
}

 
  constructor(props){
    super(props);
    this.state ={
      id_khoanthu:0,
      username:'',

     
      isLoading: true}
  }
  

  componentDidMount(){
    return fetch('http://quanlythuchi-reactnative.000webhostapp.com/appreact/khoanthu.php',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: this.props.navigation.getParam('username'),
     
    })
    })
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      // .catch((error) =>{
      //   console.error(error);
      // });
  }

  submitXoa=(IDitem)=>{
    return fetch('http://quanlythuchi-reactnative.000webhostapp.com/appreact/deletekhoanthu.php',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       id_khoanthu:IDitem,
  
      })
    })
    .then((response) => response.json())
    .then((response) =>{
   
        //this.setState({checkLogin:responseJson.success});
        if(response ==='success'){
           //console.warn(response);
           Alert.alert("Xóa thành công!");
          //this.props.navigation.navigate('Home');
        }
        else{
           //.warn(response);
            Alert.alert("Xóa không thành công");
        }
    })
    // .catch((error) =>{
    //     console.error(error);
    // });


  }


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View>
      
        <SwipeListView
          data={this.state.dataSource}
          renderItem={({item}) =>(
          <View style={styles.container}>
             <View>
          <Image  source={{uri:'https://img.icons8.com/bubbles/50/000000/money-box.png'}} style={{width:50, height:50, margin:5}}></Image>
          </View>
          
            <View style={styles.itemtrai}>
            <Text>{item.tenkhoanthu}</Text>
            <Text>{item.loaithu}</Text>
            </View>
            <View style={styles.itemphai}>
            <Text style={{color:'red'}}>{item.sotienthu}</Text>
            <Text style={styles.itemngay}>{item.ngaythangthu}</Text>
            </View>
            
            </View>
            
           
           )}
           
        
           renderHiddenItem={ ({item}) => (
            <View style={{flex:1, flexDirection:'row'}}>
               <TouchableHighlight onPress={()=>this.submitXoa(item.id_khoanthu)} style ={{backgroundColor:'gray', flex:50,borderRadius:10, marginLeft:10,marginTop:10}}
               >
                 <Text style={{margin:25,color:'red'}}>XÓA</Text>
               </TouchableHighlight>
               <TouchableHighlight style={{backgroundColor:'gray',flex:50,borderRadius:10, marginRight:10,marginTop:10}}
               onPress={
                 ()=>{
                   this.props.navigation.navigate('Sua',{id_khoanthu:item.id_khoanthu,tenkhoanthu:item.tenkhoanthu,loaithu:item.loaithu,
                  sotienthu:item.sotienthu,ngaythangthu:item.ngaythangthu});
                 }
               }>
                 <Text style={{alignSelf:'flex-end',margin:25,color:'red'}}>SỬA</Text>
               </TouchableHighlight>
            </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-75}>
         
         
        </SwipeListView>
        <View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Them',{username: this.props.navigation.getParam('username')})} style={styles.btnLogin}>
            <Text style={styles.txtLogin}>Thêm Khoản Thu</Text>
        </TouchableOpacity>
          </View>
        </View>
        
        
     
    );
  }
}

export default createAppContainer(
  createMaterialTopTabNavigator(
    {
     
      KhoanThu: KhoanThuScreen,
      KhoanChi: KhoanChiScreen,
      ThongKe:ThongKeScreen
      
    }
   
  )
);
const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      borderRadius:10,
      backgroundColor:'#66CC99',
      padding:10,
      marginLeft:10,
      marginRight:10,
      marginTop:10
 
      
    },
    
   
    itemtrai:{
      marginLeft:10,
      flex:1,
      flexDirection:'column',
      marginTop:12
      

    },
    btnLogin:{
      width: DEVICE_WIDTH - 60,
      backgroundColor:'gray',
     padding:12,
      borderRadius: 30,
      alignItems:'center',
      width:250,
     height:45,
     marginTop:20,
     marginLeft:60,
     justifyContent: 'center',
    
     },
     txtLogin:{
     color:'#fff',
     textAlign:'center',
     justifyContent: 'center',
     alignItems:'center',
     },
   
    // anh:{
    //   flex: 1,
    //   flexDirection: 'row'
    // },
    itemphai:{
      flex:1,
      flexDirection:'column',
      marginTop:12
    },
   
  });
