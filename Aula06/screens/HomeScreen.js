import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Inicial</Text>
      <Button
        title="Exemplo Básico"
        onPress={() => navigation.navigate('Exemplo Básico')}
      />
      <Button
        title="Validação de Formulário"
        onPress={() => navigation.navigate('Formulário de Validação')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 24, fontWeight: 'bold' }
});
