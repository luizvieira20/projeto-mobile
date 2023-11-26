import { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const AgradecimentoParticipacao = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.pop();
        }, 3000)
        
        return () => clearTimeout(timer)
    }, [])

    return (
        <View style={styles.View}>  
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
    }
});

export default AgradecimentoParticipacao;