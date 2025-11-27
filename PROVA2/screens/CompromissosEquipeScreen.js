import React from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";

// Dados dos compromissos da equipe (conforme imagem de referência)
// Usando SectionList pois os dados estão agrupados por pessoa
const compromissosEquipe = [
  {
    title: "(Eu)",
    nome: "José Eduardo Dias Rufino",
    turma: "Engenharia de Software",
    mostrarInfo: true,
    data: [
      { id: "1", horario: "09h30", descricao: 'Reunião "Daily"' },
      {
        id: "2",
        horario: "14h00",
        descricao: "Reunião com cliente Carros & Carros",
      },
      { id: "3", horario: "16h30", descricao: "Prazo final Projeto X" },
    ],
  },
  {
    title: "Jurema (chefe)",
    data: [
      { id: "4", horario: "09h30", descricao: 'Reunião "Daily"' },
      { id: "5", horario: "12h00", descricao: "Almoço com a diretoria" },
      { id: "6", horario: "15h00", descricao: "Saída viagem" },
    ],
  },
  {
    title: "Aderbal",
    data: [
      { id: "7", horario: "09h30", descricao: 'Reunião "Daily"' },
      { id: "8", horario: "13h30", descricao: "Visita técnica Uni-FACEF" },
      { id: "9", horario: "16h30", descricao: "Prazo final Projeto X" },
    ],
  },
];

export default function CompromissosEquipeScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.compromissoItem}>
      <Text style={styles.compromissoTexto}>
        {item.horario}: {item.descricao}
      </Text>
    </View>
  );

  const renderSectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      {section.mostrarInfo && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{section.nome}</Text>
          <Text style={styles.infoText}>{section.turma}</Text>
        </View>
      )}
      <Text style={styles.sectionTitle}>{section.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={compromissosEquipe}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled={false}
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
  infoContainer: {
    alignItems: "center",
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: "#333",
  },
  sectionHeader: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  compromissoItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  compromissoTexto: {
    fontSize: 16,
    color: "#000",
  },
});
