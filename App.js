import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/screens/Login';
import Menu from './src/screens/Menu';
import TelaPrincipal from './src/screens/TelaPrincipal';
import RecuperarSenha from './src/screens/RecuperarSenha';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, headerTitleStyle: {color: 'white', fontSize: 25}, headerStyle: {backgroundColor: '#2B1D62'}}} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal}/>
        <Stack.Screen options={{headerShown: true, headerTintColor: '#573FBA', headerTitle: 'Recuperação de senha'}} name="RecuperarSenha" component={RecuperarSenha}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;