import React, {useCallback} from 'react';

 import {
   SafeAreaView,
   Text,
   View,
   TouchableOpacity,
   TextInput
 } from 'react-native';

import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import Snackbar from 'react-native-snackbar';


const MakePromise = ({navigation}) => {
  const completeMakePromise = useCallback(() =>{
    Snackbar.show({
      text: '새로운 약속이 생성되었습니다.',
      duration: Snackbar.LENGTH_SHORT,
      action: {
        text: '확인',
        textColor: 'white',
        onPress: () => { /* Do something. */ },
      },
    });
    navigation.goBack();
  },[])

  return (
     <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
       <View style={{padding: '5%'}}>
         <TouchableOpacity onPress={() => navigation.goBack() }>
           <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
             뒤로 가기
           </Text>
         </TouchableOpacity>
         <View style={{alignItems: 'center', justifyContent: 'center' , paddingTop: 25}}>
           <Text style={{color: 'white', textAlign: 'center', fontSize:25, fontWeight: 'bold', paddingBottom: 5  }}>약속 생성하기</Text>
           <View style={{backgroundColor: 'rgba(113,113,113,0.61)', borderRadius: 6,
             flexDirection: 'row', paddingHorizontal: 6 }}>
             <Text style={{ fontSize: 13, color: '#7BB0FF', fontWeight: 'bold', paddingBottom: 5, textAlign: 'center'}}>
               <FeatherIcon name='box' size={20} color='#7BB0FF' />
               &nbsp;WITH YBM 7월 교육동기
             </Text>
           </View>
         </View>
         <View style={{borderColor: 'white', borderWidth: 1, borderRadius:5, marginTop: 30 }}>
           <TextInput style={{ backgroundColor: 'rgba(113,113,113,0.18)', fontSize: 22, paddingHorizontal: 15,
             paddingVertical: 7, fontWeight: 'bold', color: 'white' }} placeholder="약속 명을 입력하세요." 
             placeholderTextColor={'#AEAEAE'}
           ></TextInput>
         </View>
         <View style={{borderColor: 'white', borderWidth: 1, borderRadius:5, marginTop: 25, backgroundColor: 'rgba(113,113,113,0.18)' }}>
           <Text style={{fontSize: 20, fontWeight: 'bold', color: '#AEAEAE', paddingHorizontal: 15, paddingVertical: 10}}>
             날짜를 고르세요
           </Text>
           <View style={{paddingBottom: 15}}>
             <Text style={{fontSize: 25, color: 'white', textAlign: 'center', fontWeight: 'bold' }}> 3월 22일 오후 7시 30분</Text>
           </View>
         </View>
         <View style={{ flexDirection: 'row', marginTop: 30}}>
           <FeatherIcon name='book' size={40} color='#CECECE'/>
           <View style={{marginLeft: 10, borderColor: 'white', borderWidth: 1, borderRadius:5 , width: '86%'}}>
             <TextInput style={{ paddingVertical: 8, paddingHorizontal: 12, fontWeight: 'bold', color: 'white', fontSize: 21, backgroundColor: 'rgba(113,113,113,0.18)'}} placeholder="설명" 
               placeholderTextColor={'#AEAEAE'}></TextInput>
           </View>
         </View>
         <View style={{ flexDirection: 'row', marginTop: 25}}>
           <FeatherIcon name='map-pin' size={40} color='#CECECE'/>
           <View style={{ marginLeft: 10, borderColor: 'white', borderWidth: 1, borderRadius:5, width: '86%' }}>
             <TextInput style={{ paddingVertical: 8, paddingHorizontal: 12, fontWeight: 'bold', color: 'white', fontSize: 21, backgroundColor: 'rgba(113,113,113,0.18)'}} placeholder="장소" 
               placeholderTextColor={'#AEAEAE'}></TextInput>
           </View>
         </View>
         <TouchableOpacity style={{alignItems:'center'}} onPress={completeMakePromise}>
           <View style={{marginTop: 40, alignItems: 'center', borderColor: 'white', borderWidth: 3, borderRadius:5, width: '39%', paddingVertical: 4 }}>
             <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white', textAlign:'center',
               paddingHorizontal: 5, paddingVertical: 5}}>완료</Text>
           </View>
         </TouchableOpacity>
       </View>
     </SafeAreaView>
    )
  }

  export default MakePromise;  