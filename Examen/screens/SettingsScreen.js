import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";

const StackScreen = () => {
    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >Video</Text>
            <Image 
                source={{ uri: 'https://media.tenor.com/x9efZijA7aYAAAAM/fsh-spin.gif' }}
                style={{
                    width: 200,
                    height: 200,
                    alignSelf: "center",
                    marginTop: 20
                }}
            />
        </View>
    );
    }

export default StackScreen;