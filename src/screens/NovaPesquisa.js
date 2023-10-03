import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';

const NovaPesquisa = (props) => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  

  return (
    <View style={styles.View}>
      <View>
        <View>
        <Text style={styles.Text}>Nome</Text>
        <TextInput style={styles.TextInput2} value={nome} onChangeText={setNome}/>
        <Text style={styles.TextRed}>Preencha no nome da pesquisa</Text>
        </View>


        <Text style={styles.Text}>Data</Text>
        
        <View style={styles.sectionStyle}>

        <TextInput style={styles.TextInput}
          placeholder="Insira o termo de busca..." 
          underlineColorAndroid="transparent" 
          value={data} onChangeText={setData}
        /> 
        <Image 
          source={require('../../assets/images/calendario.png')} 
          style={styles.imageStyle} 
        /> 
      </View>
      <Text style={styles.TextRed}>Preencha a data</Text>
      <Text style={styles.Text}>Imagem</Text>
      <View style={styles.View2}>

      <TouchableOpacity style={styles.ButtonImg}>
          <Text style={styles.TextButtonImg}>Câmera/Galeria de Imagens</Text>
        </TouchableOpacity>
      </View>

        <View>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.TextButton}>CADASTRAR</Text>
        </TouchableOpacity>
        </View>

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
        marginTop: 0,
        marginBottom: 0,
      },
      imageStyle: {
        padding: 15, 
        margin: 10, 
        marginLeft: 0,
        
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
      View2: {
        backgroundColor: '#372775',
        flex: 1,
        justifyContent: 'flex-start',
        marginLeft: 10,
      },
      Button: {
        backgroundColor: '#37BD6D',
        width: 550,
        height: 40,
        margin: 10,
        marginTop: 0,
        marginBottom: 10,
        borderRadius: 1,
        justifyContent: 'center'
      },
      ButtonImg: {
        backgroundColor: '#e8e4ec',
        width: 300,
        height: 60,
        borderRadius: 1,
        marginTop: 0,
        marginBottom: 0,
        justifyContent: 'center',
      },
      TextButtonImg: {
        textAlign: 'center', 
        color: 'grey', 
        fontSize: 17,
        fontFamily: 'AveriaLibre-Regular',
      },
      TextInput: {
        width: 500,
        height: 38,
        fontFamily: 'AveriaLibre-Regular'
      },
      TextInput2: {
        margin: 10, 
        marginTop: 0,
        marginBottom: 0,
        width: 550,
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
        margin: 0,
        marginTop:5,
        marginLeft: 10,
        color: 'white',
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'AveriaLibre-Regular'
      },
      TextRed: {
        margin: 0,
        marginLeft: 10,
        color: '#F57A75',
        fontSize: 13,
        textAlign: 'left',
        fontFamily: 'AveriaLibre-Regular'
      },
      TextButton: {
        textAlign: 'center', 
        color: 'white', 
        fontSize: 17,
        fontFamily: 'AveriaLibre-Regular'
      },
});

export default NovaPesquisa;