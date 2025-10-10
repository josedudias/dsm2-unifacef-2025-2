import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function FormValidation({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erros, setErros] = useState({});

  const handleCadastro = () => {
    const _erros = {};

    if (!nome.trim()) {
      _erros.nome = 'O nome é obrigatório';
    }

    if (!email.includes('@')) {
      _erros.email = 'Digite um e-mail válido';
    }

    if (!/^[0-9]+$/.test(telefone)) {
      _erros.telefone = 'O telefone deve conter apenas números';
    }

    if (senha.length < 6) {
      _erros.senha = 'A senha deve ter no mínimo 6 caracteres';
    }

    if (senha !== confirmarSenha) {
      _erros.confirmarSenha = 'As senhas não coincidem';
    }

    setErros(_erros);

    if (Object.keys(_erros).length === 0) {
      // Envia os dados para a próxima tela
      navigation.navigate('Dados', {
        nome,
        email,
        telefone,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />
      {erros?.nome && <Text style={styles.erro}>{erros.nome}</Text>}

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      {erros?.email && <Text style={styles.erro}>{erros.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        keyboardType="numeric"
        value={telefone}
        onChangeText={setTelefone}
      />
      {erros?.telefone && <Text style={styles.erro}>{erros.telefone}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      {erros?.senha && <Text style={styles.erro}>{erros.senha}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />
      {erros?.confirmarSenha && (
        <Text style={styles.erro}>{erros.confirmarSenha}</Text>
      )}

      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
  erro: { color: 'red', marginBottom: 10 },
});
