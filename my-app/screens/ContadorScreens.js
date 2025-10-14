
//1. imports: zona de la importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';
import React, {useState} from 'react';

//2. main : zona de componentes 
export default function App() {


  const[contador ,setContador]=useState(0);

  return (

    <View style={styles.container}>

      <Text style={styles.texto} >Contador </Text>
      <Text style={styles.texto2} >{contador} </Text>


    <View style={styles.contenedorBotones}>
    <Button color="black" title='Incrementar' onPress={()=>setContador(contador+1)}> </Button>
    <Button color="green" title='Quitar' onPress={()=>setContador(contador-1)}> </Button>
    <Button color="blue" title='reiniciar' onPress={()=>setContador(contador-contador)}> </Button>
    </View>



      <StatusBar style="auto" />

    </View>


  );
}

//3. estilos: zona de los estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f994ff',
    alignItems:'center',
    justifyContent:'center',
  },
  texto:{
    fontFamily:"Time new Roman", 
    fontSize:30,
    color:'#f72206ff',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
  }, 
  texto2:{
     fontFamily:"Courier", 
    fontSize:40,
    color:'#16180dff',
    fontWeight:'900',
    textDecorationLine:'underline',

  },
  contenedorBotones:{
    marginTop:20,
    flexDirection:"row",
    gap:15,
  },

});