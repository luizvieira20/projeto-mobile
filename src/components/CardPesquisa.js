import { Card, Title, Paragraph} from 'react-native-paper';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardPesquisa = ({data}) => {
  const navigation = useNavigation();
  const urlImagem = data.urlImagem

  const nome = data.Nome;
  const datas = data.Data.toDate();

  const getDateString = (date) => {
    return date.getDate().toString() + '/' + ((date.getMonth()+1).toString()) + '/' + date.getFullYear().toString();
  }

  const goAcoesPesquisa = () => {
    navigation.navigate('AcoesPesquisa', {data});
  };

  return (
    <TouchableOpacity onPress={goAcoesPesquisa}>
    <Card style={styles.Card}>
      <Card.Cover style={styles.CardImage} source={{uri: urlImagem}}/>
      <Card.Content style={{height: 60, width: 160, justifyContent: 'center', marginTop: 5}}>
        <Title style={styles.Title}>{nome}</Title>
        <Paragraph style={{fontSize: 11, textAlign: 'center'}}>{getDateString(datas)}</Paragraph>
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
    marginTop: 5,
    marginLeft: 35,
    alignItems: 'center'
  },
  Title: {
    color: '#3F92C5',
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