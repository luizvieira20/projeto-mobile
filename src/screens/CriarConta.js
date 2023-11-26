import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import auth_mod from '../firebase/config';

const CriarConta = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [texto, setTexto] = useState('');

  const validaEmail_e_Senha = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (email.length === 0 || senha.length === 0 || confSenha.length === 0) setTexto('Erro. Por favor, preencha todos os campos.');
    else if (emailRegex.test(email) === false) setTexto('Erro. Digite um e-mail válido');
    else if (senha.length < 6) setTexto('Erro. A senha deve conter no mínimo 6 digitos');
    else if (senha !== confSenha) setTexto('Erro. O campo repetir senha difere da senha');
    else cadastrarUsuario();
  } 

  const auth = getAuth();
  const cadastrarUsuario = () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Usuário criado com sucesso: "+ userCredential);
        setTexto("Usuário criado com sucesso!");
        setConfSenha("");
        setSenha("");
        setEmail("");
      })
      .catch((error) => {
        if(error.code === "auth/email-already-in-use") setTexto("Erro. E-mail já cadastrado");
        console.log("Erro ao criar o usuário: "+ error);
      })
  }

  return (
    <View style={styles.View}>
      <View>
        <Text style={styles.Text}>E-mail</Text>
        <TextInput style={styles.TextInput} value={email} onChangeText={setEmail} keyboardType="email-address" placeholder="exemplo@gmail.com"/>
        <Text style={styles.Text}>Senha</Text>
        <TextInput style={styles.TextInput} value={senha} onChangeText={setSenha} secureTextEntry={true} placeholder="******"/>
        <Text style={styles.Text}>Repetir senha</Text>
        <TextInput style={styles.TextInput} value={confSenha} onChangeText={setConfSenha} secureTextEntry={true}/>
        <Text style={styles.TextRed}>{texto}</Text>

        <TouchableOpacity style={styles.Button}>
          <Text style={styles.TextButton} onPress={() => validaEmail_e_Senha()}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    View: {
      backgroundColor: '#372775',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    TextRed: {
      margin: 0,
      color: '#F57A75',
      fontSize: 13,
      textAlign: 'left',
      fontFamily: 'AveriaLibre-Regular'
    },
    Button: {
      backgroundColor: '#37BD6D',
      width: 550,
      height: 35,
      borderRadius: 1,
      justifyContent: 'center',
      marginTop: 20
    },
    TextInput: {
      width: 550,
      height: 35,
      fontFamily: 'AveriaLibre-Regular'
    },
    Text: {
      color: 'white',
      fontSize: 16,
      textAlign: 'left',
      fontFamily: 'AveriaLibre-Regular',
      marginTop: 10
    },
    TextButton: {
      textAlign: 'center', 
      color: 'white', 
      fontSize: 17,
      fontFamily: 'AveriaLibre-Regular'
    }
});

export default CriarConta;