import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/screens/Login';
import DrawerNavigator from './src/screens/DrawerNavigator';
import TelaPrincipal from './src/screens/TelaPrincipal';
import RecuperarSenha from './src/screens/RecuperarSenha';
import CriarConta from './src/screens/CriarConta';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, headerTitleStyle: {color: 'white', fontSize: 25, fontFamily: 'AveriaLibre-Regular'}, headerStyle: {backgroundColor: '#2B1D62', height: 65}}} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal}/>
        <Stack.Screen options={{headerShown: true, headerTintColor: '#573FBA', headerTitle: 'Recuperação de senha'}} name="RecuperarSenha" component={RecuperarSenha}/>
        <Stack.Screen options={{headerShown: true, headerTintColor: '#573FBA', headerTitle: 'Nova Conta'}} name="CriarConta" component={CriarConta}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;