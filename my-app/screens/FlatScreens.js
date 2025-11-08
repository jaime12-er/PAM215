
import { Text, StyleSheet, View, FlatList, SectionList, ScrollView } from 'react-native'
import Reac, {} from 'react'

export default function FlatScreens (){


  const datos = [
    {id: '1', nombre: 'Manzana'},
    {id: '2', nombre: 'Plátano'},
    {id: '3', nombre: 'Naranja'},
    {id: '4', nombre: 'Uva'},
    {id: '5', nombre: 'Fresa'},
    {id: '6', nombre: 'Sandía'},
  ];
  const secciones = [

    {
    titulo: 'Frutas Cítricas',
    data: [
      {nombre: 'manzana'}, 
      {nombre: 'platano'}, 
      {nombre: 'naranja'},
      {nombre: 'uva'},
    ],
  },
    {
    titulo: 'verduras',
    data: [
      {nombre: 'mango'},
      {nombre: 'piña'},
      {nombre: 'papaya'},

      
    ]
    }
  ];

    return (
      <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text > proximo en presentar eq. Diego Espindola </Text>
      </View>
    )
  }


const styles = StyleSheet.create({})
