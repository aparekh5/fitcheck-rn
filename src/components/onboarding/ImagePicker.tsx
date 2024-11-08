import React, { useState } from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

interface ImagePickerProps {
  onNext: () => void;
}

const Container = styled.View`
  display: flex;
  background-color: red;
`;

const ImagePickerComponent: React.FC<ImagePickerProps> = ({ onNext }) => {
  const [images, setImages] = useState<string[]>([]);

  const pickImages = async () => {
    // Ask for permission to access the media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission required",
        "We need access to your photos to upload images."
      );
      return;
    }

    // Launch image picker with multi-selection enabled
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      selectionLimit: 3,
      quality: 1,
    });

    if (!result.canceled) {
      // Extract the selected URIs
      const selectedImages = result.assets.map((asset) => asset.uri);
      setImages(selectedImages.slice(0, 3)); // Ensure only up to 3 images
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <Container style={styles.container}>
      <Text style={styles.title}>Upload Your Images</Text>
      <View style={styles.imageContainer}>
        {images.map((image, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={{ uri: image }} style={styles.image} />
            <TouchableOpacity
              onPress={() => removeImage(index)}
              style={styles.removeButton}
            >
              <Text style={styles.removeText}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <Button
        title="Add Images"
        onPress={pickImages}
        disabled={images.length >= 3}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  imageWrapper: {
    position: "relative",
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  removeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "red",
    borderRadius: 12,
    padding: 4,
  },
  removeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default ImagePickerComponent;
