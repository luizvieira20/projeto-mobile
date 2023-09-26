import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Coleta = (props) => {

    const goLogin = () => {
        props.navigation.navigate('Login')
      }

    const goAgradecimento = () => {
        props.navigation.navigate('AgradecimentoParticipacao')
      }

    return (
        <View style={styles.View}>
            <View style = {{alignItems: 'flex-end'}}>
                <TouchableOpacity style={styles.Voltar} onPress={goLogin}>
                </TouchableOpacity> 
            </View>    
            <View style={styles.ViewTexto}>
                <Text style = {styles.Texto}>O que você achou do Carnaval 2024?</Text>
            </View>
            <View style={styles.View2}>
                <TouchableOpacity style={styles.Button} onPress={goAgradecimento}>
                    <Icon name='sentiment-very-dissatisfied' size={70} color='red'/>
                    <Text style={styles.TextoButton}>Péssimo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={goAgradecimento}>
                    <Icon name='sentiment-dissatisfied' size={70} color='#f05522'/>
                    <Text style={styles.TextoButton}>Ruim</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={goAgradecimento}>
                    <Icon name='sentiment-neutral' size={70} color='yellow'/>
                    <Text style={styles.TextoButton}>Neutro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={goAgradecimento}>
                    <Icon name='sentiment-satisfied-alt' size={70} color='#18edbb'/>
                    <Text style={styles.TextoButton}>Bom</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={goAgradecimento}>
                    <Icon name='sentiment-very-satisfied' size={70} color='green'/>
                    <Text style={styles.TextoButton}>Excelente</Text>
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
    ViewTexto: {
        flex: 25,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    View2: {
        flex: 75,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Button:{
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Voltar: {
        width: 50,
        height: 50,
    }
});

export default Coleta;