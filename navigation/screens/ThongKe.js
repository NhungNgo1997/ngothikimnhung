import React from 'react';
import {View,Text,FlatList, StyleSheet} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
export default class ThongKeScreen extends React.Component{
    static navigationOptions = {
        title:'Thống Kê',
    }
    constructor(props){
        super(props);
        this.state ={
        
          username:'',
    
         
          isLoading: true}
      }
    componentDidMount(){
        return fetch('http://quanlythuchi-reactnative.000webhostapp.com/appreact/thu.php',{
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
          .catch((error) =>{
            console.error(error);
          });
      }
    //   componentDidMount(){
    //     return fetch('http://10.0.3.2:8888/appreact/tongthunam.php',{
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       username: this.props.navigation.getParam('username'),
         
    //     })
    //     })
    //       .then((response) => response.json())
    //       .then((responseJson) => {
    
    //         this.setState({
    //           isLoading: false,
    //           dataT: responseJson,
    //         }, function(){
    
    //         });
    
    //       })
    //       .catch((error) =>{
    //         console.error(error);
    //       });
    //   }
    render(){
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
               
              </View>
            )
          }
          return(
              <View style={{backgroundColor:'#66CC99',marginTop:80,marginLeft:20, marginRight:20}}>
                <SwipeListView
          data={this.state.dataSource}
          renderItem={({item}) =>(
          <View style={styles.container}>
             
          
            <View style={styles.trai}>
              <Text style={{fontSize:20, marginBottom:20}}>Tổng thu tháng:</Text>
            
            <Text style={{fontSize:20, marginBottom:20}}>Tổng thu năm :</Text>
            <Text style={{fontSize:20, marginBottom:20}}>Tổng chi tháng:</Text>
            <Text style={{fontSize:20, marginBottom:20}}>Tổng chi năm:</Text>
            </View>
            <View style={styles.phai}>
             
              <Text style={{color:'red',fontSize:20, marginBottom:20}}>{item.tongthuthang} VNĐ</Text>
              <Text style={{color:'red',fontSize:20, marginBottom:20}}>{item.tongthunam} VNĐ</Text>
              <Text style={{color:'red',fontSize:20, marginBottom:20}}>{item.tongchithang} VNĐ</Text>
              <Text style={{color:'red',fontSize:20, marginBottom:20}}>{item.tongchinam} VNĐ</Text>
            
            
            </View>
            
            </View>
            
           
           )}
           />
              </View>
          )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    padding:10,
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    

    
  },
  trai:{
    flex:1,
    flexDirection:'column',
    fontSize:30
  },
  phai:{
    flex:1,
    flexDirection:'column',
    fontSize:30
  }

});