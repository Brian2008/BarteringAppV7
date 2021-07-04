import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Touchable} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';

import firebase from 'firebase';

export default class settingScreen extends Component{
    constructor(){
        super()
        this.state={
            firstName:'',
            lastName:'',
            address:'',
            contact:'',
        }
    }
    getUserDetails=()=>{
        var email = firebase.auth().currentUser.email
        db.collection('users').where('email_id' , '==', email).get()
        .then(snapshot =>{
            snapshot.forEach(doc =>{
                var data = doc.data()
                this.setState({
                    firstName:data.first_name,
                    lastName:data.last_name,
                    address:data.address,
                    contact:data.contact
                })
            })
        })
        }
        updateUserDetails=()=>{
            db.collection('users').doc(this.state.docId)
            .update({
                first_name:this.state.firstName,
                last_name:this.state.lastName,
                address:this.state.address,
                contact:this.state.contact
            })
            Alert.alert("Profile Updated Successfully")
        }
    render(){
        return(
            <View style = {{flex:1}}>
                <MyHeader title="Settings" navigation={this.props.navigation}/>
                <TextInput
                style={{width:"75%",
                height:35,
                alignSelf:'center',
                borderColor:'#ffab91',
                borderRadius:10,
                borderWidth:1,
                marginTop:20,
                padding:10}}
                placeholder={"First Name"}
                onChangeText={(text)=>{
                    this.setState({
                        firstName: text
                    })
                }}
                />
                <TextInput
                style={{width:"75%",
                height:35,
                alignSelf:'center',
                borderColor:'#ffab91',
                borderRadius:10,
                borderWidth:1,
                marginTop:20,
                padding:10}}
                placeholder={"Last Name"}
                onChangeText={(text)=>{
                    this.setState({
                        lastName: text
                    })
                }}
                />
                <TextInput
                style={{width:"75%",
                height:35,
                alignSelf:'center',
                borderColor:'#ffab91',
                borderRadius:10,
                borderWidth:1,
                marginTop:20,
                padding:10}}
                placeholder={"Address"}
                onChangeText={(text)=>{
                    this.setState({
                        address: text
                    })
                }}
                />
                <TextInput
                style={{width:"75%",
                height:35,
                alignSelf:'center',
                borderColor:'#ffab91',
                borderRadius:10,
                borderWidth:1,
                marginTop:20,
                padding:10}}
                placeholder={"Contact"}
                onChangeText={(text)=>{
                    this.setState({
                        contact: text
                    })
                }}
                />
                <TouchableOpacity style = {styles.button}
                onPress={()=>{
                    this.updateUserDetails()
                }}>
                    <Text style = {styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F8BE85',
        alignItems: 'center',
        justifyContent: 'center'
      },
      formContainer:{
          flex:1,
          width:'100%',
          alignItems:'center',
      },
      formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
      },
      button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff9800",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
      },
      buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20
      }
})
