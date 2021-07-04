import React from 'react'
import { render } from 'react-dom';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, FlatList } from 'react-native';
import db from '../config'
import firebase from 'firebase'
export default class HomeScreen extends Component {
    constructor() {
        super()
        this.state={
            allRequests:[]
        }
    }
    getAllRequests=()=>{
        this.requestRef=db.collection("exchange")
        .onSnapshot((snapshot)=>{
            var allRequests=[]
            snapshot.forEach((doc)=>{
                allRequests.push(doc.data)            
            })
        })
    }
    keyExtractor=(item,index)=>index.toString()
    renderItem = ({ item, i }) => {
        console.log(item.item_name);
        return (
            <ListItem
                key={i}
                title={item.item_name}
                subtitle={item.description}
                titleStyle={{ color: 'black', fontWeight: 'bold' }}
                rightElement={
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: '#ffffff' }}></Text>
                    </TouchableOpacity>
                   }
                bottomDivider
            />
        )
    }
    componentDidMount(){
        this.getAllRequests()
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {this.state.allRequests.length===0?(
                        <View style={{ flex: 1, justifyContent:'center' }}>
                            <Text style = {{fontSize:20}}>List of All Barters</Text>
                        </View>
                    ):
                    <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.allRequests}
                    renderItem={this.renderItem}
                />
                }
                
                
            </View>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        width: '75%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10',
        backgroundColor: "#ff5722",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop: 20

    },

})