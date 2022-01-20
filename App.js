/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   View,
   TouchableOpacity
 } from 'react-native';
 import FeatherIcon from 'react-native-vector-icons/dist/Feather';
 import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
 import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
 
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
 const Tab = createBottomTabNavigator();
 const Groups = () => {
   return (
      <View style={styles.groups}>
        <Text style={{color: 'white', paddingLeft: '2%' }}>현재 그룹 수 2</Text>
          {/* group components*/}
          <View>
            {/* group component*/}
            <View style={styles.groupOne}>
              {/* top */}
              <View style={styles.groupOneTop}>
                <Text style={styles.groupOneTopText}>마이 패밀리</Text>
                <TouchableOpacity>
                  <MaterialIcon name='pencil' size={20} color='white'></MaterialIcon>
                </TouchableOpacity>
              </View>
              {/* members */}
              <View>
                <Text style={{color: 'white'}}>총 인원 3 </Text>
                <View style={styles.groupMember}>
                  <TouchableOpacity>
                    <Text style={{color: 'white'}}>  엄마, 아빠, 동생</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* promise */}
              <View>
                <Text style={{color: 'white', marginTop: '5%'}}>예정된 약속이 있습니다.</Text>
                <View style={styles.groupPromiseY}>
                  <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: 'white' }}>  늦으면 벌금 5만원^^</Text>
                    <MaterialIcon name='arrow-right-thick' size={20} color='white'></MaterialIcon>
                  </TouchableOpacity>
                </View>
              </View>
              {/** previous promise */}
              <View style={styles.prePromise}>
                <TouchableOpacity >
                  <Text style={styles.prePromiseText}>최근 약속 보기</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.groupOne}>
              {/* top */}
              <View style={styles.groupOneTop}>
                <Text style={styles.groupOneTopText}>YBM 7월 교육 동기</Text>
                <TouchableOpacity>
                  <MaterialIcon name='pencil' size={20} color='white'></MaterialIcon>
                </TouchableOpacity>
              </View>
              {/* members */}
              <View>
                <Text style={{color: 'white'}}>총 인원 14</Text>
                <View style={styles.groupMember}>
                  <TouchableOpacity>
                    <Text style={{color: 'white'}}>  김민정, 이연호, 유균상, 진형호, 김지현.. </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* promise */}
              <View>
                <Text style={{color: 'white', marginTop: '5%'}}>예정된 약속이 없습니다.</Text>
                <View style={styles.groupPromiseN}>
                  <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: 'white' }}>  새로운 약속 생성하기</Text>
                    <MaterialIcon name='arrow-right-thick' size={20} color='white'></MaterialIcon>
                  </TouchableOpacity>
                </View>
              </View>
              {/** previous promise */}
              <View style={styles.prePromise}>
                <TouchableOpacity >
                  <Text style={styles.prePromiseText}>최근 약속 보기</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </View>
   );
 }
 const Makes = () => {
   return (
    <View style={styles.makes}>
      <View>
        <Text style={styles.makesTopText}> 새 <Text style={{color: '#7BB0FF' }}>약속</Text>을 잡으세요!</Text>
        <TouchableOpacity style={styles.makeOne}>
          <FeatherIcon name='box' size={100} color='#7BB0FF'/>
          <Text style={{ color: '#7BB0FF', fontSize: 19, fontWeight: '700'}}> 약속 생성하기 </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.makesTopText}> 새 <Text style={{color: '#EC8F8F' }}>그룹</Text>을 만드세요!</Text>
        <TouchableOpacity style={styles.makeOne}>
          <MaterialIcon name='account-heart' size={100} color='#EC8F8F'></MaterialIcon>
          <Text style={{ color: '#EC8F8F', fontSize: 19, fontWeight: '700' }}> 새 그룹 만들기</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
 }
 const Main = () => {
   return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.groupPageName}>
          그룹 페이지
        </Text>
        <View style={{ padding: '7%', paddingTop: '4%' }}>
          <View>
            <Makes />
            <Groups />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
   );
 }    

 const App = () => {
   return (
      <NavigationContainer >
        <Tab.Navigator  screenOptions = { ({ route }) =>({ headerShown: false,     tabBarStyle: {
      height: 80,
      paddingHorizontal: 5,
      paddingTop: 0,
      backgroundColor: 'rgba(34,36,40,1)',
      borderTopWidth: 0,
  }, })} >
            <Tab.Screen name="Main" component={Main}C5C5C5
              options={{ tabBarLabel: '', tabBarIcon: ({ focused }) => ( <MaterialIcon name='account-multiple' size={63} style={{paddingTop: 8, color: focused ? '#C5C5C5': '#434343'}}></MaterialIcon>)}}
            />
            <Tab.Screen name="Chat" component={Chat} 
              options={{ tabBarLabel: '', tabBarIcon: ({ focused }) => ( <MaterialIcon name='comment-multiple-outline' size={55} style={{ paddingTop: 12, color: focused ? '#C5C5C5': '#434343'}}></MaterialIcon>)}}/>
            <Tab.Screen name="history" component={history} 
              options={{ tabBarLabel: '', tabBarIcon: ({ focused }) => ( <MaterialIcon name='rhombus-split-outline' size={55} style={{paddingTop: 12, color: focused ? '#C5C5C5': '#434343'}}></MaterialIcon>)}}/>
        </ Tab.Navigator>
  </NavigationContainer>
   );
 };
 const Chat = () => { 
	return ( 
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.groupPageName}>
          채팅
        </Text>
        {/** chat list */}
        <View style={{ padding: '7%', paddingTop: '1%' }}>

          {/** chat one.. */}
          <TouchableOpacity style={styles.chatOne}>
            <View>
              <View style={styles.chatTime}>
                <Text style={{color: '#CCCCCC', fontWeight: 'bold'}}>내일 약속이 있어요!</Text>
                <Text style={styles.chatTimeRecent}>17분 전</Text>
              </View>
              <View style={styles.chatContent}>
                <FontAwesome5 name='user-circle' size={37} color='white' style={styles.chatIcon}/>
                <View style={{ marginLeft: 12}}>
                  <Text style={styles.chatRoomName}>강남 YBM 모여라</Text>
                  <Text style={styles.lastChat}> 그래서 고기 먹는거??</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.chatOne}>
            <View>
              <View style={styles.chatTime}>
                <Text style={{color: '#CCCCCC', fontWeight: 'bold'}}>7일 후 약속이 있어요!</Text>
                <Text style={styles.chatTimeRecent}>어제</Text>
              </View>
              <View style={styles.chatContent}>
                <FontAwesome5 name='user-circle' size={37} color='#FFF3D4' style={styles.chatIcon}/>
                <View style={{ marginLeft: 12 }}>
                  <Text style={styles.chatRoomName}>등산 동호회 1월 회식</Text>
                  <Text style={styles.lastChat}> 일 끝나면 바로 가는 걸로!</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.chatOne}>
            <View>
              <View style={styles.chatTime}>
                <Text style={{color: '#CCCCCC', fontWeight: 'bold'}}>22일 후 약속이 있어요!</Text>
                <Text style={styles.chatTimeRecent}>11월 24일</Text>
              </View>
              <View style={styles.chatContent}>
                <FontAwesome5 name='user-circle' size={37} color='#BFE0FF' style={styles.chatIcon}/>
                <View style={{ marginLeft: 12 }}>
                  <Text style={styles.chatRoomName}>늦으면 벌금 5만원</Text>
                  <Text style={styles.lastChat}> 사진은 핸드폰으로 찍으면 돼</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

        </View>

      </ScrollView>
      <TouchableOpacity style={{ elevation: 3, position: 'absolute', borderWidth: 3, borderColor: 'white', width:60, height: 60, padding: 6, borderRadius: 140, right: 30, bottom: 20  }}>
            <MaterialIcon name='calendar-range' size={43} color='white'></MaterialIcon>
      </TouchableOpacity>
    </SafeAreaView>
    );
}
const history = () => { 
	return ( 
    	<View style={styles.history}> 
        	<Text>history</Text> 
        </View> 
    ) 
}
//     	//네비게이션의 트리를 관리해주는 컴포넌트 
//       <NavigationContainer> 
//       {/* 네비게이션 기본틀의 스택을 생성 */} 
//         <Stack.Navigator> 
//           {/* 해당스택에 들어갈 화면 요소를 넣어준다. */}
//             <Stack.Screen name="Home" component={HomeScreen}/> 
//         </Stack.Navigator> 
//     </NavigationContainer> 
// const App = () => { 
// 	return ( 

