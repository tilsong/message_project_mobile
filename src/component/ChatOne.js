import React from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';

const ChatOne = ({data, navigation}) => {
    return (
        <TouchableOpacity style={styles.chatOne} onPress={() => navigation.push('ChatRoom')}>
            <View style={styles.chatTime}>
                <Text style={styles.timeState}>{data.timeState}</Text>
                <Text style={styles.promiseTime}>{data.promiseTime}</Text>
            </View>
            <View style={styles.chatContent}>
                <FontAwesome5 name='user-circle' size={37} color='white' style={{marginRight: 4, marginTop:4}} />
                <View style={{ marginLeft: 12}}>
                    <Text Text style={styles.promiseName}>{data.promiseName}</Text>
                    <Text style={styles.recentChat}>{data.recentChat}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    chatOne: { 
        backgroundColor: 'rgba(66, 66, 66, 0.71);',
        borderRadius: 8,
        width: '100%',
        height:90,
        padding: 7,
        marginTop: 7,
        marginBottom: 5
    },
     chatTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: '1%',
        paddingHorizontal: 5
     },
     timeState: {
        color: '#CCCCCC',
        fontWeight: 'bold'
     },
     promiseTime: {
        color: '#B4B4B4',
        marginRight:5,
        fontWeight: 'bold',
        fontSize:12.5
     },
     chatContent: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: '1%',
        paddingHorizontal: 10
     },
     promiseName:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
     },
     recentChat: {
        marginTop: 2,
        fontWeight: 'bold',
        fontSize: 13,
        color: '#A7A7A7' 
     }
    });
export default ChatOne;