
import { Text, StyleSheet, View, ScrollView, Button } from 'react-native'
import React, {useState, useRef} from 'react'

export default function ScrollScreens (){
    const scrollRef = useRef();

    const irAlFinal = () => {
      scrollRef.current.scrollToEnd({animated: true});
    } 

    
    return (
      <ScrollView
      ref={scrollRef}
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={true}
      
      
      >
        <Text style={styles.Titulo}> practica: ScrollView </Text>
         <Text style={styles.Titulo}> ejemplo de desplazamineto vertical </Text>

         <View>
          <Button 
          color='#da29daff'
          title='Ir al final'
          onPress={irAlFinal}
          />

         </View>
        
        <View style={styles.elemento}> 
          <Text style={styles.text}> Elemnto 1 </Text>       
        </View>
         
         <View style={styles.elemento}> 
          <Text style={styles.text}> Elemnto 2 </Text>       
        </View>
        
        <View style={styles.elemento}> 
          <Text style={styles.text}> Elemnto 3</Text>       
        </View>

        <View style={styles.elemento}> 
          <Text style={styles.text}> Elemnto 4 </Text>       
        </View>

        <View style={styles.elemento}> 
          <Text style={styles.text}> Elemnto 5 </Text>       
        </View>

        <Text style={styles.Titulo2}> Ejemplo desplazamineto horizontal </Text>

        <ScrollView
        horizontal
        nestedScrollEnabled={true}
        style={styles.scrollhorizontal}
        showsHorizontalScrollIndicator={true}
        >
          
        <View style={styles.elemento2}> 
          <Text style={styles.text}> Cuadro 1 </Text>       
        </View>

        <View style={styles.elemento2}> 
          <Text style={styles.text}> Cuadro 2 </Text>       
        </View>

        <View style={styles.elemento2}> 
          <Text style={styles.text}> Cuadro 3 </Text>       
        </View>

        <View style={styles.elemento2}> 
          <Text style={styles.text}> Cuadro 4 </Text>       
        </View>

        <View style={styles.elemento2}> 
          <Text style={styles.text}> Cuadro 5 </Text>       
        </View>

        <View style={styles.elemento2}> 
          <Text style={styles.text}> Cuadro 6 </Text>       
        </View>

        <View style={styles.elemento2}> 
          <Text style={styles.text}> Cuadro 7 </Text>       
        </View>

        <View style={styles.elemento2}> 
          <Text style={styles.text}> Cuadro 8 </Text>       
        </View>

        <View style={styles.elemento2}> 
          <Text style={styles.text}> Cuadro 1 </Text>       
        </View>

        <View style={styles.elemento2}> 
          <Text style={styles.text}> Cuadro 9 </Text>       
        </View>

        <View style={styles.elemento2}> 
          <Text style={styles.text}> Cuadro 10 </Text>       
        </View>

        <View style={styles.elemento2}> 
          <Text style={styles.text}> Cuadro 11 </Text>       
        </View>

        <View style={styles.elemento2}> 
          <Text style={styles.text}> Cuadro 12 </Text>       
        </View>


        </ScrollView>


      </ScrollView>
    )
  }
   

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#eb8888ff',

  },
  Titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000ff',
    textAlign: 'center',
  },
  Titulo2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  elemento: {
    width: '100%',
    height: 100,
    backgroundColor: '#a0eef8ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  elemento2: {
    width: '120',
    height: 120,
    backgroundColor: '#deb475ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 10,

  },
  text: {
    fontSize: 10,
    fontFamily: 'courier',
    color: '#000000ff',
    fontWeight: '900',
    textDecorationLine: 'underline',  
  },  

  scrollhorizontal: {
    marginVertical: '10',
    width: '100%',
  }


})

    


