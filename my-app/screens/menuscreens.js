import { Text, StyleSheet, View,  Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreens from './ContadorScreens';
import Botonesscreens from './Botonesscreens'
import TextInputScreens from './TextInputScreens';
import ImagebackScreens from './ImagebackScreens';
import ScrollScreens from './ScrollScreens';
import ActivityScreens from './ActivityScreens';
import FlatScreens from './FlatScreens';
import ModaScreens from './ModaScreens';
import BottomScreens from './BottomScreens';
import BottomPracticaScreens from './BottompracticasScreens';
 



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
         case 'bottompractica':
            return <BottomPracticaScreens/>;
        case 'menu':
            default:
                return(
                    <View style={styles.container}>
                    <Text style={styles.titulo}>Menu de practicas</Text>
                    <Button onPress={()=>setScreen('contador')} title='pract:contador'></Button>
                    <Button onPress={()=>setScreen('botones')} title='pract:botones'></Button>
                    <Button onPress={()=>setScreen('textinput')} title='pract:text'></Button>
                    <Button onPress={()=>setScreen('imagenback')} title='pract:image'></Button>
                    <Button onPress={()=>setScreen('scroll')} title='pract:scroll'></Button>
                    <Button onPress={()=>setScreen('activity')} title='pract:activity'></Button>
                    <Button onPress={()=>setScreen('moda')} title='pract:moda'></Button>
                    <Button onPress={()=>setScreen('bottom')} title='pract:bottom'></Button>
                    <Button onPress={()=>setScreen('bottompractica')} title='pract:bottompractica'></Button>
                    </View>  
                )      
    }
   

}

const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: '#71b1e2ff', 
        justifyContent: 'center',   
        alignItems: 'center',       
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#ff7722ff',
        marginBottom: 20
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: 20
    },
    button: {
        width: '80%',             
        paddingVertical: 12,
        borderRadius: 8,
        marginVertical: 8,        
        elevation: 2               
    },
    buttonText: {
        color: '#0e0808ff',
        textAlign: 'center',
        fontWeight: '600'
    }
})

