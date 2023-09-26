import { View, StyleSheet, Image, Text } from 'react-native';

const Relatorio = () => {
    return (
        <View style={styles.View}>
            <Image style={styles.Imagem} source = { require ('../../assets/images/grafico.png') }/>
            <View style={styles.ViewLinha}>
                <View style = {styles.ViewColuna}>
                    <Text style={{backgroundColor: '#F1CE7E', width: 13, marginTop: 5, height: 13, alignContent: 'center'}}></Text>
                    <Text style={{backgroundColor: '#6994FE', width: 13, marginTop: 11, height: 13, alignContent: 'center'}}></Text>
                    <Text style={{backgroundColor: '#5FCDA4', width: 13, marginTop: 11, height: 13, alignContent: 'center'}}></Text>
                    <Text style={{backgroundColor: '#EA7288', width: 13, marginTop: 11, height: 13, alignContent: 'center'}}></Text>
                    <Text style={{backgroundColor: '#53D8D8', width: 13, marginTop: 11, height: 13, alignContent: 'center'}}></Text>
                </View>
                <View style = {styles.ViewColuna}>
                    <Text style={styles.Text}>Excelente</Text>
                    <Text style={styles.Text}>Bom</Text>
                    <Text style={styles.Text}>Neutro</Text>
                    <Text style={styles.Text}>Ruim</Text>
                    <Text style={styles.Text}>Péssimo</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    View: {
        backgroundColor: '#372775',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    ViewColuna: {
        flexDirection: 'column',
    },

    ViewLinha: {
        flexDirection: 'row',
    },

    Text: {
        fontFamily: 'AveriaLibre-Regular',
        margin: 3,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15
      },

    Imagem: {
        justifyContent: 'center',
        height: 270,
        width: 270,
        marginRight: 30
    }
});

export default Relatorio;