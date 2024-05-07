import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
import Fallback from "../components/Fallback";

const TodoScreen = () => {
  // Init local states
  const [nakit, setNakit] = React.useState("");
  const [nakkilista, setNakkiLista] = React.useState([]);
  const [editedNakki, setEditedNakki] = React.useState(null);

  // Handle Add Nakit

  const handleAddNakit = () => {
    if (nakit === "") {
      return;
    }

    setNakkiLista([...nakkilista, { id: nakkilista.length + 1, title: nakit }]);
    setNakit("");
  };
  // Hadle Delete Nakit
  const handleDeleteNakit = (id) => {
    const updatedNakkilista = nakkilista.filter((item) => item.id !== id);
    setNakkiLista(updatedNakkilista);
  };
  // Handle Edit Nakit
  const handleEditNakit = (nakki) => {
    setEditedNakki(nakki);
    setNakit(nakki.title);
  };

  // Handle Update Nakit

  const handleUpdateNakit = () => {
    const updatedNakkilista = nakkilista.map((item) => {
      if (item.id === editedNakki.id) {
        return { ...item, title: nakit };
      }
      return item;
    });
    setNakkiLista(updatedNakkilista);
    setEditedNakki(null);
    setNakit("");
  };

  // Render nakit

  const renderNakit = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "#d4b6ff",
          borderRadius: 5,
          paddingHorizontal: 5,
          paddingVertical: 10,
          marginVertical: 5,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#23255d",
            fontSize: 16,
            fontWeight: "500",
            flex: 1,
          }}
        >
          {item.title}
        </Text>

{/* Myöhempää käyttöä varten <IconButton icon="checkbox-blank-outline" color="#23255d" size={20} /> */}
        
        <IconButton
          icon="pencil"
          color="#23255d"
          size={20}
          onPress={() => handleEditNakit(item)}
        />
        <IconButton
          icon="delete"
          color="#23255d"
          size={20}
          onPress={() => handleDeleteNakit(item.id)}
        />
      </View>
    );
  };
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginTop: 30,
      }}
    >
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          paddingVertical: 5,
          paddingHorizontal: 15,
        }}
        placeholder="Lisää nakki"
        value={nakit}
        onChangeText={(userText) => setNakit(userText)}
      />

      {editedNakki ? (
        <Pressable
          style={{
            backgroundColor: "#d4b6ff",
            padding: 10,
            borderRadius: 4,
            marginTop: 10,
            marginBottom: 20,
          }}
          onPress={handleUpdateNakit}
        >
          <Text
            style={{
              color: "#23255d",
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Tallenna muutokset
          </Text>
        </Pressable>
      ) : (
        <Pressable
          style={{
            backgroundColor: "#d4b6ff",
            padding: 10,
            borderRadius: 4,
            marginTop: 10,
            marginBottom: 20,
          }}
          onPress={handleAddNakit}
        >
          <Text
            style={{
              color: "#23255d",
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Lisää nakki
          </Text>
        </Pressable>
      )}
      {/* Render nakkilista */}
      <FlatList data={nakkilista} renderItem={renderNakit} />

      {nakkilista.length === 0 && <Fallback />}
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
