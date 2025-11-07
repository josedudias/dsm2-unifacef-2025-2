// Parte 3: Exemplo de Camera
import React, { useState, useRef } from 'react';
import { View, Image, StyleSheet, Alert } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function CameraScreen() {
  const [facing, setFacing] = useState('back');
  const [photo, setPhoto] = useState(null);
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);

  if (!permission) {
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Precisamos de sua permissão para usar a câmera
        </Text>
        <Button mode="contained" onPress={requestPermission}>
          Conceder Permissão
        </Button>
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 1,
          base64: false,
          exif: false,
        });
        setPhoto(photo.uri);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível tirar a foto.');
        console.log(error);
      }
    }
  };

  if (photo) {
    return (
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>
          Foto Capturada
        </Text>
        <Image source={{ uri: photo }} style={styles.preview} />
        <View style={styles.buttonRow}>
          <Button
            mode="contained"
            icon="check"
            onPress={() => Alert.alert('Sucesso', 'Foto salva!')}
            style={styles.actionButton}
          >
            Salvar
          </Button>
          <Button
            mode="outlined"
            icon="camera-retake"
            onPress={() => setPhoto(null)}
            style={styles.actionButton}
          >
            Tirar Outra
          </Button>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Câmera
      </Text>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.cameraButtonContainer}>
          <Button
            mode="contained"
            icon="camera-flip"
            onPress={toggleCameraFacing}
            style={styles.flipButton}
          >
            Virar
          </Button>
        </View>
      </CameraView>
      <Button
        mode="contained"
        icon="camera"
        onPress={takePicture}
        style={styles.captureButton}
      >
        Tirar Foto
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 20,
    fontSize: 16,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  camera: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  cameraButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 20,
  },
  flipButton: {
    alignSelf: 'flex-end',
  },
  captureButton: {
    marginTop: 10,
  },
  preview: {
    flex: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 5,
  },
});
