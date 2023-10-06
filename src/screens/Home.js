import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Octicons';
import CardPesquisa from '../components/CardPesquisa.js';

const Home = (props) => {

  const [txtPesquisa, setPesquisa] = useState('')

  const goNovaPesquisa = () => {
    props.navigation.navigate('NovaPesquisa');
  }

  return (
    <View style={styles.View}>


      <View style={styles.SearchView}>
        <Icon style={{marginLeft: 10}} name='search' color='grey' size={22}/>
        <TextInput style={styles.TextInput} value={txtPesquisa} onChangeText={setPesquisa} 
        placeholder="Insira o termo de busca..."/>
      </View>

      <View style={styles.ListaCard}>
        <CardPesquisa
          nome="Carnaval 2024"
          data="16/02/2024"
          imagem={require('../../assets/images/vector.png')}
        />
      </View>

      <View style={{marginTop: 10}}>
      <TouchableOpacity style={styles.Button} onPress={goNovaPesquisa}>
        <Text style={styles.TextButton} >NOVA PESQUISA</Text>
      </TouchableOpacity >
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ListaCard: {
    height: 160,
    width: 160
  },
  SearchView: {
    margin: 20, 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'white'
  },
  TextInput: {
    width: 650,
    height: 25,
    flex: 1,
    fontFamily: 'AveriaLibre-Regular'
  },
  View: {
    backgroundColor: '#372775',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: 'AveriaLibre-Regular'
  },
  Button: {
    backgroundColor: '#37BD6D',
    width: 700,
    height: 35,
    borderRadius: 1,
    marginTop: 10,
    justifyContent: 'center'
  },
  TextInput: {
    width: 660,
    height: 38,
    backgroundColor: 'white'
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
export default Home;