import { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const AgradecimentoParticipacao = (props) => {
    
    const goLogin = () => {
        props.navigation.navigate('Login')
      }

    useEffect(() => {
        const timer = setTimeout(() => {
            props.navigation.navigate('Login')
        }, 3000)
        
        return () => clearTimeout(timer)
    }, [props])

    return (
        <View style={styles.View}>
            <View style = {{flex: 1, alignItems: 'flex-end'}}>
                <TouchableOpacity style={styles.Voltar} onPress={goLogin}>
                </TouchableOpacity> 
            </View>    
            <View style={styles.Agradecer}>
                <Text style={styles.Text}>Obrigado por participar da pesquisa!</Text>
                <Text style={styles.Text}>Aguardamos você no proximo ano!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    View: {
        backgroundColor: '#372775',
        flex: 1,
    },
    Agradecer: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 30,
        color: 'white',
        margin: 15
    },
    Voltar: {
        width: 50,
        height: 50,
    }
});

export default AgradecimentoParticipacao;