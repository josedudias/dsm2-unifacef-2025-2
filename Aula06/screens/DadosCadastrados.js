import { View, Text, StyleSheet } from 'react-native';

export default function DadosCadastrados({ route }) {
  const { nome, email, telefone } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dados Cadastrados</Text>
      <Text style={styles.texto}>📛 Nome: {nome}</Text>
      <Text style={styles.texto}>📧 E-mail: {email}</Text>
      <Text style={styles.texto}>📞 Telefone: {telefone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  texto: { fontSize: 18, marginBottom: 10 },
});
