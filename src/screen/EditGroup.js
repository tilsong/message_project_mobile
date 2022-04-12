import React, { useState, useCallback } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    TextInput
  } from 'react-native';

import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import FindGroupMemberModal from '@component/FindGroupMemberModal.js'
import Snackbar from 'react-native-snackbar';


const groupMember = [
    {name: '김민정'},
    {name: '이연호'},
    {name: '유균상'},
    {name: '전형호'},
    {name: '추재현'}
];

const Member = ({data}) => {
    return (
        <View style={{flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 5, backgroundColor: '#7BB0FF', width: 102, marginHorizontal: 3, marginVertical: 7,
            borderRadius: 8}}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize:20}}>{data.name}</Text>
            <TouchableOpacity style={{paddingTop:3}}>
                <FeatherIcon name='x' size={25} color='white'  />
            </TouchableOpacity>
        </View>
    )
}
const EditGroup = ({navigation}) => {
    const [modalState, setModalState] = useState(false);
    const modalToggle = () => {
      setModalState(!modalState);
    };
    const completeEditGroup = useCallback(() =>{
      Snackbar.show({
        text: '그룹이 수정되었습니다.',
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
         <TouchableOpacity onPress={() => navigation.goBack()}>
           <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
             뒤로 가기
           </Text>
         </TouchableOpacity>
 
       <View style={{ padding: '3%'}}>
         <View style={{paddingHorizontal: 10, paddingVertical: 15 }}>
           <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', textAlign:'center' }}>그룹 수정하기</Text>
         </View>
       <View>
       <View style={{ paddingBottom: 7}}>
         <Text style={{ color: '#AEAEAE', fontSize: 22 }}>그룹 이름</Text>
         <View style={{backgroundColor: 'rgba(113,113,113,0.17)', borderRadius: 5, borderColor: '#AEAEAE', borderWidth: 2, marginVertical: 5 }}>
           <TextInput style={{padding: 5, color: 'white', fontWeight: '600'}}></TextInput>
         </View>
       </View>
           <View style={{ paddingBottom: 7}}>
             <Text style={{ color: '#AEAEAE', fontSize: 22 }}>그룹원</Text>
             <View style={{backgroundColor: 'rgba(113,113,113,0.17)', borderRadius: 5, flexDirection: 'row', flexWrap: "wrap", borderColor: '#AEAEAE', borderWidth: 2, marginVertical: 5 }}>                 
              { groupMember.map((data) => (
                        <Member key={data.name} data={data} />
               ))}
             </View>
             <TouchableOpacity onPress={modalToggle} style={{ paddingHorizontal: 5, paddingVertical: 3, flexDirection:'row', borderColor: '#7BB0FF', borderWidth: 2, borderRadius: 5, marginLeft:210}}>
              <AntDesign name='pluscircleo' size={25} color='#7BB0FF' ></AntDesign>
               <Text style={{color: '#7BB0FF', fontSize: 20, marginHorizontal: 5}}>추가하기</Text>
             </TouchableOpacity>
           </View>
           
           <View style={{ paddingBottom: 7}}>
             <Text style={{ color: '#AEAEAE', fontSize: 22 }}>설명</Text>
             <View style={{backgroundColor: 'rgba(113,113,113,0.17)', borderRadius:5, borderColor: '#AEAEAE', borderWidth: 2, marginVertical: 5, height: 120 }}>
               <TextInput style={{padding: 5, color: 'white', fontWeight: '800'}}></TextInput>
             </View>
           </View>
           <View style={{alignItems:'center'}}>
             <TouchableOpacity style={{marginTop: 18, alignItems: 'center', borderColor: 'white', borderWidth: 3, borderRadius:5, width: '40%', paddingVertical: 4 }}
                onPress={completeEditGroup}>
               <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white', textAlign:'center',
                paddingVertical: 2}}>수정 완료</Text>
             </TouchableOpacity>
            </View>
         </View>
         
       </View>
       {modalState ? <FindGroupMemberModal modalToggle={modalToggle}/> : <></>}
 
   </View>
 </SafeAreaView>
  
  )
  }

  export default EditGroup;