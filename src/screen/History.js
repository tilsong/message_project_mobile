import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const history = () => { 
	return ( 
        <SafeAreaView style={styles.backgroundStyle}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ backgroundColor: 'black', }}>
                <View style={styles.history}> 
                    <Text style={{ color: 'white'}}>history</Text> 
                </View> 
            </ScrollView>
        </SafeAreaView>
    ) 
}
const styles = StyleSheet.create({
    history: { 
        alignItems: 'center', 
        justifyContent: 'center' 
      },
    backgroundStyle: {
        backgroundColor: 'black',
        flex:1
    },
})
export default history;