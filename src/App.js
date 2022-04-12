import React from 'react';

import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native'; //네비게이션 상태 저장
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '@screen/Main.js'
import ChatScreen from '@screen/Chat.js'
import HistoryScreen from './screen/History';

 const Tab = createBottomTabNavigator();

 const App = () => {
   return (
      <NavigationContainer >
         <Tab.Navigator  screenOptions = { ({ route }) =>({ headerShown: false, tabBarHideOnKeyboard: true,
           tabBarStyle: {
              height: 80,
              paddingHorizontal: 5,
              paddingTop: 0,
              backgroundColor: 'rgba(34,36,40,1)',
              borderTopWidth: 0,
          }, })} >
             <Tab.Screen name="Main" component={MainScreen}
               options={{ tabBarLabel: '', tabBarIcon: ({ focused }) => (
                 <MaterialIcon name='account-multiple' size={63}
                   style={{paddingTop: 8, color: focused ? '#C5C5C5': '#434343'}}></MaterialIcon>)}}
             />
             <Tab.Screen name="Chat" component={ChatScreen}
               options={{ tabBarLabel: '', tabBarIcon: ({ focused }) => (
               <MaterialIcon name='comment-multiple-outline' size={55}
                 style={{ paddingTop: 12, color: focused ? '#C5C5C5': '#434343'}}></MaterialIcon>)}}/>
             <Tab.Screen name="History" component={HistoryScreen} 
               options={{ tabBarLabel: '', tabBarIcon: ({ focused }) => (
               <MaterialIcon name='rhombus-split-outline' size={55}
                 style={{paddingTop: 12, color: focused ? '#C5C5C5': '#434343'}}></MaterialIcon>)}}/>
         </ Tab.Navigator>
      </NavigationContainer>
   );
 };

 export default App;
