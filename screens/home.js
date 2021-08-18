import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: "test 1", rating: 5, body: "test body 1", key: "1" },
        { title: "test 2", rating: 1, body: "test body 2", key: "2" },
        { title: "test 3", rating: 3, body: "test body 3", key: "3" }
    ])

    return (
        <View style={globalStyles.container}>
            <Modal
                visible={modalOpen}
                animationType="slide"
                style={styles.modalContent}
            >
                <MaterialIcons
                    name="close"
                    size={24}
                    onPress={() => setModalOpen(false)}
                    style={{ ...styles.modalToggle, ...styles.modalClose }}
                />
                <View >
                    <Text>Hello from Modal :)</Text>
                </View>
            </Modal>

            <MaterialIcons
                name="add"
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "green",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
});