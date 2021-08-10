import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: "Elon", id: "1" },
    { name: "Shivaji", id: "2" },
    { name: "Ambedkar", id: "3" },
    { name: "Savarkar", id: "4" },
    { name: "Netaji", id: "5" },
    { name: "Patel", id: "6" },
    { name: "Modi", id: "7" }
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id != id)
    })
  };


  return (
    <View style={styles.container}>

      <FlatList
        keyExtractor={item => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView>
        {
          people.map(item =>
            <View id={item id}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        }
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24
  }
});
