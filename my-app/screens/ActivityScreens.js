
import { Text, StyleSheet, View, Button, ActivityIndicator} from 'react-native'
import React, {useState} from 'react'

export default function ActivityScreens () {
    const [loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true);
        setTimeout(()=> setLoading(false), 3000);
    };
    if(loading){
        return(
       <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator
            size="large"
            color="#f6c71dff"
            animating={true}
            hidesWhenStopped={true}


          />
          <Text style={styles.text}>Cargando...</Text>
        </View>
       </View>
        );
    }
    return (
      <View style={styles.container}> 
        <Text style={styles.title}> practica: ActivityIndicator </Text>
        <Button 
        title="Mostrar indicador de carga"
        onPress={startLoading}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#01070bff',
    },
    text:{
        color:'#491077ff',
    },
    titulo:{
        fontSize:24,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20,
    },

})
