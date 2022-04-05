import { StatusBar } from 'expo-status-bar';
import { FlatList, ListFooterComponent, SafeAreaView, StyleSheet, View } from 'react-native';
import Topo from './source/telas/Carrinho/Topo';
import Detalhes from './source/telas/Carrinho/Detalhes';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Mocks from './source/mocks/carrinho';
import Item from './source/telas/Carrinho/Item';
import Texto from './source/components/Texto';
import Trabalho from './source/telas/Carrinho/Trabalho';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <View></View>
  }

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={Mocks.itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}

        ListHeaderComponent={
          () => {
            return <>
              <Topo {...Mocks.topo} />
              <Detalhes {...Mocks.detalhes} />
              <Texto style={styles.titulo}>
                {Mocks.itens.titulo}
              </Texto>
            </>
          }
        }



        ListFooterComponent={
          () => {
            return <>              
              <Texto style={styles.tituloFooter}>
                {Mocks.trabalho.status}
              </Texto>
              <FlatList
                data={Mocks.trabalho.statuspedido}
                renderItem={Trabalho}
                keyExtractor={({ id }) => id}
               // data={Mocks.trabalho.statuspedido}
                //renderItem={Trabalho}
               // keyExtractor={({ id }) => id}
              />
            </>
          }
        }
      />

      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titulo: {
    color: '#ffa500',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 130,
    fontSize: 25
  },
  tituloFooter: {
    color: '#ffa500',
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 25
  },
});
