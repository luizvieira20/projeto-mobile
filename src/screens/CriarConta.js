import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

const CriarConta = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');

  return (
    <View style={styles.View}>
      <View>
        <Text style={styles.Text}>E-mail</Text>
        <TextInput style={styles.TextInput} value={email} onChangeText={setEmail} keyboardType="email-address" placeholder="exemplo@gmail.com"/>
        <Text style={styles.Text}>Senha</Text>
        <TextInput style={styles.TextInput} value={senha} onChangeText={setSenha} placeholder="*********"/>
        <Text style={styles.Text}>Repetir senha</Text>
        <TextInput style={styles.TextInput} value={confSenha} onChangeText={setConfSenha} placeholder="*********"/>

        <TouchableOpacity style={styles.Button}>
          <Text style={styles.TextButton}>Cadastrar</Text>
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
      marginBottom: 10,
      fontFamily: 'AveriaLibre-Regular'
    },
    Text: {
      color: 'white',
      fontSize: 16,
      textAlign: 'left',
      fontFamily: 'AveriaLibre-Regular'
    },
    TextButton: {
      textAlign: 'center', 
      color: 'white', 
      fontSize: 17,
      fontFamily: 'AveriaLibre-Regular'
    }
});

export default CriarConta;