import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react';

const AcoesPesquisa = ({route}) => {
    const navigation = useNavigation()

    const docId = route.params.data.id;
    const docNome = route.params.data.Nome;
    const docImagem = route.params.data.Imagem;
    const docDados = route.params.data.Dados;
    const docData = route.params.data.Data.toDate();

    useEffect(() => {
        navigation.setOptions({ headerTitle: docNome });
    }, []);

    const goRelatorio = () => {
        navigation.navigate('Relatorio')
    }
    const goModificar = () => {
        navigation.navigate('ModificarPesquisa', {docId, docNome, docData, docImagem})
    }
    
    const goColeta = () => {
        navigation.navigate('Coleta', {docNome, docId, docDados})
    }

    return (
        <View style={styles.View}>
            <View style={styles.View2}>
                <TouchableOpacity style={styles.Button} onPress={goModificar}>
                    <Icon name='printer-pos' size={70} color='white'/>
                    <Text style={styles.TextoButton}>Modificar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={goColeta}>
                    <Icon name='checkbox-multiple-outline' size={70} color='white'/>
                    <Text style={styles.TextoButton}>Coletar dados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={goRelatorio}>
                    <Icon name='chart-donut' size={70} color='white'/>
                    <Text style={styles.TextoButton}>Relatório</Text>
                </TouchableOpacity> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    View: {
        backgroundColor: '#372775',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
    },
    Texto: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 25
    },
    TextoButton: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 18
    },
    View2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Button:{
        backgroundColor: 'rgba(51, 0, 102, 0.5)',
        width: 140,
        height: 140,
        margin: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AcoesPesquisa;