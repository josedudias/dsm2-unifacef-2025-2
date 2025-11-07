# Aula 08 - Acesso à Câmera e Galeria usando Expo

Este projeto demonstra o uso de **expo-image-picker** e **expo-camera** para acessar a galeria de fotos e a câmera do dispositivo.

## 📋 Conteúdo

### Parte 2: Image Picker (Tela Galeria)
- Seleção de imagens da galeria do dispositivo
- Permissões para acesso à biblioteca de mídia
- Edição e visualização de imagens selecionadas
- Opção de remover imagens

### Parte 3: Camera (Tela Câmera)
- Captura de fotos usando a câmera do dispositivo
- Alternância entre câmera frontal e traseira
- Visualização da foto capturada
- Opções para salvar ou tirar outra foto

### Atividade Prática (Tela Atividade)
- Galeria completa de fotos
- Integração de câmera e seleção de galeria
- Gerenciamento de múltiplas imagens
- Remoção individual ou em lote
- Interface intuitiva com cards

## 🚀 Como executar

1. Instale as dependências:
```bash
cd Aula08
npm install
```

2. Inicie o projeto:
```bash
npm start
```

3. Execute no dispositivo/emulador:
- Pressione `a` para Android
- Pressione `i` para iOS
- Escaneie o QR Code com o app Expo Go

## 📦 Dependências principais

- `expo-image-picker`: Acesso à galeria de fotos
- `expo-camera`: Acesso à câmera do dispositivo
- `react-navigation`: Navegação entre telas
- `react-native-paper`: Componentes UI Material Design

## 🔐 Permissões

O app solicita as seguintes permissões:

### iOS
- `NSCameraUsageDescription`: Acesso à câmera
- `NSPhotoLibraryUsageDescription`: Acesso à galeria
- `NSMicrophoneUsageDescription`: Acesso ao microfone (para vídeos)

### Android
- `CAMERA`: Acesso à câmera
- `RECORD_AUDIO`: Gravação de áudio
- `READ_EXTERNAL_STORAGE`: Leitura da galeria
- `WRITE_EXTERNAL_STORAGE`: Escrita na galeria

## 💡 Funcionalidades

- ✅ Seleção de imagens da galeria com edição
- ✅ Captura de fotos com a câmera
- ✅ Alternância entre câmera frontal/traseira
- ✅ Galeria de múltiplas fotos
- ✅ Gerenciamento de imagens (adicionar/remover)
- ✅ Interface responsiva e intuitiva
- ✅ Tratamento de permissões
- ✅ Feedback visual ao usuário

## 📱 Telas

1. **Galeria (ImagePickerScreen)**: Seleção de uma imagem da galeria
2. **Câmera (CameraScreen)**: Captura de foto com a câmera
3. **Atividade (AtividadePraticaScreen)**: App completo com galeria de múltiplas fotos

## 🎯 Objetivos de Aprendizagem

- Solicitar e gerenciar permissões no React Native
- Usar o expo-image-picker para seleção de imagens
- Usar o expo-camera para captura de fotos
- Implementar navegação por abas
- Gerenciar estado de múltiplas imagens
- Criar interfaces intuitivas para manipulação de mídia
