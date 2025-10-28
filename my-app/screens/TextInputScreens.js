
import { Text, StyleSheet, View, Button, TextInput, Alert} from 'react-native'
import React, {useState} from 'react';

export default function TextInputScreens (){

  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  

  const mostrarAlerta = () =>{
    if (nombre.trim() === '' || password.trim() === '' || telefono.trim() === '') {
      Alert.alert("Error favor de llenar todos los campos (movil)");
      Alert.alert("Error favor de llenar todos los campos (web)");
    
  } else{
  Alert.alert('datos ingresados correctamente\n' +
    `Nombre: ${nombre} \nPassword: ${password}\n
     Telefono: ${telefono}`
    );

     Alert.alert('datos ingresados correctamente\n' +
    `Nombre: ${nombre} \nPassword: ${password}\n
     Telefono: ${telefono}`
    );
  }
}
  

    return (
      <View style={styles.container}> 
        <Text style={styles.titulo}> TextInput & Alert</Text>
          <Text style={styles.etiqueta}> Nombre</Text>
      
        <TextInput 
          style={styles.input}
          placeholder='Escribe tu nombre aqui'
          value={nombre}
          onChangeText={setNombre}
         />
            <Text style={styles.etiqueta}> password</Text>
      
        <TextInput 
          style={styles.input}
          placeholder='Escribe tu password aqui'
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
         />
        <Text style={styles.etiqueta}> telefono</Text>
      
        <TextInput 
          style={styles.input}
          placeholder='Escribe tu telefono aqui'
          keyboardType='phone-pad'
          value={telefono}
          onChangeText={setTelefono}
         />

        <Button
        color='#4c51ddff'
        title='mostrar Alerta'
        onPress={mostrarAlerta}

        />
         



         
      </View>
    );
  }

const styles = StyleSheet.create({
   container :{
    flex: 1,
    backgroundColor: '#6d9739ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontFamily: 'Times New Roman',
    fontSize:25,
    backgroundColor: '#ef3a52ff',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 20,

  },
  etiqueta: {
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,

   
  },
  input: {
    borderWidth: 2,
    borderColor: '#e35555ff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#ffffffff',
  
  },
});
 