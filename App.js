import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Topo from './source/telas/Carrinho/Topo';
import Detalhes from './source/telas/Carrinho/Detalhes';
import Informacoes from './source/telas/Carrinho/Informacoes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Topo />
      <Detalhes />
      <Informacoes/>
        <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
