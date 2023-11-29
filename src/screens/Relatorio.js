import { View, StyleSheet, Text } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { useSelector } from 'react-redux';

const Relatorio = () => {
    const dados = useSelector((state) => state.pesquisa.docDados); 
    const data = [
        {
            key: 1,
            value: dados.Pessimo,
            svg: { fill: '#53D8D8' },
            arc: { outerRadius: '125%', cornerRadius: 10 }
        },
        {
            key: 2,
            value: dados.Ruim,
            svg: { fill: '#EA7288' }
        },
        {
            key: 3,
            value: dados.Neutro,
            svg: { fill: '#5FCDA4' }
        },
        {
            key: 4,
            value: dados.Bom,
            svg: { fill: '#6994FE' }
        },
        {
            key: 5,
            value: dados.Excelente,
            svg: { fill: '#F1CE7E' }
        }
    ]
    return (
        <View style={styles.View}>
            <PieChart
                style={{ height: 280, width: 280}}
                outerRadius={'80%'}
                innerRadius={5}
                data={data}
            />
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
        flexWrap: 'nowrap',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    ViewColuna: {
        flexDirection: 'column'
    },

    ViewLinha: {
        flexDirection: 'row',
        marginLeft: 30
    },

    Text: {
        fontFamily: 'AveriaLibre-Regular',
        margin: 3,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15
      }
});

export default Relatorio;