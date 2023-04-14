import  {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DrivingModeScreen  from '../screens/DrivingModeScreen';
import InfraredScreen  from '../screens/InfraredScreen';
import StartScreen from '../screens/StartScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import WakeUpScreen from '../screens/WakeUpScreen';
import ConnectBLE from '../screens/ConnectBLE';
const screens = {
    bleScreen: {
        screen: ConnectBLE,
        navigationOptions: {
            title: 'Safe Haul - Connect Device'
        }
    },
    Start: {
        screen: StartScreen,
        navigationOptions: {
            title: 'Safe Haul'
        }
    },
    InfraredScreen: {
        screen: InfraredScreen,
        navigationOptions: {
            title: 'Infrared Therapy'
        }

    },
    DrivingModeScreen: {
        screen: DrivingModeScreen,
        navigationOptions :{
            title: 'Driving Mode'
        }
    },
    ScheduleScreen: {
        screen: ScheduleScreen,
        navigationOptions:{
            title: 'Schedule'
        }
    },
    WakeUpScreen: {
        screen: WakeUpScreen,
        navigationOptions: {
            title: 'Set Wake Up Time'
        }
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);