import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const StackScreen = () => {
    const [backgroundColor, setBackgroundColor] = useState("white");

    const changeBackgroundColor = (color) => {
        setBackgroundColor(color);
    };

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.title}>Botones</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, { backgroundColor: "red" }]} onPress={() => changeBackgroundColor("red")}>
                    <Text style={styles.buttonText}>Rojo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: "green" }]} onPress={() => changeBackgroundColor("green")}>
                    <Text style={styles.buttonText}>Verde</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: "blue" }]} onPress={() => changeBackgroundColor("blue")}>
                    <Text style={styles.buttonText}>Azul</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: "yellow" }]} onPress={() => changeBackgroundColor("yellow")}>
                    <Text style={styles.buttonText}>Amarillo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        marginBottom: 20
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%"
    },
    button: {
        flex: 1,
        margin: 5,
        padding: 15,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 18
    }
});

export default StackScreen;
