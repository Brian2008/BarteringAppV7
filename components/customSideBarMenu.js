import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Touchable} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';

import firebase from 'firebase';

export default class customSidebarMenu extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <DrawerItems {...this.props}/>
                <View style={{flex:1,justifyContent:'center',padding:10,height:30,width:'100%'}}>
                    <TouchableOpacity style={{justifyContent:'center',padding:10,height:10,width:'100%'}}
                    onPress = {() => {
                        this.props.navigation.navigate('WelcomeScreen')
                        firebase.auth().signOut()
                    }}>
                        <Text>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        )
    }
}