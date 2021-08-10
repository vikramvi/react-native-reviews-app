import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from "./components/header";

export default function App() {

  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "buy tea", key: "2" },
    { text: "buy coke", key: "3" },
  ])


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to-do form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) =>
              <Text>{item.text}</Text>
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
