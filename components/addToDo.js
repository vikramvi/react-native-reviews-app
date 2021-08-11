import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, } from 'react-native';

export default function AddToDo({ submitHandler }) {
    [text, setText] = useState("");

    const changeHandler = (val) => {
        setText(val);
    }

    const clearInput = () => {
        setText(" ");
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={(val) => changeHandler(val)}
                value={text}
                placeholder="new todo..."
            />
            <Button
                title="add to do"
                onPress={() => {
                    submitHandler(text);
                    clearInput();
                }}
                color="coral"
            />
        </View>
    )

}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    }
})