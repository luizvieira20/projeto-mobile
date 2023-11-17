import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Octicons';
import { auth_mod }  from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [texto, setTexto] = useState('');

  const autenticar = () => {
    signInWithEmailAndPassword(auth_mod, email, senha)
      .then((userLogged) => {
        console.log("Usuário autenticado: "+ JSON.stringify(userLogged));
        setTexto("");
        setSenha("");
        setEmail("");
        props.navigation.navigate('DrawerNavigator');
      })
      .catch((error) => {
        if(error.code === "auth/invalid-login-credentials" || error.code === "auth/invalid-email") setTexto("Erro. E-mail e/ou senha inválidos");
        else if(error.code === "auth/too-many-requests") setTexto("Erro. Várias tentativas falhas. Tente novamente mais tarde");
        console.log("Erro: "+error);
      })
  }

  const validaDados = () => {
    if (email.length === 0 || senha.length === 0) setTexto('Erro. Por favor, preencha todos os campos.');
    else autenticar();
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
        <TextInput style={styles.TextInput} value={senha} onChangeText={setSenha} secureTextEntry={true} placeholder="******"/>
        <Text style={styles.TextRed}>{texto}</Text>

        <TouchableOpacity style={styles.Button} onPress={validaDados}>
          <Text style={styles.TextButton}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style = {{marginTop: -10}}>
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
      marginTop: 14
    },
    TextInput: {
      width: 550,
      height: 40,
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
      fontFamily: 'AveriaLibre-Regular',
      marginTop: 8
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
      marginTop: 17
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