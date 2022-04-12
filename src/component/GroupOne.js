import React, { useState, useEffect } from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

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


const GroupOne = ({data, navigation}) => {
  const [memberNames, setMemberNames] = useState('');

  useEffect(() => {
      let namesTemp = "";
      data.groupMember.map((data2, index) => {
          if(index !=data.groupMember.length-1) {
              namesTemp += data2.memberName + ',';
          } else {
              namesTemp += data2.memberName;
          }
      });
      setMemberNames(namesTemp);
  },[groupK])

  return (
    <View style={styles.groupOne}>
        {/* top */}
        <View style={styles.groupOneTop}>
        <Text style={styles.groupOneTopText}>{data.groupName}</Text>
        <TouchableOpacity onPress={() => navigation.push('EditGroup')}>
            <MaterialIcon name='pencil' size={20} color='white'></MaterialIcon>
        </TouchableOpacity>
        </View>
        {/* members */}
        <View>
            <Text style={{color: 'white'}}>총 인원 {data.groupMember.length} </Text>
            <View style={styles.groupMember}>
                <TouchableOpacity>
                <Text style={{color: 'white'}}>{memberNames}</Text>
                </TouchableOpacity>
            </View>
        </View>
        {/* promise */}
            {data.hasOwnProperty("promise") 
            ? <View>
                    <Text style={{color: 'white', marginTop: '5%'}}>예정된 약속이 있습니다.</Text>
                    <View style={styles.groupPromiseY}>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between'}}
                          onPress={{}}>
                            <Text style={{color: 'white' }}>  늦으면 벌금 5만원^^</Text>
                            <MaterialIcon name='arrow-right-thick' size={20} color='white'></MaterialIcon>
                        </TouchableOpacity>
                    </View>
                </View>
            :  <View>
                    <Text style={{color: 'white', marginTop: '5%'}}>예정된 약속이 없습니다.</Text>
                    <View style={styles.groupPromiseN}>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{color: 'white' }}>  새로운 약속 생성하기</Text>
                            <MaterialIcon name='arrow-right-thick' size={20} color='white'></MaterialIcon>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        {/** previous promise */}
        <View style={styles.prePromise}>
        <TouchableOpacity  onPress={() => navigation.push('OneGroupPromise')}>
            <Text style={styles.prePromiseText}>최근 약속 보기</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
 });
 
export default GroupOne;