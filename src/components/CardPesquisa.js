import { Card, Title, Paragraph} from 'react-native-paper';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const CardPesquisa = ({ data }) => {
  const navigation = useNavigation();

  const goAcoesPesquisa = () => {
    navigation.navigate('AcoesPesquisa', {data});
  };

  return (
    <TouchableOpacity onPress={goAcoesPesquisa}>
    <Card style={styles.Card}>
      <Card.Cover style={styles.CardImage} source={ data.imagem } />
      <Card.Content>
        <Title style={styles.Title}>{data.nome}</Title>
        <Paragraph style={{fontSize: 11, textAlign: 'center'}}>{data.data}</Paragraph>
      </Card.Content>
    </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Card: {
    height: 160,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
    marginLeft: 16
  },
  CardImage: {
    height: 90,
    width: 90,
    marginTop: 8,
    marginLeft: 34
  },
  Title: {
    color: '#3F92C5',
    maxWidth: 150,
    height: 23,
    fontSize: 16,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    fontFamily: 'AveriaLibre-Regular'
  }
})

export default CardPesquisa;