import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';


function DrivingModeScreen({navigation}) {
    const pressHandlerSchedule = () => {
        navigation.navigate('ScheduleScreen');
      };   

    return (
        <View style = {styles.container}> 
            <View>
                <TouchableOpacity
                    onPress={pressHandlerSchedule}
                    style={styles.roundButton1}>
                    <Text>Schedule</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    roundButton1: {
        width: 300,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 60,
        backgroundColor: 'gray',
        margin: 20,
    },
});

export default DrivingModeScreen;