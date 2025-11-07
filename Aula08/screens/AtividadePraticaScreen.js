// Atividade Prática: App completo com Câmera e Galeria
import React, { useState } from 'react';
import { View, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import { Button, Text, Card, IconButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function AtividadePraticaScreen() {
  const [images, setImages] = useState([]);
  const [showCamera, setShowCamera] = useState(false);
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = React.useRef(null);

  React.useEffect(() => {
    requestGalleryPermission();
  }, []);

  const requestGalleryPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permissão necessária',
        'Precisamos de permissão para acessar a galeria!'
      );
    }
  };

  const pickImageFromGallery = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        addImage(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível selecionar a imagem.');
      console.log(error);
    }
  };

  const openCamera = async () => {
    if (!permission) {
      await requestPermission();
    }
    if (permission?.granted) {
      setShowCamera(true);
    }
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 1,
        });
        addImage(photo.uri);
        setShowCamera(false);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível tirar a foto.');
        console.log(error);
      }
    }
  };

  const addImage = (uri) => {
    setImages([...images, { id: Date.now().toString(), uri }]);
  };

  const removeImage = (id) => {
    setImages(images.filter(img => img.id !== id));
  };

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  if (showCamera) {
    if (!permission?.granted) {
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

    return (
      <View style={styles.container}>
        <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
          <View style={styles.cameraControls}>
            <IconButton
              icon="camera-flip"
              iconColor="white"
              size={30}
              onPress={toggleCameraFacing}
              style={styles.flipButton}
            />
          </View>
        </CameraView>
        <View style={styles.cameraButtonContainer}>
          <Button
            mode="outlined"
            icon="close"
            onPress={() => setShowCamera(false)}
            style={styles.cameraActionButton}
            textColor="white"
          >
            Cancelar
          </Button>
          <Button
            mode="contained"
            icon="camera"
            onPress={takePicture}
            style={styles.cameraActionButton}
          >
            Capturar
          </Button>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Galeria de Fotos
      </Text>

      <View style={styles.actionButtons}>
        <Button
          mode="contained"
          icon="camera"
          onPress={openCamera}
          style={styles.mainButton}
        >
          Tirar Foto
        </Button>
        <Button
          mode="contained"
          icon="image"
          onPress={pickImageFromGallery}
          style={styles.mainButton}
        >
          Escolher da Galeria
        </Button>
      </View>

      <ScrollView style={styles.gallery}>
        {images.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>
              Nenhuma foto adicionada ainda
            </Text>
            <Text style={styles.emptySubtext}>
              Tire uma foto ou escolha da galeria
            </Text>
          </View>
        ) : (
          <View style={styles.imageGrid}>
            {images.map((img) => (
              <Card key={img.id} style={styles.imageCard}>
                <Image source={{ uri: img.uri }} style={styles.gridImage} />
                <IconButton
                  icon="delete"
                  iconColor="red"
                  size={24}
                  onPress={() => removeImage(img.id)}
                  style={styles.deleteButton}
                />
              </Card>
            ))}
          </View>
        )}
      </ScrollView>

      {images.length > 0 && (
        <Button
          mode="outlined"
          icon="delete-sweep"
          onPress={() => {
            Alert.alert(
              'Limpar Galeria',
              'Deseja remover todas as fotos?',
              [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Limpar', onPress: () => setImages([]) },
              ]
            );
          }}
          style={styles.clearAllButton}
        >
          Limpar Todas ({images.length})
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    marginTop: 20,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  mainButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  gallery: {
    flex: 1,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    marginBottom: 10,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#bbb',
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  imageCard: {
    width: '47%',
    margin: '1.5%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  gridImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  deleteButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  clearAllButton: {
    margin: 20,
  },
  camera: {
    flex: 1,
  },
  cameraControls: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  flipButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  cameraButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  cameraActionButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  message: {
    textAlign: 'center',
    paddingBottom: 20,
    fontSize: 16,
  },
});
