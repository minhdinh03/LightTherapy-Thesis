import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import imagePath from '../routes/ImagePath';
import CountDown from 'react-native-countdown-component';


function InfraredScreen() {
    let infraredMode = [{id: 0, name: 'Test', time: 5},
                        {id: 1, name: 'Quick mode (10mins)', time: 10*60},
                        {id: 2, name: 'Regular mode (15mins)', time: 15*60},
                        {id: 3, name: 'Deep mode (20mins)', time: 20*60}]

    const DropDown = ({
        data = [],
        value = {},
        onSelect = () => {}
    }) => {
        const [showOption, setShowOption]= useState(false)
        const onSelectedItem = (val) => {
            setShowOption(false)
            onSelect(val)
        }

        return (
            <View>
                <TouchableOpacity 
                    style = {styles.dropDownStyle}
                    activeOpacity={0.8}
                    onPress= {() => setShowOption(!showOption)}>
                    <Text>{!!value? value?.name: `Choose an option`}</Text>
                    <Image
                        style={{width: 20, height: 20,transform: [{rotate: showOption? '180deg': '0deg'}]}} 
                        source={imagePath.icDropDown}/>
                </TouchableOpacity>
                {showOption && (<View style={{
                    borderRadius: 6,
                    padding:8,
                    backgroundColor: 'rgba(0,0,0,0.1)',
                }}>
                    {data.map((val,i) => {
                        return (
                            <TouchableOpacity 
                                key = {String(i)}
                                onPress = {() => onSelectedItem(val)}
                                style={{
                                   ...styles.selectedItemStyle,
                                   backgroundColor: value.id == val.id ? 'white': 'rgba(0,0,0,0.1)',
                                }}
                            >
                                <Text>{val.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>)}
            </View>
        )
    };

    const StartCountDown = ({mode={}}) => {
        const [lightON, setLightON] = useState(false)
        const onClickButton = () => {
            {!mode? setLightON(false): ((!!mode&&!lightON)? setLightON(true): setLightON(false))}
        }
        console.log(!!mode)
        console.log(lightON)
        return (
            <View>
                {(!lightON || !mode)&&
                <View> 
                    <CountDown
                        until={0}
                        size={30}
                        digitStyle={{backgroundColor: '#FFF', marginTop: 20}}
                        digitTxtStyle={{color: '#1CC625'}}
                        timeToShow={['M', 'S']}
                        timeLabels={{m: 'Mins', s: 'Secs'}}
                        />    
                </View>}
                {(lightON && !!mode)? (
                <View> 
                    <CountDown
                        until={mode.time}
                        size={30}
                        onFinish = {() => alert('Therapy finished! \n Warning: Use 2-3 times per week')}
                        digitStyle={{backgroundColor: '#FFF', marginTop: 20}}
                        digitTxtStyle={{color: '#1CC625'}}
                        timeToShow={['M', 'S']}
                        timeLabels={{m: 'Mins', s: 'Secs'}}
                        />    
                </View>):null}
                <TouchableOpacity
                    style={styles.roundButton1}
                    onPress = {onClickButton}>
                    <Text>{(!mode? 'Select your therapy': ((!!mode && !lightON)? 'Start therapy': 'Stop therapy' ))}</Text>
                </TouchableOpacity>
            </View>
        )
    };

    const [selectedItem, setSelectedItem] = useState(false)

    const onSelect = (item) => {
        setSelectedItem(item)
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.redArea}>
            <StartCountDown
                mode = {selectedItem}/>
             </View>
            <DropDown
                value={selectedItem}
                data={infraredMode}
                onSelect = {onSelect}
            />
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: '20%',
    },
    roundButton1: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'red',
        marginBottom: 20,
        marginHorizontal: 20
    },
    dropDownStyle: {
        backgroundColor : 'rgba(0,0,0,0.2)',
        padding: 8,
        borderRadius: 15,
        minHeight: 42,
        width: 240,
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
        marginTop: 10,
    },
    time: {
        fontSize: 35,
    },
    selectedItemStyle: {
        paddingVertical: 8,
        borderRadius: 4,
        paddingHorizontal:6,
        marginBottom: 4,
    },
    redArea: {
        marginTop: 10,
        backgroundColor: 'rgba(255, 0, 0, 0.3)',
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      }
})
export default InfraredScreen;