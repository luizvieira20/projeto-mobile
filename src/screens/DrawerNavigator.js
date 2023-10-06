import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {

  const goSair = () => {
    props.navigation.navigate('Login');
  }

  const CustomDrawerContent = (props) => {
    return (
      <View style={styles.Tela}>
        <View style={styles.Drawer}>
          <Text style={styles.Text}>usuario@dominio.com</Text>
          <View style={styles.Linha}></View>
          <TouchableOpacity style={styles.BotaoPesquisa} onPress={() => props.navigation.closeDrawer()}><Icon name="file-text-o" size={25} color={'white'}/><Text style={styles.TextBotao}>Pesquisas</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.BotaoSair} onPress={goSair}><Icon name="sign-out" size={28} color={'white'}/><Text style={styles.TextBotao}>Sair</Text></TouchableOpacity>
      </View>
    );
  }

  return (
    <Drawer.Navigator  screenOptions={{drawerStyle: {backgroundColor: '#2B1D62', width: 270}, headerStyle: {backgroundColor: '#2B1D62'}}} drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen options={{title: '', headerTintColor: 'white'}} name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  Tela: {
    flex: 1,
    justifyContent: 'space-between'
  },
  Drawer: {
    alignItems: 'center'
  },
  Linha: {
    height: 1,
    width: 190,
    backgroundColor: 'white',
    margin: 15
  },
  Text: {
    color: 'white',
    fontFamily: 'AveriaLibre-Light',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 30
  },
  BotaoSair: {
    height: 40,
    width: 75,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginLeft: 30,
    marginBottom: 20
  },
  BotaoPesquisa: {
    height: 40,
    width: 145,
    marginRight: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  TextBotao: {
    color: 'white',
    fontFamily: 'AveriaLibre-Light',
    fontSize: 22,
    textAlign: 'center'
  }
})

export default DrawerNavigator;