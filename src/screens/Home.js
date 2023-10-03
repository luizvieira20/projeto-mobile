import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';

const Home = (props) => {

  const [txtPesquisa, setPesquisa] = useState('')

  const goNovaPesquisa = () => {
    props.navigation.navigate('NovaPesquisa');
  }
  const goAcoesPesquisa = () => {
    props.navigation.navigate('AcoesPesquisa');
  }

  return (
    <View style={styles.View}>
      
      
      <View style={styles.sectionStyle}>
        <Image 
          source={require('../../assets/images/lupa.png')} 
          style={styles.imageStyle} 
        /> 
        <TextInput style={styles.TextInput}
          placeholder="Insira o termo de busca..." 
          underlineColorAndroid="transparent" 
          value={txtPesquisa} onChangeText={setPesquisa}
        /> 
      </View>

      <View>
      <TouchableOpacity onPress={goAcoesPesquisa}>
        <Text style={{backgroundColor: 'white'}} >teste de pesquisa</Text>
      </TouchableOpacity >
        {/*card com imagem;/ nome da pesquisa
        https://www.youtube.com/watch?v=iHomYGbYIcQ
  https://www.youtube.com/watch?v=pK20wQO-mEA*/}
      </View>

      <View>
      <TouchableOpacity style={styles.Button} onPress={goNovaPesquisa}>
        <Text style={styles.TextButton} >NOVA PESQUISA</Text>
      </TouchableOpacity >
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  sectionStyle: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#e8e4ec', 
    height: 40,  
    margin:10,

  },
  imageStyle: {
    padding: 15, 
    margin: 10, 
    marginRight: 0,
    height: 20, 
    width: 20, 
    resizeMode: 'stretch', 
    alignItems: 'center', 
  },
  View: {
    backgroundColor: '#372775',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
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
export default Home;