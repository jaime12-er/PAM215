
import { StyleSheet, Text, View, ScrollView, ImageBackground, Easing  } from 'react-native';
import React, { use } from 'react';
import { useEffect, useState, useRef } from 'react';




export default function App() {


  const [cargando,  setCargando] = useState(true);

  useEffect(() => {
   const timeout = setTimeout(() => {
    Animated.timing(opacity, {
      toValue,
      duration,
      easing,
      useNativeDriver: true,
    }).start(() => setCargando(false)); 
      setCargando(false);
    }, 2000); 
    return () => clearTimeout(timeout); 
    
  }, []);

  return (
    <View style={styles.container}>

      <ImageBackground 
      source={require('./assets/cuidad.png')} 
      resizeMode="cover"
      style={styles.background}
      >
        <Text style={styles.text}>Mis Deberes.</Text>
        <Text style={styles.text}>07/11/2025</Text>
      </ImageBackground>
      <ScrollView ref={scroll}> 
        |

          <Text></Text>
        </ScrollView>
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
  
});
