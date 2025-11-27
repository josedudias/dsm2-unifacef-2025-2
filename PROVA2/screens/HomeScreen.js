import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Agenda do dia</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>José Eduardo Dias Rufino</Text>
          <Text style={styles.infoText}>Engenharia de Software</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("MeusCompromissos")}
          >
            <Text style={styles.buttonText}>Meus compromissos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("CompromissosEquipe")}
          >
            <Text style={styles.buttonText}>Compromissos da equipe</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  infoText: {
    fontSize: 14,
    color: "#333",
  },
  buttonsContainer: {
    width: "100%",
    maxWidth: 300,
    gap: 15,
  },
  button: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#000",
  },
});
