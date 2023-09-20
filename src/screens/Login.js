import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Octicons';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const goMenu = () => {
    props.navigation.navigate('Menu');
  }

  const goRecuperarSenha = () => {
    props.navigation.navigate('RecuperarSenha');
  }

  return (
    <View style={styles.View}>
      <View style={{marginTop: 20}}>
        <Text style={styles.TextTitulo}>Satisfying.you <Icon name='smiley' size={50}/></Text>
      </View>

      <View>
        <Text style={styles.Text}>E-mail</Text>
        <TextInput style={styles.TextInput} value={email} onChangeText={setEmail} label="exemplo@gmail.com"/>
        <Text style={styles.Text}>Senha</Text>
        <TextInput style={styles.TextInput} value={senha} onChangeText={setSenha} label="*********"/>

        <TouchableOpacity style={styles.Button} onPress={goMenu}>
          <Text style={styles.TextButton}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.CriarButton} onPress={goMenu}>
          <Text style={styles.TextButton}>Criar minha conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.RecuperarButton} onPress={goRecuperarSenha}>
          <Text style={styles.TextButton}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    View: {
      backgroundColor: '#372775',
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      fontFamily: 'R.font.averia libre'
    },
    Button: {
      backgroundColor: '#37BD6D',
      width: 550,
      height: 30,
      borderRadius: 1,
      justifyContent: 'center'
    },
    TextInput: {
      width: 550,
      height: 40,
      marginBottom: 10
    },
    TextTitulo: {
      width: 400,
      height: 70,
      fontSize: 45,
      color: 'white'
    },
    Text: {
      color: 'white',
      fontSize: 16,
      textAlign: 'left'
    },
    TextButton: {
      textAlign: 'center', 
      color: 'white', 
      fontSize: 17
    },
    CriarButton: {
      backgroundColor: '#419ED7',
      width: 550,
      height: 25,
      borderRadius: 1,
      justifyContent: 'center',
      marginTop: 22
    },
    RecuperarButton: {
      backgroundColor: '#B0CCDE',
      width: 550,
      height: 25,
      borderRadius: 1,
      justifyContent: 'center',
      marginTop: 10
    }
});

export default Login;