import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Profile({ navigation }) {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Pantalla de Perfil</Text>
        <Pressable style={[styles.button, styles.buttonSettings]} onPress={() => navigation.navigate('Settings')}>
            <Text style={styles.buttonText}>Configuración</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.buttonHome]} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Volver a Home</Text>
        </Pressable>
        </View>
    )    

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',  
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
    },
    button: {   
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop: 20,
        width: '80%',
        alignItems: 'center',
    },  
    buttonSettings: {
        backgroundColor: '#c68d38ff',
    },
    buttonHome: {
        backgroundColor: '#385ca3ff',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },

})
