// Parte 2: Exemplo de ImagePicker (Acesso à Galeria)
import React, { useState } from 'react';
import { View, Image, StyleSheet, Alert } from 'react-native';
import { Button, Text } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerScreen() {
  const [image, setImage] = useState(null);

  // Solicitar permissões ao montar o componente
  React.useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permissão necessária',
        'Desculpe, precisamos de permissão para acessar a galeria!'
      );
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível selecionar a imagem.');
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Selecionar da Galeria
      </Text>

      <Button
        mode="contained"
        icon="image"
        onPress={pickImage}
        style={styles.button}
      >
        Escolher Imagem da Galeria
      </Button>

      {image && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
          <Button
            mode="outlined"
            icon="close"
            onPress={() => setImage(null)}
            style={styles.clearButton}
          >
            Remover Imagem
          </Button>
        </View>
      )}

      {!image && (
        <Text style={styles.placeholder}>
          Nenhuma imagem selecionada
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 15,
  },
  clearButton: {
    marginTop: 10,
  },
  placeholder: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#999',
  },
});
