import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

// Dados dos compromissos do usuário (conforme imagem de referência)
const meusCompromissos = [
  { id: "1", horario: "09h30", descricao: 'Reunião "Daily"' },
  {
    id: "2",
    horario: "14h00",
    descricao: "Reunião com cliente Carros & Carros",
  },
  { id: "3", horario: "16h30", descricao: "Prazo final Projeto X" },
];

export default function MeusCompromissosScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.compromissoItem}>
      <Text style={styles.compromissoTexto}>
        {item.horario}: {item.descricao}
      </Text>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitulo}>(Eu)</Text>
      <Text style={styles.headerInfo}>José Eduardo Dias Rufino</Text>
      <Text style={styles.headerInfo}>Engenharia de Software</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={meusCompromissos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContent: {
    paddingBottom: 20,
  },
  headerContainer: {
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  headerInfo: {
    fontSize: 14,
    color: "#333",
  },
  compromissoItem: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  compromissoTexto: {
    fontSize: 16,
    color: "#000",
  },
});
