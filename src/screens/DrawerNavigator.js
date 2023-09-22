import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaPrincipal from './TelaPrincipal';

const Drawer = createDrawerNavigator();

const Menu = (props) => {
  return (
      <Drawer.Navigator screenOptions={{drawerStyle: {backgroundColor: '#2B1D62', width: 270},
                                        headerStyle: {backgroundColor: '#2B1D62'}}}>
        <Drawer.Screen name="TelaPrincipal" component={TelaPrincipal}/>
      </Drawer.Navigator>
  );
}

export default Menu;