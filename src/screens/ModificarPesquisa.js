import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Modal } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-date-picker';

const ModificarPesquisa = ({route}) => {
  const {nome, imagem} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [date, setData] = useState(new Date('2024-02-16 01:01:01'));
  const [open, setOpen] = useState(false);

  const goHome = () => {
    setModalVisible(!modalVisible)
    navigation.navigate('DrawerNavigator');
  }
  const getDateString = (date) =>{
    return date.getDate().toString() + '/' + ((date.getMonth()+1).toString()) + '/' + date.getFullYear().toString() // nao estava coletando o mes certo sem o +1
}
  
  return (
     
    <View style={styles.View}>

      <View style={{flex: 1, marginTop: 30}}>
        <Modal transparent={true} animationType="slide" visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible);}}>

            <View style={{backgroundColor:'#000000aa', flex:1, justifyContent: 'center'}}>
                <View style={styles.ViewModal}>
                    <Text style={styles.TextModal}>Tem certeza de apagar essa pesquisa?</Text>

                    <View style={styles.View3}>
                        <TouchableOpacity onPress={goHome}
                         style={styles.ButtonModal1}>
                             <Text style={styles.TextButton}>SIM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.ButtonModal2}>
                            <Text style={styles.TextButton}>CANCELAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
      
      </View>

      <View>
        <View style={ {marginTop: -30} }>
        <Text style={styles.Text}>Nome</Text>
        <TextInput style={styles.TextInput2} value={nome}/>
    
        </View>

        <Text style={styles.Text}>Data</Text>

        <TouchableOpacity style={styles.sectionStyle} onPress={() => setOpen(true)}>
          <DatePicker modal open={open} date={date} mode ="date" locale = "pt-BR" onConfirm={(data) => { 
            setOpen(false)
            setData(data)
          }}
          onCancel={() => {
            setOpen(false)
          }}
          />
          <Text style={styles.textData}>{getDateString(date)}</Text>
          <Image 
            source={require('../../assets/images/calendario.png')} 
            style={styles.imageStyle} 
          /> 
        </TouchableOpacity>

        <Text style={styles.Text}>Imagem</Text>
        <View style={styles.View2}>

        <TouchableOpacity style={styles.ButtonImg}>
        <Image 
            source={imagem}
            style={styles.imageStyle} 
          /> 
          </TouchableOpacity>
        </View>

        <View style={styles.View3}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.TextButton}>SALVAR</Text>
          </TouchableOpacity>

          <View style={styles.View4}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name='trash-2'  size={30} style={styles.Icon}/>
          <Text style={styles.TextApagar}>Apagar</Text>
          </TouchableOpacity>
          </View>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    ViewModal: {
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor:'#372775',
        margin:50,
        padding:40,
    },
    TextApagar: {
        color: 'white',
    },
    TextModal: {
        margin: 10,
        color: 'white',
        fontSize: 20,
        textAlign: 'left',
        fontFamily: 'AveriaLibre-Regular'
    },
    View3 : {
        flexDirection: 'row', 
    },
    View4 : {
       marginLeft: 40,
       marginBottom: 30,
    },
    Icon: {
        color: 'white',
        marginLeft: 8,
    },
    sectionStyle: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      backgroundColor: '#e8e4ec', 
      height: 40,  
      margin:10,
      marginTop: 0,
      marginBottom: 0,
      width: 550,
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
        width: 500,
        height: 40,
        margin: 10,
        marginTop: 0,
        marginBottom: 0,
        borderRadius: 1,
        justifyContent: 'center'
      },
      ButtonModal1: { 
        backgroundColor: '#fa8585',
        width: 200,
        height: 40,
        margin: 10,
        marginTop: 0,
        marginBottom: 0,
        borderRadius: 1,
        justifyContent: 'center'
      },
      ButtonModal2: { 
        backgroundColor: '#3d94c4',
        width: 200,
        height: 40,
        margin: 10,
        marginTop: 0,
        marginBottom: 0,
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
        alignItems: 'center'
      },
      TextButtonImg: {
        textAlign: 'center', 
        color: 'grey', 
        fontSize: 17,
        fontFamily: 'AveriaLibre-Regular',
      },
      TextInput: {
        width: 560,
        height: 38,
        fontFamily: 'AveriaLibre-Regular'
      },
      TextInput2: {
        margin: 10, 
        marginTop: 0,
        marginBottom: 0,
        fontSize: 20,
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
      textData: {
        textAlign: 'center', 
        margin: 10,
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular'
      },
});

export default ModificarPesquisa;