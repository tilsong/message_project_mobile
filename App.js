/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';

 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TouchableOpacity
 } from 'react-native';
 import FeatherIcon from 'react-native-vector-icons/dist/Feather';
 import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

 const App: () => Node = () => {

   return (
     <SafeAreaView style={styles.backgroundStyle}>
       <ScrollView
         contentInsetAdjustmentBehavior="automatic">
           <Text style={styles.groupPageName}>
             그룹 페이지
           </Text>
         <View style={{ padding: '7%', paddingTop: '4%' }}>
           <View>
           {/* makes */}
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

           {/* groups */}
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
           </View>
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };

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
   }
 });

 export default App;
