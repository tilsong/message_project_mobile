import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';


const KnowMember = ({data}) => {
    return (
        <View style={{  marginTop: 5, flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{ flexDirection:'row', width:'85%', justifyContent:'space-between'}}>
                <View style={{ flexDirection:'row'}}>
                    <Text>{data.name}</Text>
                    <Text style={{marginLeft:30}}>{data.id}</Text>
                </View>
                <Text style={{marginRight: 0}}>{data.currentGroup}</Text>
            </View>
            <TouchableOpacity style={{marginRight: 3}}>
                <AntDesign name='pluscircleo' size={20}  />
            </TouchableOpacity>        
        </View>
    );
}

const SearchMember = ({data}) => {
    return (
        <View style={{  marginTop: 5, flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{ flexDirection:'row', width:'85%', justifyContent:'space-between'}}>
                <View style={{ flexDirection:'row'}}>
                    <Text>{data.name}</Text>
                    <Text style={{marginLeft:30}}>{data.id}</Text>
                </View>
                <Text style={{marginRight: 0}}>{data.currentGroup}</Text>
            </View>
            <TouchableOpacity style={{marginRight: 3}}>
                <AntDesign name='pluscircleo' size={20}  />
            </TouchableOpacity>        
        </View>
    );
}

const FindGroupMemberModal = ({modalToggle}) => {
    const [searchInput, setSearchInput] = useState('');
    
    const onChangeSearchInput = (text) => {
        setSearchInput(text);
    }
    const nameMap1 = [
        {name: '김민정', id: 'kimmj098', currentGroup: 'YBM 영어 공부반'},
        {name: '김민정', id: 'kimmj098', currentGroup: 'YBM 영어 공부반'},
        {name: '김민정', id: 'kimmj098', currentGroup: 'YBM 영어 공부반'},
        {name: '김민정', id: 'kimmj098', currentGroup: 'YBM 영어 공부반'},
        {name: '김민정', id: 'kimmj098', currentGroup: 'YBM 영어 공부반'},
    ]
    const nameMap2 = [
        {name: '이민수', id: 'leems123'},
        {name: '이민수', id: 'leems123'},
        {name: '이민수', id: 'leems123'},
        {name: '이민수', id: 'leems123'},
        {name: '이민수', id: 'leems123'},
    ]

    // borderColor:'red', borderWidth:1
    return (
      <View style={styles.container}>
        <View style={styles.background} />
        <View style={styles.modal}>
          <Text style={styles.titleText}>그룹원 추가하기</Text>
          <View style={{flexDirection:'row', borderColor: 'gray', borderWidth:1, width: '90%', borderRadius:5, height: 40, padding: 0 }}>
            <TextInput onChangeText={onChangeSearchInput} style={{margin: 0, color:'black',width: '90%'}} />
            <TouchableOpacity>
                <FontAwesome5 name='search' size={25} style={{paddingTop: 6}}/>
            </TouchableOpacity>
            </View>
            
            <View style={{width: '90%', marginTop: 7}}>
                {searchInput == ''
                    ? <Text style={{fontSize:13, color: '#7BB0FF', fontWeight:'800'}}>아는 그룹원</Text>
                    : <Text style={{fontSize:13, color: '#7BB0FF', fontWeight:'800'}}>검색</Text>}
            </View>
            <View style={{marginTop: 4, width: '90%'}}>
                {searchInput == ''
                    ? nameMap1.map((data) => (
                        <KnowMember data={data} />
                      ))
                    : nameMap2.map((data) => (
                        <SearchMember data={data} />
                      ))
                }
            </View>

          <TouchableOpacity>
            <Text style={styles.doneText} onPress={modalToggle}>
              완료
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      height: '110%',
      width: '110%',
      maxWidth: '200%'
    },
    background: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    ddayInput: {
      backgroundColor: 'white',
      marginBottom: 20,
      width: '75%',
      height: 40,
      borderBottomWidth: 1,
      borderBottomColor: '#a5a5a5'
    },
    modal: {
      marginHorizontal: 20,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: '50%',
      backgroundColor: 'white',
    },
    doneText: {
      color: 'rgb(1,123,255)',
      fontSize: 15,
      margin: 10
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10
    }
  });

export default FindGroupMemberModal;