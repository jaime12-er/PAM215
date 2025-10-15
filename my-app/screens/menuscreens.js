import { Text, StyleSheet, View,  Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreens from './ContadorScreens';
import Botonesscreens from './Botonesscreens'
import ScrollScreens from './ScrollScreens';
import ActivityScreens from './ActivityScreens';
import FlatScreens from './FlatScreens';
import ModaScreens from './ModaScreens';
import BottomScreens from './BottomScreens';
import TextInputScreens from './TextInputScreens';
import ImagebackScreens from './ImagebackScreens';

 



export default function MenuScreen() {

    const[screen,setScreen]=useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreens/>;
        case 'botones':
            return <Botonesscreens/>;
        case 'textinput':
            return <TextInputScreens/>;
        case 'imagenback':
            return <ImagebackScreens/>;
        case 'scroll':
            return <ScrollScreens/>;
        case 'activity':
            return <ActivityScreens/>;
         case 'flat':
            return <FlatScreens/>;
        case 'moda':
            return <ModaScreens/>;
        case 'bottom':
            return <BottomScreens/>;

        case 'menu':
            default:
                return(
                    <View>
                    <Text>Menu de practicas</Text>
                    <Button onPress={()=>setScreen('contador')} title='pract:contador'></Button>
                    <Button onPress={()=>setScreen('botones')} title='pract:botones'></Button>
                    <Button onPress={()=>setScreen('text')} title='pract:text'></Button>
                    <Button onPress={()=>setScreen('image')} title='pract:image'></Button>
                    <Button onPress={()=>setScreen('scroll')} title='pract:scroll'></Button>
                    <Button onPress={()=>setScreen('activity')} title='pract:activity'></Button>
                    <Button onPress={()=>setScreen('moda')} title='pract:moda'></Button>
                    <Button onPress={()=>setScreen('bottom')} title='pract:bottom'></Button>
                    
                    </View>  
                )      
    }
   

}

const styles = StyleSheet.create({})