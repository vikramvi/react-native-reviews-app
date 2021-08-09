import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: "Elon", key: "1" },
    { name: "Shivaji", key: "2" },
    { name: "Ambedkar", key: "3" },
    { name: "Savarkar", key: "4" },
    { name: "Netaji", key: "5" },
    { name: "Patel", key: "6" },
    { name: "Modi", key: "7" }
  ]);


  return (
    <View style={styles.container}>
      <ScrollView>
        {
          people.map((item) => {
            return (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            )
          })
        }
      </ScrollView>
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
