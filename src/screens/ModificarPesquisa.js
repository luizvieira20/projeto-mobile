import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ModificarPesquisa = () => {

    return (
        <View style={styles.View}>
            <Text>Modificar Pesquisa</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    View: {
        backgroundColor: '#372775',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
    }
});

export default ModificarPesquisa;