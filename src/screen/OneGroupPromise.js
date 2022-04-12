import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import ChatOne from '@component/ChatOne.js';

const groupName = 'YBM 7월 교육 동기'

const ingData = { timeState: '내일 약속이 있어요!', promiseTime: '17분전', promiseName: '강남 YBM 모여라', recentChat: '그래서 고기 먹는거??'}

const edData = [
    { timeState: '완료된 약속입니다.', promiseTime: '어제', promiseName: '늦으면 벌금 5만원^^', recentChat: '사진은 핸드폰으로 찍으면 돼'},
    { timeState: '완료된 약속입니다.', promiseTime: '11월 24일', promiseName: '드디어 1월 회식', recentChat: '일 끝나면 바로 가는 걸로!'}
]

const OneGroupPromise = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
            <View style={{padding: '5%'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                        뒤로 가기
                    </Text>
                </TouchableOpacity>

                <View style={{ padding: '3%'}}>
                    <View style={{justifyContent: 'center', flexDirection:'row', paddingHorizontal: 10, paddingVertical: 20 }}>
                        <Text>
                            <Text style={{color: '#7BB0FF', fontSize: 24, fontWeight:'bold'}}>{groupName}</Text>
                            <Text style={{color: 'white', fontSize: 24, fontWeight:'bold'}}>&nbsp;의 약속들</Text>
                        </Text>
                    </View>
                

                    {ingData 
                    ? <View>
                        <Text>
                            <Text style={{color: '#7BB0FF', fontSize: 13, fontWeight: 'bold'}}>진행 중인</Text>
                            <Text style={{color: '#CCCCCC', fontSize: 13, fontWeight: 'bold'}}> 약속</Text>
                        </Text>
                        <ChatOne data={ingData}/>
                      </View>
                    : <Text>
                        <Text style={{color: '#7BB0FF', fontSize: 13, fontWeight: 'bold'}}>진행 중인</Text>
                        <Text style={{color: '#CCCCCC', fontSize: 13, fontWeight: 'bold'}}> 약속이 없습니다.</Text>
                      </Text>
                    }
                    

                    <View style={{ marginTop: 20 }}>
                        <Text>
                            <Text style={{color: '#EC8F8F', fontSize: 13, fontWeight: 'bold'}}>지난</Text>
                            <Text style={{color: '#CCCCCC', fontSize: 13, fontWeight: 'bold'}}> 약속들</Text>
                        </Text>
                    </View>
                    {edData
                        ? edData.map((data) => (
                        <ChatOne key={data.promiseTime} data={data}/>
                        ))
                        : <></>
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export default OneGroupPromise;