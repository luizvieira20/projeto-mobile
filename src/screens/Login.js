import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Octicons';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const goDrawerNavigator = () => {
    props.navigation.navigate('DrawerNavigator');
  }

  const goRecuperarSenha = () => {
    props.navigation.navigate('RecuperarSenha');
  }

  const goCriarConta = () => {
    props.navigation.navigate('CriarConta');
  }

  return (
    <View style={styles.View}>
      <View style={{marginTop: 20}}>
        <Text style={styles.TextTitulo}>Satisfying.you <Icon name='smiley' size={50}/></Text>
      </View>

      <View>
        <Text style={styles.Text}>E-mail</Text>
        <TextInput style={styles.TextInput} value={email} onChangeText={setEmail} keyboardType="email-address" placeholder="exemplo@gmail.com"/>
        <Text style={styles.Text}>Senha</Text>
        <TextInput style={styles.TextInput} value={senha} onChangeText={setSenha} placeholder="*********"/>

        <TouchableOpacity style={styles.Button} onPress={goDrawerNavigator}>
          <Text style={styles.TextButton}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.CriarButton} onPress={goCriarConta}>
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
      alignItems: 'center'
    },
    Button: {
      backgroundColor: '#37BD6D',
      width: 550,
      height: 35,
      borderRadius: 1,
      justifyContent: 'center'
    },
    TextInput: {
      width: 550,
      height: 40,
      marginBottom: 10,
      fontFamily: 'AveriaLibre-Regular'
    },
    TextTitulo: {
      width: 400,
      height: 60,
      fontSize: 35,
      color: 'white',
      textAlign: 'center',
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
    },
    CriarButton: {
      backgroundColor: '#419ED7',
      width: 550,
      height: 25,
      borderRadius: 1,
      justifyContent: 'center',
      marginTop: 35
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