//     ) 
// } 

 const styles = StyleSheet.create({
  history: { 
    flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' 
  },
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
   makeBox: {
     backgroundColor: 'white',
     width: '80%',
     height: '100%',
   },
   groups: {
     flex: 1,
     width: '100%',
     borderWidth: 1,
     marginTop: '4%'
   },
   groupOne: {
     backgroundColor: 'rgba(0,155,189,0.79)',
     marginTop: '3%',
     marginLeft: '1%',
     marginRight: '1%',
     padding: '5%',
     paddingBottom: '3%',
     borderRadius: 20,
   },
   groupOneTop: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
   },
   groupOneTopText: {
     color: 'white',
     fontSize: 20,
     marginBottom: '2%',
     fontWeight: 'bold'
   },
   groupMember: {
     backgroundColor: '#4EADCB',
     padding: '2%',
     borderRadius: 4,
     marginTop: '2%'
   },
   groupPromiseY: {
     backgroundColor: '#118DB4',
     padding: '2%',
     borderRadius: 4,
     marginTop: '2%',
     justifyContent: 'space-between',
     color: 'white'
   },
   groupPromiseN: {
     backgroundColor: '#504ECB',
     padding: '2%',
     borderRadius: 4,
     marginTop: '2%',
     justifyContent: 'space-between',
     color: 'white'
   },
   prePromise: {
     alignItems: 'center',
     marginTop: '3%'
   },
   prePromiseText: {
     color: 'white',
     fontWeight:'bold',
     fontSize: 13,
     textDecorationLine: 'underline',
   },
   chatTime: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '1%',
    paddingHorizontal: 5
   },
   chatOne: {
    backgroundColor: 'rgba(66, 66, 66, 0.71);',
    borderRadius: 8,
    marginTop: 8,
    padding: 7
   },
   chatContent: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: '1%',
    paddingHorizontal: 10
   },
   chatRoomName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
   },
   lastChat: {
    marginTop: 2,
    fontWeight: 'bold',
    fontSize: 13,
    color: '#A7A7A7' 
   },
   chatTimeRecent: {
    color: '#B4B4B4',
    marginRight:5,
    fontWeight: 'bold',
    fontSize:12.5
   },
   chatIcon: {
    marginRight: 4,
    marginTop:4
   }
 });

 export default App;
