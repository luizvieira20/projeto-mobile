import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

const RecuperarSenha = () => {
    return (
        <View style={styles.View}>
            <View>
                <Text style={styles.Text}>E-mail</Text>
                <TextInput style={styles.TextInput} label="exemplo@gmail.com"/>
            </View>

            <TouchableOpacity style={styles.Button}><Text style={styles.TextButton}>RECUPERAR</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    TextInput: {
        width: 550,
        height: 40,
        marginBottom: 10
    },
    View: {
        backgroundColor: '#372775',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'R.font.averia libre',
    },
    Text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'left'
    },
    Button: {
        backgroundColor: '#37BD6D',
        width: 550,
        height: 30,
        borderRadius: 1,
        justifyContent: 'center',
        marginTop: 10
    },
    TextButton: {
        textAlign: 'center', 
        color: 'white', 
        fontSize: 17
    }
});

export default RecuperarSenha;