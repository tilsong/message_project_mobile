import React, {useEffect}from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import GroupOne from '@component/GroupOne';
import MakeGroup from '@screen/MakeGroup.js';
import MakePromise from '@screen/MakePromise.js';
import OneGroupPromise from '@screen/OneGroupPromise.js';
import EditGroup from '@screen/EditGroup.js'
import EditPromise from '@screen/EditGroup.js'

import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import { createStackNavigator } from '@react-navigation/stack';

 const MainStack = createStackNavigator();

 const Main = () => {
  return (
    <MainStack.Navigator   screenOptions={{
      headerShown: false
    }}>
      <MainStack.Screen name="MainScreen" component={MainScreen}/>
      <MainStack.Screen name="MakeGroup" component={MakeGroup}/>
      <MainStack.Screen name="MakePromise" component={MakePromise}/>
      <MainStack.Screen name="OneGroupPromise" component={OneGroupPromise} />
      <MainStack.Screen name="EditGroup" component={EditGroup} />
      <MainStack.Screen name="EditPromise" component={EditPromise} />
    </MainStack.Navigator>
  );
 }

 const MainScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({ tabBarVisible: false })
  },[])  

   return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.groupPageName}>
          그룹 페이지
        </Text>
        <View style={{ padding: '7%', paddingTop: '4%' }}>
          <View>
            <Makes navigation={navigation}/>
            <Groups navigation={navigation}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
   );
 }

 const Makes = ({navigation}) => {
    return (
     <View style={styles.makes}>
       <View>
         <Text style={styles.makesTopText}> 새 <Text style={{color: '#7BB0FF' }}>약속</Text>을 잡으세요!</Text>
         <TouchableOpacity style={styles.makeOne} onPress={() => navigation.push('MakePromise')}>
           <FeatherIcon name='box' size={100} color='#7BB0FF'/>
           <Text style={{ color: '#7BB0FF', fontSize: 19, fontWeight: '700'}}> 약속 생성하기 </Text>
         </TouchableOpacity>
       </View>
       <View>
         <Text style={styles.makesTopText}> 새 <Text style={{color: '#EC8F8F' }}>그룹</Text>을 만드세요!</Text>
         <TouchableOpacity style={styles.makeOne} onPress={() => navigation.push('MakeGroup')}>
           <MaterialIcon name='account-heart' size={100} color='#EC8F8F'/>
           <Text style={{ color: '#EC8F8F', fontSize: 19, fontWeight: '700' }}> 새 그룹 만들기</Text>
         </TouchableOpacity>
       </View>
     </View>
   )
  }


const Groups = ({navigation}) => {
    return (
     <View style={styles.groups}>
       <Text style={{color: 'white', paddingLeft: '2%' }}>현재 그룹 수 {groupK.length}</Text>
        {groupK.map((data) => (
            <GroupOne key={data.groupName} data={data} navigation={navigation} />
        ))}
     </View>
  );
}

const groupK = [
  {
    "groupName": "마이 패밀리",
    "groupMember": [
        { "memberName": "엄마"},
        { "memberName": "아빠"},
        { "memberName": "동생"},
    ],
    "promise": {
        "promiseId": 2,
        "promiseName": "늦으면 벌금 5만원^^"
    }
  },
  {
    "groupName": "YBM 7월 교육 동기",
    "groupMember": [
        { "memberName": "김민정"},
        { "memberName": "이연호"},
        { "memberName": "유균상"},
        { "memberName": "진형호"},
        { "memberName": "김지현"},
    ],
  }
];

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
      makes: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-around',
        marginBottom: '5%'
      },
      makesTopText: {
        color: 'white',
        marginBottom: '2%',
        fontSize: 13,
        fontWeight: 'bold',
      },
      makeOne: {
        backgroundColor: 'rgba(113,113,113,0.61)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%',
        borderRadius: 5,
      },
      groups: {
        flex: 1,
        width: '100%',
        borderWidth: 1,
        marginTop: '4%'
      },
 });
 
 export default Main;