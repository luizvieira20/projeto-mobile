import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ModificarPesquisa from './src/screens/ModificarPesquisa';
import NovaPesquisa from './src/screens/NovaPesquisa';
import Coleta from './src/screens/Coleta';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import AgradecimentoParticipacao from './src/screens/AgradecimentoParticipacao';
import Relatorio from './src/screens/Relatorio';
import Login from './src/screens/Login';
import DrawerNavigator from './src/screens/DrawerNavigator';
import Home from './src/screens/Home';
import RecuperarSenha from './src/screens/RecuperarSenha';
import CriarConta from './src/screens/CriarConta';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, headerTitleStyle: {color: 'white', fontSize: 25, fontFamily: 'AveriaLibre-Regular'}, headerStyle: {backgroundColor: '#2B1D62', height: 65}}} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AcoesPesquisa" component={AcoesPesquisa} options={{headerShown: true, headerTintColor: '#573FBA', headerTitle: 'Carnaval'}}/>
        <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa} options={{headerShown: true, headerTintColor: '#573FBA', headerTitle: 'Modificar pesquisa'}}/>
        <Stack.Screen name="NovaPesquisa" component={NovaPesquisa} options={{headerShown: true, headerTintColor: '#573FBA', headerTitle: 'Nova pesquisa'}} />
        <Stack.Screen name="Coleta" component={Coleta} />
        <Stack.Screen name="AgradecimentoParticipacao" component={AgradecimentoParticipacao} />
        <Stack.Screen name="Relatorio" component={Relatorio} options={{headerShown: true, headerTintColor: '#573FBA', headerTitle: 'Relatório'}}/>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen options={{headerShown: true, headerTintColor: '#573FBA', headerTitle: 'Recuperação de senha'}} name="RecuperarSenha" component={RecuperarSenha}/>
        <Stack.Screen options={{headerShown: true, headerTintColor: '#573FBA', headerTitle: 'Nova Conta'}} name="CriarConta" component={CriarConta}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;