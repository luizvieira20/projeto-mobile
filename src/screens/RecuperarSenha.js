import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
const auth = getAuth();

const RecuperarSenha = () => {
    const [texto, setTexto] = useState('');
    const [email, setEmail] = useState('');

    const recoveryPassword = () => {

        sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log("E-mail enviado com sucesso");
          setEmail("");
          setTexto("E-mail enviado com sucesso");
          props.navigation.navigate('Login');
        })
        .catch((error) => {
          console.log("Erro: "+error);
          if(error.code === "auth/missing-email" || error.code === "auth/invalid-email") setTexto("Digite um e-mail válido");
  
        });

        /*
        sendPasswordResetEmail(auth_mod, email)
            .then(() => {
                console.log("E-mail enviado com sucesso");
                setEmail("");
                setTexto("E-mail enviado com sucesso");
            })
            .catch((error) => {
                console.log("Erro: "+error);
                if(error.code === "auth/missing-email" || error.code === "auth/invalid-email") setTexto("Digite um e-mail válido");
            })*/
    }

    return (
        <View style={styles.View}>
            <View>
                <Text style={styles.Text}>E-mail</Text>
                <TextInput style={styles.TextInput} value={email} onChangeText={setEmail} keyboardType="email-address" placeholder="exemplo@gmail.com"/>
                <Text style={styles.TextRed}>{texto}</Text>
            </View>

            <TouchableOpacity style={styles.Button} onPress={recoveryPassword}><Text style={styles.TextButton}>RECUPERAR</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    TextInput: {
        width: 550,
        height: 40,
        marginBottom: 5,
        fontFamily: 'AveriaLibre-Regular'
    },
    TextRed: {
        margin: 0,
        color: '#F57A75',
        fontSize: 13,
        textAlign: 'left',
        fontFamily: 'AveriaLibre-Regular'
    },
    View: {
        backgroundColor: '#372775',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'AveriaLibre-Regular'
    },
    Button: {
        backgroundColor: '#37BD6D',
        width: 550,
        height: 30,
        borderRadius: 1,
        justifyContent: 'center',
        marginTop: 50
    },
    TextButton: {
        textAlign: 'center', 
        color: 'white', 
        fontSize: 17,
        fontFamily: 'AveriaLibre-Regular'
    }
});

export default RecuperarSenha;