import React, {useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

 import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

 import ChatOne from '@component/ChatOne.js';
 import ChatRoom from '@screen/ChatRoom.js';
 import { createStackNavigator } from '@react-navigation/stack';

 const ChatStack = createStackNavigator();

 const Chat = ({navigation}) => {

    // useEffect(() => {
    //     navigation.setOptions({ tabBarStyle: { display: 'none' } })
    // },[])  
     return(
        <ChatStack.Navigator screenOptions={{headerShown: false}}>
            <ChatStack.Screen name="ChatList" component={ChatList}/>
            <ChatStack.Screen name="ChatRoom" component={ChatRoom}/>
        </ChatStack.Navigator>
     );
 } 

const chats = [
    { timeState: '내일 약속이 있어요!', promiseTime: '17분 전', promiseName: '강남 YBM 모여라', recentChat: '그래서 고기는 먹는거??'},
    { timeState: '7일 후 약속이 있어요!', promiseTime: '어제', promiseName: '등산 동호회 1월 회식', recentChat: '일 끝나면 바로 가는 걸로!'},
    { timeState: '22일 후 약속이 있어요!', promiseTime: '11월 24일', promiseName: '늦으면 벌금 5만원', recentChat: '사진은 핸드폰으로 찍으면 돼'},
];




const ChatList = ({navigation}) => { 
    return ( 
        <SafeAreaView style={styles.backgroundStyle}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Text style={styles.groupPageName}>
                채팅
                </Text>
                <View style={{ padding: '7%', paddingTop: '1%' }}>
                    {chats.length
                        ? chats.map((data) => (
                            <ChatOne key={data.promiseTime} data={data} navigation={navigation}/>
                        ))
                        : <Text style={{color: "white"}}>채팅 기록이 없습니다.</Text>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'black',
        flex: 1,
      },
    groupPageName: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      margin: '5%',
      marginLeft: '5%',
      marginBottom: '1%',
    },
   });


export default Chat;