import { View, StyleSheet, Text } from 'react-native';

const Home = () => {

  return (
    <View style={styles.View}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    View: {
      backgroundColor: '#372775',
      flex: 1
    }
})

export default Home;