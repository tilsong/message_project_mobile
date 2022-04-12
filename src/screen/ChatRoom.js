import React, { useState, useEffect, useCallback } from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { GiftedChat } from 'react-native-gifted-chat'

const groupInfo = {
    'groupName': '강남 YBM 모여'
};

const ChatRoom = ({navigation}) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
            },
          },
          {
            _id: 2,
            text: 'ㅁㄴㅇㄻㄴㅇㄹ',
            createdAt: new Date(),
            user: {
              _id: 3,
              name: '김민수',
            },
          },
          {
            _id: 3,
            text: '12344444',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
            },
          },
        ])
      }, [])
      const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      }, [])
    
  return (
    <View style={{ flex:1}}>
        <View style={styles.topBar}>
            <TouchableOpacity style={{position: 'absolute', left: 10, top: 8 }} onPress={() => navigation.goBack()}>
                <MaterialIcon name='arrow-left' size={35} />
            </TouchableOpacity>
            <Text style={styles.barName}>{groupInfo.groupName}</Text>
        </View>
        <GiftedChat messages={messages} onSend={messages => onSend(messages)} user={{ _id: 1 }}/>
    </View>
  )
}

const styles = StyleSheet.create({
    back: {
        backgroundColor: 'black',
        flex:1,
    },
    topBar: {
        height: 58,
        flexDirection:'column',
        alignItems:'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    barName: {
        color: 'black',
        fontSize:25,
        fontWeight: 'bold',
        marginTop: 10
    }
 });
 
export default ChatRoom;