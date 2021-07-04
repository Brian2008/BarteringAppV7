import React from 'react'
import { render } from 'react-dom';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView } from 'react-native';
import db from '../config'
import firebase from 'firebase'
export default class Exchange extends Component {
constructor(){
    super()
    this.state={
        userName:firebase.auth().currentUser.email,
        itemName:'',
        description:''
    }
}
addItem=(itemName, description)=>{
    var userName = this.state.userName
    db.collection("exchange_requests").add({
        "username" : userName,
        "item_name" : itemName,
        "description": description
    })
    this.setState({
        itemName: '',
        description : ''
    })

    return Alert.alert(
        'Item ready to exchange',
        '',
        [
            {text: 'OK', onPress: ()=> {
             this.props.navigation.navigate('HomeScreen')   
            }}
        ]
    );
}
    render() {
        return (
            <View style = {{flex:1}}>
                <KeyboardAvoidingView style = {{flex:1,justifyContent:'center', alignItems:'center'}}>
                <TextInput style = {styles.formTextInput}
                placeholder={"Item-Name"}
                maxLength={12}
                onChangeText={(text)=>{
                    this.setState({
                        itemName:text,

                    })
                }}
                value={this.itemName}
                />

                <TextInput style = {styles.formTextInput}
                placeholder={"Description"}
                multiline={true}
                onChangeText={(text)=>{
                    this.setState({
                        description:text,

                    })
                }}
                value={this.description}
                />
                <TouchableOpacity
                    style={[styles.button,{marginTop:10}]}
                    onPress = {()=>{this.addItem(this.state.itemName, this.state.description)}}
                    >
                    <Text style = {{color:'#ffffff', fontSize:18, fontWeight:'bold'}}>AddItem</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
                
            </View>
    )
    }
}
const styles = StyleSheet.create({
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'orange',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10
    },
    button:{
      width:'75%',
      height:50,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:'10',
      backgroundColor:"#ff5722", 
      shadowColor: "#000",
      shadowOffset:{width:0,height:8},
      shadowOpacity:0.44,
      shadowRadius:10.32,
      elevation:16,
      marginTop:20
      
    },
    
  })