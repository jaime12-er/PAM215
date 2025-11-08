import React, { useEffect, useState, useRef } from 'react';
import { 
    Text, 
    StyleSheet, 
    View, 
    Button, 
    Switch, 
    TextInput, 
    Alert, 
    Platform, 
    ImageBackground, 
    Animated, 
    Easing 
} from 'react-native';

export default function BottompracticasScreens() {
    const [cargando, setCargando] = useState(true);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);

    const desvanecido = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const timer = setTimeout(() => {
            Animated.timing(desvanecido, {
                toValue: 0,
                duration: 800,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start(() => setCargando(false));
        }, 2000);
        return () => clearTimeout(timer);
    }, [desvanecido]);

    const validarEmail = (mail) => {
        const trimmed = (mail || '').trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(trimmed);
    };

    const mostrarAlerta = () => {
        const mostrar = (titulo, mensaje) => {
            if (Platform.OS === 'web') {
                alert(`${titulo}\n\n${mensaje}`);
            } else {
                Alert.alert(titulo, mensaje, [{ text: 'OK' }]);
            }
        };

        const faltantes = [];
        if ((nombre || '').trim() === '') faltantes.push('Nombre completo');
        if ((email || '').trim() === '') faltantes.push('Correo electrónico');

        if (faltantes.length > 0) {
            mostrar('Campos incompletos', `Por favor llena:\n- ${faltantes.join('\n- ')}`);
            return;
        }

        if (!validarEmail(email)) {
            mostrar('Correo inválido', 'Ingresa un correo válido (ej: usuario@dominio.com)');
            return;
        }

        if (!aceptaTerminos) {
            mostrar('Términos y condiciones', 'Debes aceptar los términos para registrarte.');
            return;
        }

        mostrar('Registro exitoso', `Nombre: ${nombre.trim()}\nEmail: ${email.trim()}`);

        // Limpiar campos
        setNombre('');
        setEmail('');
        setAceptaTerminos(false);
    };

    if (cargando) {
        return (
            <Animated.View style={[styles.splashContainer, { opacity: desvanecido }]}>
                <ImageBackground
                    source={require('../assets/japon.webp')}
                    resizeMode='contain'
                    style={styles.splashImage}
                >
                    <Text style={styles.splashText}>Cargando...</Text>
                </ImageBackground>
            </Animated.View>
        );
    }

    return (
        <ImageBackground
            source={require('../assets/cuidad.jpg')}
            resizeMode='cover'
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.titulo}>Registro de Usuario</Text>
                
                <TextInput
                    style={styles.input}
                    placeholder="Nombre completo"
                    value={nombre}
                    onChangeText={setNombre}
                    placeholderTextColor="#666"
                />
             
                <TextInput
                    style={styles.input}
                    placeholder="Correo electrónico"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    placeholderTextColor="#666"
                    autoCapitalize="none"
                />
                  
                <View style={styles.switchContainer}>
                    <Switch
                        value={aceptaTerminos}
                        onValueChange={setAceptaTerminos}
                    />
                    <Text style={styles.switchText}>Acepto términos y condiciones</Text>
                </View>

                <Button
                    title="Registrarse"
                    onPress={mostrarAlerta}
                    color="#4c51dd"
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    switchText: {
        color: 'white',
        marginLeft: 10,
    },
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    splashImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    splashText: {
        position: 'absolute',
        margin: 60,
        fontSize: 20,
        color: 'black',
    },
});
