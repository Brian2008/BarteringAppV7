import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import SignUpLoginScreen from './Screens/SignUpLoginScreen'
import ExchangeScreen from './Screens/ExchangeScreen'
import HomeScreen from './Screens/HomeScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import customSidebarMenu from './components/customSideBarMenu'
import settingScreen from './Screens/SettingScreen'


export default class App extends React.Component{
  render(){
    return (
      <View>
        <AppContainer>

        </AppContainer>
       </View>
    )
  }
}
const TabNavigator=createBottomTabNavigator({
  HomeScreen:{screen:HomeScreen},
  ExchangeScreen:{screen:ExchangeScreen},

},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName=navigation.state.routeName
      if(routeName==="HomeScreen"){
        return(
          <Image source={require("./assets/favicon.png")} style={{width:20, height:20}} />
        )
      }else if(routeName==="ExchangeScreen"){
        return(
          <Image source={require("./assets/icon.png")} style={{width:20, height:20}} />
        )

      }
    }
  })
})
const switchNavigator = createSwitchNavigator({
  SignUpLoginScreen:{screen:SignUpLoginScreen},
  BottomTab:{screen:AppTabNavigator},
  AppDrawerNavigator:{screen:AppDrawerNavigator}
})
const AppContainer = createAppContainer(switchNavigator);

const AppDrawerNavigator = createDrawerNavigator({
  Home:{
    screen : TabNavigator
  },
  Settings:{
    screen : settingScreen
  }
},
  {
    contentComponent:customSidebarMenu
  },
  {
    initialRouteName:'Home'
})
