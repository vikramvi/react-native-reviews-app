import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        { title: "test 1", rating: 5, body: "test body 1", key: "1" },
        { title: "test 2", rating: 1, body: "test body 2", key: "2" },
        { title: "test 3", rating: 3, body: "test body 3", key: "3" }
    ])

    return (
        <View style={globalStyles.container}>
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