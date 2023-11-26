import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase/config';

const Coleta = ({route}) => {
    const navigation = useNavigation();
    const id = route.params.docId;

    let pessimo = route.params.docDados.Pessimo;
    let ruim = route.params.docDados.Ruim;
    let neutro = route.params.docDados.Neutro;
    let bom = route.params.docDados.Bom;
    let excelente = route.params.docDados.Excelente;

    const pesq = doc(db, "Pesquisas", id);

    const goVoltar = () => {
        navigation.pop()
    }

    const incPessimo = () => {
        pessimo = pessimo + 1;
        updateDoc(pesq, {
            Dados: {
                Pessimo: pessimo,
                Ruim: ruim,
                Neutro: neutro,
                Bom: bom,
                Excelente: excelente
              }
        });

        navigation.navigate('AgradecimentoParticipacao')
    }

    const incRuim = () => {
        ruim = ruim + 1;
        updateDoc(pesq, {
            Dados: {
                Pessimo: pessimo,
                Ruim: ruim,
                Neutro: neutro,
                Bom: bom,
                Excelente: excelente
              }
        });
        navigation.navigate('AgradecimentoParticipacao')
    }

    const incNeutro = () => {
        neutro = neutro + 1;
        updateDoc(pesq, {
            Dados: {
                Pessimo: pessimo,
                Ruim: ruim,
                Neutro: neutro,
                Bom: bom,
                Excelente: excelente
              }
        });
        navigation.navigate('AgradecimentoParticipacao')
    }

    const incBom = () => {
        bom = bom + 1;
        updateDoc(pesq, {
            Dados: {
                Pessimo: pessimo,
                Ruim: ruim,
                Neutro: neutro,
                Bom: bom,
                Excelente: excelente
              }
        });
        navigation.navigate('AgradecimentoParticipacao')
    }

    const incExcelente = () => {
        excelente = excelente + 1;
        updateDoc(pesq, {
            Dados: {
                Pessimo: pessimo,
                Ruim: ruim,
                Neutro: neutro,
                Bom: bom,
                Excelente: excelente
              }
        });
        navigation.navigate('AgradecimentoParticipacao')
    }

    return (
        <View style={styles.View}>
            <View style = {{alignItems: 'flex-end'}}>
                <TouchableOpacity style={styles.Voltar} onPress={goVoltar}>
                </TouchableOpacity> 
            </View>    
            <View style={styles.ViewTexto}>
                <Text style = {styles.Texto}>O que você achou do {route.params.docNome}?</Text>
            </View>
            <View style={styles.View2}>
                <TouchableOpacity style={styles.Button} onPress={incPessimo}>
                    <Icon name='sentiment-very-dissatisfied' size={70} color='red'/>
                    <Text style={styles.TextoButton}>Péssimo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={incRuim}>
                    <Icon name='sentiment-dissatisfied' size={70} color='#f05522'/>
                    <Text style={styles.TextoButton}>Ruim</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={incNeutro}>
                    <Icon name='sentiment-neutral' size={70} color='yellow'/>
                    <Text style={styles.TextoButton}>Neutro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={incBom}>
                    <Icon name='sentiment-satisfied-alt' size={70} color='#18edbb'/>
                    <Text style={styles.TextoButton}>Bom</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={incExcelente}>
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