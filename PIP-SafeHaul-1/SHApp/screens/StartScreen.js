import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

function StartScreen({navigation}) {
  const pressHandlerRed = () => {
    navigation.navigate('InfraredScreen');
  };      
  const pressHandlerBlue = () => {
    navigation.navigate('DrivingModeScreen');
  };
  const pressHandlerWakeUp = () => {
    navigation.navigate('WakeUpScreen')
  }

  return (
    <View style={styles.container} >
    <View style={styles.blueArea}>  
      <TouchableOpacity
          onPress={pressHandlerBlue}
          style={styles.drivingButton}>
          <Text>Driving mode</Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={pressHandlerWakeUp}
          style={styles.wakeButton}>
          <Text>Set Wake Up Time</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.redArea}>
      <TouchableOpacity
          onPress={pressHandlerRed}
          style={styles.InfraButton}>
          <Text>Infrared Therapy</Text>
      </TouchableOpacity>
    </View>
    </View>
  );    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    drivingButton: {
        width: 300,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 33,
        backgroundColor: 'rgb(0, 200, 255)',
        marginHorizontal: 25,
        marginTop: 25
    },
    wakeButton: {
      width: 300,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 33,
      backgroundColor: '#7100F5',
      margin: 25,
    },
    InfraButton: {
        width: 300,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 33,
        backgroundColor: '#ff0000',
        margin: 25
        
    },
    blueArea: {
      backgroundColor: 'rgba(0, 213, 255, 0.4)',
      borderTopLeftRadius: 55,
      borderTopRightRadius: 55,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    redArea: {
      marginTop: 10,
      backgroundColor: 'rgba(255, 0, 0, 0.4)',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 55,
      borderBottomRightRadius: 55,
    }

  });

export default StartScreen;