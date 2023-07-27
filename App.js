import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image ,Text, SafeAreaView, View, Pressable } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <View style={styles.display}>
        <View style={styles.horaMinutoSegundo}>
          <Text style={styles.digitoHM}>00:00</Text>
          <Text style={styles.digitoS}>00</Text>
        </View>
        <View style={styles.local}>
          <Text style={styles.digitoLocal}>Brasília - DF (GMT-3)</Text>
        </View>
      </View>
      <Image
        source={require('./src/img/relogio.png')}
        resizeMode='contain'
        style={styles.img}
      />
      <View style={styles.areaBtn}>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Brasília - DF (GMT-3)</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}> França (GMT+2)</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Egito (GMT+3)</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404090',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '70%',
    height: '100%',
    position: 'absolute',
  },
  display: {
    width: '45%',
    height: '22%',
  },
  horaMinutoSegundo: {
    height: '75%',
    paddingTop: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  local: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
  },
  digitoHM: {
    fontSize: 80,
    fontWeight: 'bold',
    marginVertical: -20,
  },
  digitoS: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  digitoLocal: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  areaBtn: {
    position: 'absolute',
    top: '75%',
    width: '100%',
    alignItems: 'center',
  },
  btn: {
    height: 50,
    width: '70%',
    backgroundColor: '#FFFFFF',
    borderWidth:3,
    borderRadius:25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textBtn: {
    fontSize: 26,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
});
