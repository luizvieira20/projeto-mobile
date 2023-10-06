import { Card, Title, Paragraph} from 'react-native-paper';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const CardPesquisa = ({ nome, data, imagem }) => {
  const navigation = useNavigation();

  const goAcoesPesquisa = () => {
    navigation.navigate('AcoesPesquisa', {nome, data, imagem});
  };

  return (
    <TouchableOpacity onPress={goAcoesPesquisa}>
    <Card style={styles.Card}>
      <Card.Cover style={styles.CardImage} source={ imagem } />
      <Card.Content>
        <Title style={styles.Title}>{nome}</Title>
        <Paragraph style={{fontSize: 11, textAlign: 'center'}}>{data}</Paragraph>
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